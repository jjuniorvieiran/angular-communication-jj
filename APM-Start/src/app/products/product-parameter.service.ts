import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class ProductParameterService implements OnDestroy {
  showImage: boolean;
  filterBy: string;

  constructor() { 
    console.log('service created');
  }

  ngOnDestroy(): void {
    console.log('>>> service destroyed');
  }

}
