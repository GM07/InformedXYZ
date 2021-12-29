import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Video } from 'src/models/video';

class ElementRef<T> {
    constructor(nativeElement: T) {
        this.nativeElement = nativeElement;
    }
    nativeElement: T
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    query: string = "";
    videos: Video[] = [];
    loading: boolean = false;
    currentVideoIndex = 0;
    responsiveOptions;

    constructor(private serverService: ServerService) { 
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
    
    ngOnInit(): void {
        
    }

    search(): void {
      console.log('Searching query : ' + this.query);
      if (this.query == '') 
          return;
      this.loading = true;
      this.serverService.getYoutubeVideosFromQuery(this.query).subscribe((videos: Video[]) => {
          this.videos = videos;
          this.loading = false;
          
      });
    }

    nextVideo(): void {
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
        console.log('New index ' + this.currentVideoIndex);
    }

    previousVideo(): void {
        if (--this.currentVideoIndex < 0)
            this.currentVideoIndex += this.videos.length
    }
}
