import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
    pageTitle: string = 'Product List';
    showImage: boolean;
    listFilter: string; 

    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;

    @ViewChild('filterElement') filterElementRef: ElementRef; //native html element DOM
    @ViewChild(NgModel) filterInput: NgModel; //access data structures, state model (ex.: dirty, valid, reset etc etc)

    filteredProducts: IProduct[];
    products: IProduct[];

    constructor(private productService: ProductService) { 
    }

    ngAfterViewInit(): void {
        this.filterInput.valueChanges.subscribe(
            () => this.performFilter(this.listFilter)
        );
        this.filterElementRef.nativeElement.focus();
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (products: IProduct[]) => {
                this.products = products;
                this.performFilter(this.listFilter);
            },
            (error: any) => this.errorMessage = <any>error
        );
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy?: string): void {
        if (filterBy) {
            this.filteredProducts = this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
        } else {
            this.filteredProducts = this.products;
        }
    }
}
