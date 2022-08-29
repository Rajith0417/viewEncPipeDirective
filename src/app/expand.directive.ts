import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExpand]'
})
export class ExpandDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener("mouseenter") onmouseover(){
    console.log("mouserover");
    this.render.setStyle(this.element.nativeElement, "font-size", "50px");
    this.render.setStyle(this.element.nativeElement, "padding", "60px");
    this.render.setStyle(this.element.nativeElement, "transition", "0.5s");

  }

  @HostListener("mouseleave") onmouseout(){
    console.log("mouseout");
    this.render.setStyle(this.element.nativeElement, "font-size", "20px");
    this.render.setStyle(this.element.nativeElement, "padding", "20px");
    this.render.setStyle(this.element.nativeElement, "transition", "0.5s");
  }

}
