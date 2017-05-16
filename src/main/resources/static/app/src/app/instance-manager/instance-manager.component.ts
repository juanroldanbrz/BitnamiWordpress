import { Component, OnInit } from '@angular/core';
import {Instance} from "app/model/instance.model";
import {ServerService} from "../server.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-instance-manager',
  templateUrl: './instance-manager.component.html',
  styleUrls: ['./instance-manager.component.css']
})
export class InstanceManagerComponent implements OnInit {
  instance: Instance;

  launchButtonEnabled: boolean = false;
  startButtonEnabled: boolean = false;
  stopButtonEnabled: boolean = false;
  resetButtonEnabled: boolean = false;
  terminateButtonEnabled: boolean = false;

  constructor(private serverService: ServerService, private router: Router) { }

  ngOnInit() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.serverService.getInstance()
      .subscribe(
        (data: Instance) => this.initData(data),
        (error: any) => this.enableLaunchButton()
      )
  }

  initData(data: Instance){
    this.instance = data;
    this.parseInstanceStatus(data.status);
  }

  enableLaunchButton() {
    this.instance = null;
    this.launchButtonEnabled = true;
  }

  disableAllButtons() {
    this.startButtonEnabled = false;
    this.stopButtonEnabled = false;
    this.resetButtonEnabled = false;
    this.terminateButtonEnabled = false;
  }

  parseInstanceStatus(status: string){
    this.disableAllButtons();
    this.instance.status = status;

    if(status === 'running'){
      this.startButtonEnabled = false;
      this.stopButtonEnabled = true;
      this.resetButtonEnabled = true;
      this.terminateButtonEnabled = true;

    } else if(status === 'stopped'){
      this.startButtonEnabled = true;
      this.stopButtonEnabled = false;
      this.resetButtonEnabled = true;
      this.terminateButtonEnabled = true;
    }
  }

  reloadInstanceStatus(){
    if(this.instance) {
      this.serverService.getInstanceStatus()
        .subscribe(
          (data: string) => this.parseInstanceStatus(data),
          (error) => this.loadInitialData()
        )
    }
  }

  stopInstance(){
    if(this.stopButtonEnabled) {
      this.disableAllButtons();
      this.serverService.stopInstance()
        .subscribe(
          (data: any) => this.parseInstanceStatus("stopping"),
          (error) => this.loadInitialData()
        )
    }
  }

  startInstance(){
    if(this.startButtonEnabled) {
      this.disableAllButtons();
      this.serverService.startInstance()
        .subscribe(
          (data: any) => this.parseInstanceStatus("pending"),
          (error) => this.loadInitialData()
        )
    }
  }

  restartInstance(){
    if(this.resetButtonEnabled) {
      this.disableAllButtons();
      this.serverService.restartInstance()
        .subscribe(
          (data: any) => this.parseInstanceStatus("restarting"),
          (error) => this.loadInitialData()
        )
    }
  }

  terminateInstance() {
    if (this.terminateButtonEnabled) {
      this.disableAllButtons();
      this.serverService.terminateInstance()
        .subscribe(
          (data: any) => this.loadInitialData(),
          (error) => this.loadInitialData()
        )
    }
  }
}
