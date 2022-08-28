import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.element.nativeElement, "background-color", "green");
    this.render.setAttribute(this.element.nativeElement, "title", "attribute added with set attribut rendere2");
    this.render.addClass(this.element.nativeElement, "directive-style");
    // throw new Error('Method not implemented.');
  }

}
