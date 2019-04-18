import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appFirstMovie]'
})
export class FirstMovieDirective implements OnInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.myBackGroundColor('yellow', 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.myBackGroundColor(null, 'black');
    }

    private myBackGroundColor(backGroundColor: string, color: string) {
        this.elRef.nativeElement.style.backgroundColor = backGroundColor;
        this.elRef.nativeElement.style.color = color;

    }

}
