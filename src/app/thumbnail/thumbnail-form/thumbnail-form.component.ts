import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThumbnailGeneratorService } from '../../thumbnail-generator.service';

@Component({
  selector: 'thumbnail-form',
  templateUrl: './thumbnail-form.component.html',
  styleUrls: ['./thumbnail-form.component.scss'],
})
export class ThumbnailFormComponent implements OnInit {
  url: string = 'https://www.youtube.com/watch?v=d1HUFPBWUh4';
  @Output() onSubmitEmitter = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onSubmit(): void {
    this.onSubmitEmitter.emit(this.url);
  }
}
