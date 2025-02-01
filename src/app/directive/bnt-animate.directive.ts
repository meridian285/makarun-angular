import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[bntAnimate]'
})
export class BntAnimateDirective implements OnInit {

  @Input() bntAnimateDefaultBgImage: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() bntAnimateMouseEnterBgImage: string = 'linear-gradient(90deg, rgb(18 16 16) 0%, rgb(215, 72, 92) 100%)';

  private _backgroundImage: string = '';
  @HostBinding('style.backgroundImage')
  get getBgImage() {
    return this._backgroundImage;
  }

  @HostListener('mouseenter')
  omMouseEnter() {
    this.changeElementBgColor(this.bntAnimateMouseEnterBgImage);
  }

  @HostListener('mouseleave')
  omMouseLeave() {
    this.changeElementBgColor(this.bntAnimateDefaultBgImage);
  }

  constructor(private btn: ElementRef, private rend: Renderer2) {
  }

  ngOnInit() {
  }

  changeElementBgColor(color: string) {
    this._backgroundImage = color;
  }

}
