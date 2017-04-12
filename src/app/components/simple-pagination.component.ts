import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'simple-pagination',
	template: `
		<button (click)="previousPage()" [disabled]="!hasPrevious()">Previous</button>
		<button (click)="nextPage()" [disabled]="!hasNext()">Next</button>

		<p>page {{ page }} of {{ pageCount }}</p>
	`
})

export class SimplePaginationComponent {
	@Input() pageCount: number;
	@Input() page : number;
	@Output() pageChanged = new EventEmitter<number>();

	nextPage(){
		this.page ++;
		this.pageChanged.emit(this.page);
	}

	previousPage() {
		this.page --;
		this.pageChanged.emit(this.page);
	}

	hasPrevious(): boolean {return + this.page > 1;}
	hasNext(): boolean {return + this.page < + this.pageCount;}
}