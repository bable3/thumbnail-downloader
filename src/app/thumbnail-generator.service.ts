import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  observable,
  Subject,
  Subscriber,
} from 'rxjs';
import {
  map,
  catchError,
  tap,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { Video } from './video';

@Injectable({
  providedIn: 'root',
})
export class ThumbnailGeneratorService {
  apiKey: string = 'AIzaSyDITWIPNe7R0IA67L7ANWK07QmksbR1ZVk';
  http!: HttpClient;
  videoData!: Subscriber<any>;
  constructor(http: HttpClient) {
    this.http = http;
  }
  generateThumbnail(url: string): any {
    const id = this.findIdFromUrl(url);
    return this.getVideoData(id);
  }
  findIdFromUrl(url: string): string {
    const query = new URL(url);
    const urlParams = new URLSearchParams(query.search);
    return urlParams.get('v') ?? '';
  }
  getChannelData(id: string): any {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('id', id)
      .set('key', this.apiKey);
    return this.http.get(`https://www.googleapis.com/youtube/v3/channels`, {
      params,
    });
  }
  getChannelThumbnail(response: any): any {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('id', response.channelId)
      .set('key', this.apiKey);
    return this.http
      .get(`https://www.googleapis.com/youtube/v3/channels`, {
        params,
      })
      .pipe(
        map((response: any) => {
          return response.items[0].snippet.thumbnails.default.url;
        }),
        map((thumbnailUrl) => {
          return {
            ...response,
            channelThumbnailUrl: thumbnailUrl,
          };
        })
      );
  }

  getVideoData(id: string): any {
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,contentDetails,statistics')
      .set('key', this.apiKey);
    return this.http
      .get('https://youtube.googleapis.com/youtube/v3/videos', { params })
      .pipe(
        map((response: any) => {
          return response.items[0];
        }),
        map((response: any) => {
          let video: any;
          video = {
            id: response.id,
            title: response.snippet.title,
            description: response.snippet.description,
            thumbnailUrl: response.snippet.thumbnails.medium.url,
            duration: response.contentDetails.duration,
            viewCount: response.statistics.viewCount,
            likeCount: response.statistics.likeCount,
            publishedAt: response.snippet.publishedAt,
            channelTitle: response.snippet.channelTitle,
            channelId: response.snippet.channelId,
          };
          return video;
        }),
        mergeMap((response: any) => this.getChannelThumbnail(response))
      );
  }
}
