import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mac-button',
  templateUrl: 'mac-button.component.html'
})
export class MacButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('Mac Button is clicked');
  }
}
