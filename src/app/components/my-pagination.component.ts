import {Component} from '@angular/core';
import {SimplePaginationComponent} from "./simple-pagination.component";

@Component({
	selector: 'my-pagination',
	template: ` 
		<a (click)="previousPage()" [class.disabled]="!hasPrevious()"
						href="javascript:void(0)">
		««
	</a>
	<span>{{ page }} / {{ pageCount }}</span>
	<a (click)="nextPage()" [class.disabled]="!hasNext()"
		href="javascript:void(0)" >
		»»
	</a>
	`
})

export class MyPaginationComponent extends SimplePaginationComponent { }