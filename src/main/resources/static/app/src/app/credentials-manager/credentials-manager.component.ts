import { Component, OnInit } from '@angular/core';
import {ServerService} from "../server.service";
import {Keys} from "../model/keys.model";

@Component({
  selector: 'app-credentials-manager',
  templateUrl: './credentials-manager.component.html',
  styleUrls: ['./credentials-manager.component.css']
})
export class CredentialsManagerComponent implements OnInit {
  keys: Keys;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getKeys()
      .subscribe(
        (data: Keys) => {this.keys = data;},
        (error) => console.log(error)
      )
  }
}
