import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() imgUrl:string = "";
    @Input() msg:string = "";
    @Input() description:string = "";
    @Input() price:number = 0;
    @Input() isExclusive:boolean = false;
}
