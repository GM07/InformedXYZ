import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SanitizeHtmlPipe } from './pipes/sanitize_html_pipe';
import { FormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    HomeComponent,
    RootComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    FormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
