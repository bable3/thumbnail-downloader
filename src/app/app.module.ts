import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThumbnailFormComponent } from './thumbnail/thumbnail-form/thumbnail-form.component';
import { ThumbnailRendererComponent } from './thumbnail/thumbnail-renderer/thumbnail-renderer.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NumberProcessPipe } from './number-process.pipe';
import { YoutubeTimePipe } from './youtube-time.pipe';
import { DateFromTodayPipe } from './date-from-today.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailFormComponent,
    ThumbnailRendererComponent,
    ThumbnailComponent,
    NumberProcessPipe,
    YoutubeTimePipe,
    DateFromTodayPipe,
    TimeAgoPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
