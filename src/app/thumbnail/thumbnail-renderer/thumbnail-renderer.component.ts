import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'thumbnail-renderer',
  templateUrl: './thumbnail-renderer.component.html',
  styleUrls: ['./thumbnail-renderer.component.scss'],
})
export class ThumbnailRendererComponent implements OnInit {
  @Input() thumbnail: any;
  grid: boolean = false;
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  downloadImage() {
    html2canvas(this.screen.nativeElement, {
      allowTaint: true,
      logging: true,
    }).then((canvas) => {
      canvas.toBlob(function (blob: Blob | null): void {
        const newImg = document.createElement('img');
        const url = URL.createObjectURL(blob ?? new Blob());

        newImg.onload = function () {
          // no longer need to read the blob so it's revoked
          URL.revokeObjectURL(url);
        };

        newImg.src = url;
        newImg.crossOrigin = 'Anonymous';
        document.body.appendChild(newImg);
      });
    });
  }
}
