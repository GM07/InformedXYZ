import { Channel } from "src/models/channel";

export class Video {
    id: string;
    url: string;
    title: string;
    channel: Channel;
    thumbnail: string;
    description: string;
    html: string;

    constructor(id: string, url: string, title: string, channel: Channel, thumbnail: string, description: string, html: string) {
        this.id = id;
        this.url = url;
        this.title = title;
        this.channel = channel;
        this.thumbnail = thumbnail;
        this.description = description;
        this.html = html;
    }
}