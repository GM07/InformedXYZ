from pyyoutube import Api, SearchResult, VideoSnippet

class Serializable:
    def toJson(self) -> dict:
        pass

class Channel(Serializable):

    def __init__(self, id: str, title: str):
        self.id = id
        self.title = title

    def toJson(self) -> dict:
        return {'id': self.id, 'title': self.title}

class Video(Serializable):

    def __init__(self, id: str, url: str, title: str, channel: Channel, thumbnail: str, description: str, html=''):
        self.id = id
        self.url = url
        self.title = title
        self.channel = channel
        self.thumbnail = thumbnail
        self.description = description
        self.html = html

    def toJson(self) -> dict:
        return {
        'id': self.id,
        'url': self.url,
        'title': self.title,
        'channel': self.channel.toJson(),
        'thumbnail': self.thumbnail,
        'description': self.description,
        'html': self.html
        }
    
class YoutubeApi:

    MAX_VIDEOS: int = 10

    def __init__(self, api_key: str):
        self.api = Api(api_key=api_key)

    def get_videos_by_subject(self, subject: str):
        results = self.api.search_by_keywords(
            q=subject, 
            search_type=['video'], 
            count=YoutubeApi.MAX_VIDEOS, 
            limit=YoutubeApi.MAX_VIDEOS)

        return list(map(self.fromSearchResult, results.items))

    def fromSearchResult(self, result: SearchResult):
        try:
            video_response = self.api.get_video_by_id(video_id=result.id.videoId).items[0]
            snippet = video_response.snippet
            return Video(
                id=video_response.id,
                url=YoutubeApi.__retrieveUrlFromHtml(video_response.player.embedHtml),
                title=snippet.title,
                channel=Channel(snippet.channelId, snippet.channelTitle), 
                thumbnail=snippet.thumbnails.default.url, 
                description=snippet.description,
                html=video_response.player.embedHtml)
        except AttributeError:
            print('Error parsing video')
            return Video('', '', Channel('', ''), '', '', '')

    def __retrieveUrlFromHtml(html: str):
        start_str, end_str = "src=\"//", "\""
        start = html.find(start_str) + len(start_str)
        end = html.find(end_str, start)
        return html[start:end].replace("embed/", "watch?v=")

