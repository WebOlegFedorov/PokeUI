import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  public form: FormGroup;
  @Output() emitClear: EventEmitter<void> = new EventEmitter<void>();
  @Output() emitSearch: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('', [
        Validators.pattern('^[0-9]*$'),
        Validators.maxLength(8),
      ])
    });
  }
  
  public search () {
    if (this.form.valid && this.form.value.search) {
      this.emitSearch.emit(this.form.value.search);
    }
  }
  
  public clear () {
    this.emitClear.emit();
  }

}
