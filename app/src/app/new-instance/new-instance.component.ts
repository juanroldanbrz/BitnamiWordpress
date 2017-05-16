import { Component, OnInit } from '@angular/core';
import {Configuration} from "../model/configuration.model";
import {ServerService} from "../server.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-instance',
  templateUrl: './new-instance.component.html',
  styleUrls: ['./new-instance.component.css']
})
export class NewInstanceComponent implements OnInit {

  configuration: Configuration;
  instanceName: string = 'wordpress';
  btnDisabled = false;

  constructor(private serverService: ServerService, private router: Router) {}

  ngOnInit() {
    this.serverService.getLastConfig()
      .subscribe(
        (data: Configuration) => this.configuration = data,
        (error) => console.log(error)
      )
  }

  launchInstance(){
    if(!this.btnDisabled){
      this.btnDisabled = true;
      this.serverService.launchInstance(this.instanceName, this.configuration.id)
        .subscribe(
          (response: Response) => {
            this.router.navigate(['/instance']);
          }
        )
    }
  }
}
