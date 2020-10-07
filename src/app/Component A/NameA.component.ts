import { BridgeServiceService } from './../bridge-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NameA',
  template: `<button (click)="bridgeService.increment()">
  Increment
  </button>`,
  styleUrls: ['./NameA.component.css']
})
export class NameAComponent implements OnInit {

  constructor(public bridgeService: BridgeServiceService) { }

  ngOnInit(): void {
  }

}
