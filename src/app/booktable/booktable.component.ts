import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {

  constructor() { }
  public values = ["1", "2", "3", "4", "4+"];

  ngOnInit() {
  }

}
