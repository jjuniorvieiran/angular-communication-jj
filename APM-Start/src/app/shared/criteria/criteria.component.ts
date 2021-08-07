import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, AfterViewInit {

  listFilter: string; 
  @ViewChild('filterElement') filterElementRef: ElementRef; //native html element DOM

  constructor() { }

  ngAfterViewInit(): void {
      this.filterElementRef.nativeElement.focus();
  }

  ngOnInit() {
  }

}
