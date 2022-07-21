import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rio-hello',
  templateUrl: './rio-hello.component.html',
  styleUrls: ['./rio-hello.component.css']
})
export class RioHelloComponent implements OnInit {

  constructor() { }

  @Input() name: string = "";

  ngOnInit(): void {
  }

}
