import { BridgeServiceService } from './../bridge-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NameB',
  template: `{{bridgeService.counter}}`
})
export class NameBComponent implements OnInit {

  constructor(public bridgeService: BridgeServiceService) { }

  ngOnInit(): void {
  }

}
