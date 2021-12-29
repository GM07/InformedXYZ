import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from 'src/models/video';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  static readonly serverURL: string = 'http://localhost:5000/';
  static readonly youtubeApi: string = ServerService.serverURL + 'youtube/'

  constructor(private http: HttpClient) { }

  getYoutubeVideosFromQuery(query: string) : Observable<Video[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
    })};

    return this.http.get<Video[]>(ServerService.youtubeApi + query, httpOptions).pipe();
  }
}
