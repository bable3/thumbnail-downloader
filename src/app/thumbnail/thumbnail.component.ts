import { Component, OnInit } from '@angular/core';
import { ThumbnailGeneratorService } from '../thumbnail-generator.service';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  isThumbnailGenerated: boolean = false;
  thumbnailGeneratorService!: ThumbnailGeneratorService;
  thumbnail!: any;
  constructor(thumbnailGeneratorService: ThumbnailGeneratorService) {
    this.thumbnailGeneratorService = thumbnailGeneratorService;
  }
  ngOnInit(): void {
    this.generateThumbnail('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
  generateThumbnail(data: string): void {
    this.thumbnailGeneratorService
      .generateThumbnail(data)
      .subscribe((thumbnail: any) => {
        this.thumbnail = thumbnail;
        this.isThumbnailGenerated = true;
      });
  }
}
