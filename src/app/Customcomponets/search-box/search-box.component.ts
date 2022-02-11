import { Component, OnInit, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  query: string = '';

  _isSearchAsTypeOn: boolean = false;
  @Output() onQuery = new EventEmitter();
  @Input() placeholderText = 'Search...';
  @Input() value = '';
  // @ViewChild('searchInput') searchEl: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  handleQuerying(event:any, query: string) {
    if (!this._isSearchAsTypeOn && event['key'] === 'Enter') {
      this.query = query;
      this.onQuery.emit(this.query.trim());
    }

    if (event instanceof MouseEvent) {
      this.query = query;
      this.onQuery.emit(this.query.trim());
    }
  }

  trimSearchData(event:any) {
    console.log(event);

    // this.searchEl.nativeElement.value = event.target.value.trim()/;
  }

}
