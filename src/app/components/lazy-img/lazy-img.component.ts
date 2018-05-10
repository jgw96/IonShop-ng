import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lazy-img',
  templateUrl: './lazy-img.component.html',
  styleUrls: ['./lazy-img.component.css']
})
export class LazyImgComponent implements AfterViewInit {

  @Input() src = '';
  @Input() alt: string;

  @ViewChild('lazyImg') lazyImg: ElementRef;

  io: IntersectionObserver;
  loaded = 'hidden';

  constructor() { }

  ngAfterViewInit() {
    this.addIntersectionObserver();
  }

  handleImage() {
    if (!this.lazyImg.nativeElement.src) {
      this.lazyImg.nativeElement.src = this.src;

      this.lazyImg.nativeElement.addEventListener('load', () => {
        this.loaded = 'inherit';
      });
    }
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      });

      this.io.observe(this.lazyImg.nativeElement);
    } else {
      // fall back to just loading the image for Safari and IE
      this.handleImage();
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

}
