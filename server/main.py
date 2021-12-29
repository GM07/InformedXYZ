from flask import Flask, jsonify
from flask_cors import CORS
from markupsafe import escape
from werkzeug.utils import redirect

from youtube_api import YoutubeApi

app = Flask(__name__)
CORS(app)

youtube_api_file = open('secret/youtube.api', 'r')
youtube_key = youtube_api_file.read()
youtube = YoutubeApi(api_key=youtube_key)

# @app.route('/user/<username>')
# def user(username):
#     return f'Hello {escape(username)}'


# @app.route('/number/<int:min>/<int:max>')
# def topic(min: int, max: int):
#     return (f'You wanted a number between {str(min)} and {str(max)} and you got : ') + str(random.randint(min, max))

@app.route('/youtube/<string:subject>')
def youtube_search_subject(subject):

    global youtube
    results = youtube.get_videos_by_subject(subject)
    return jsonify(list(map(lambda x: x.toJson(), results)))
