import { Component, OnInit } from '@angular/core';
import {Instance} from "app/model/instance.model";
import {ServerService} from "../server.service";
import {Router} from "@angular/router";
import {InstanceStatus} from "../model/instance-status.model";

@Component({
  selector: 'app-instance-manager',
  templateUrl: './instance-manager.component.html',
  styleUrls: ['./instance-manager.component.css']
})
export class InstanceManagerComponent implements OnInit {
  instance: Instance;

  timeout: number = 700;

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
    this.renderState(data.state);
  }

  renderState(state: string){
    this.instance.state = state;

    if(state === 'running'){
      this.startButtonEnabled = false;
      this.stopButtonEnabled = true;
      this.resetButtonEnabled = true;
      this.terminateButtonEnabled = true;

    } else if(state === 'stopped'){
      this.startButtonEnabled = true;
      this.stopButtonEnabled = false;
      this.resetButtonEnabled = false;
      this.terminateButtonEnabled = true;
    }
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

  parseInstanceStatus(instanceStatus: InstanceStatus){
    this.disableAllButtons();
    this.instance.state = instanceStatus.state;
    this.instance.status = instanceStatus.status;
    this.renderState(instanceStatus.state);
  }

  reloadInstanceStatus(){
    if(this.instance) {
      this.serverService.getInstanceStatus()
        .subscribe(
          (data: InstanceStatus) => this.parseInstanceStatus(data),
          (error) => this.loadInitialData()
        )
    }
  }

  stopInstance(){
    if(this.stopButtonEnabled) {
      this.disableAllButtons();
      this.serverService.stopInstance()
        .subscribe(
          (data: any) =>
            setTimeout(() => { this.reloadInstanceStatus();}, this.timeout),
          (error) => this.loadInitialData()
        )
    }
  }

  startInstance(){
    if(this.startButtonEnabled) {
      this.disableAllButtons();
      this.serverService.startInstance()
        .subscribe(
          (data: any) =>
            setTimeout(() => { this.reloadInstanceStatus();}, this.timeout),
              (error) => this.loadInitialData()
        );
    }
  }

  restartInstance(){
    if(this.resetButtonEnabled) {
      this.disableAllButtons();
      this.serverService.restartInstance()
        .subscribe(
          (data: any) => setTimeout(() => { this.reloadInstanceStatus();}, this.timeout),
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
