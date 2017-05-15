import { Component, OnInit } from '@angular/core';
import {Configuration} from "../model/configuration.model";

@Component({
  selector: 'app-instance-manager',
  templateUrl: './instance-manager.component.html',
  styleUrls: ['./instance-manager.component.css']
})
export class InstanceManagerComponent implements OnInit {
  configuration: Configuration;
  status: string;

  constructor() { }

  ngOnInit() {
  }

}
