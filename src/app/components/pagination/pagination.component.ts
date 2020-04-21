import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event/lib/resized-event';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  @Input() maxPages: number;
  @Input() reorder: boolean = true;
  @Output() onPageChange = new EventEmitter();
  @Input() PossiblePages = 5;
  pages: number[] = []
  selectedItem: number = 1;
  private pagesAux;
  ngOnInit(): void {
    this.checkRequiredInputs();

    this.buildPagesArray()
  }
  buildPagesArray() {
    this.pages = [];
    for (let index = 0; index < this.maxPages; index++) {
      this.pages[index] = index + 1;
    }
  }
  pageClick(value: number, isNumericPage = true, forward = true) {
    if (forward) {
      this.selectedItem = isNumericPage ? value : (value != undefined ? value : this.selectedItem) + 1;
      value= this.selectedItem;
    } else  {
      this.selectedItem = isNumericPage ? value : (value != undefined ? value : this.selectedItem) - 1;
      console.log('selected item' , this.selectedItem)
      value= this.selectedItem>1?this.selectedItem:1;
      console.log('selected item' , value, this.pages[0] )

    }
    if (value != undefined && value == this.pages[0] && value > 1) {
      this.reorderPagesFirstElement()
    }
 
    if (value != undefined && value == this.pages[this.pages.length - 1]) {
      this.reorderPages()
    }

    this.onPageChange.emit(this.selectedItem);
  }
  checkRequiredInputs() {
    this.pagesAux = this.maxPages;
    if (this.maxPages == null) {
      throw new Error("Attribute 'maxPages' is required");

    }
    if (this.maxPages > this.PossiblePages) {
      this.maxPages = this.PossiblePages;
      this.pagesAux = this.PossiblePages;

    }
  }
  reorderPages() {
    if (this.pages.length % 2 == 0) {
      var middle = (this.pages.length / 2)-1;
      this.pages[middle] = this.pages[this.pages.length - 1];

      for (let i = this.pages.length / 2 - 1; i > 0; i--) {
        this.pages[i-1] = this.pages[i ] - 1;
      }
      for (let i = middle + 1; i < this.pages.length; i++) {
        this.pages[i] = this.pages[i - 1] + 1;
        this.pages[0] = this.pages[1] - 1;
      }
    }
    else {
      var middle = Math.round((this.pages.length - 0.1) / 2);
      this.pages[middle] = this.pages[this.pages.length - 1];
      for (let i = Math.round(this.pages.length / 2 - 0.1) - 1; i > 0; i--) {
        this.pages[i] = this.pages[i + 1] - 1;
      }
      for (let i = middle + 1; i < this.pages.length; i++) {
        this.pages[i] = this.pages[i - 1] + 1;
        this.pages[0] = this.pages[1] - 1;
      }
    }
  }
  reorderPagesFirstElement() {
    if (this.pages.length % 2 == 0) {

      var middle = (this.pages.length / 2)-1;


      this.pages[middle] = this.pages[0];

      for (let i = (this.pages.length / 2)-2; i >= 0; i--) {

        this.pages[i] = this.pages[i + 1] - 1;

      }
      for (let i = middle + 1; i < this.pages.length; i++) {
        this.pages[i] = this.pages[i - 1] + 1;
        this.pages[0] = this.pages[1] - 1;
      }
    }
    else {
      var middle = Math.round((this.pages.length - 0.1) / 2);
      this.pages[middle] = this.pages[0];
      for (let i = Math.round(this.pages.length / 2 - 0.1) - 1; i > 0; i--) {
        this.pages[i] = this.pages[i + 1] - 1;
      }
      for (let i = middle + 1; i < this.pages.length; i++) {
        this.pages[i] = this.pages[i - 1] + 1;
        this.pages[0] = this.pages[1] - 1;
      }
    }
  }
  sizeChangedEvent(event: ResizedEvent) {
   
    }
  }
