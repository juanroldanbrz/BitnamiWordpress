import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import "rxjs/Rx"

@Injectable()
export class ServerService {
  constructor(private  http: Http) {}

  getLastConfig(){
    return this.http.get('/api/config').map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  getKeys(){
    return this.http.get('/api/keys').map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  getInstance(){
    return this.http.get('/api/instance').map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  launchInstance(instanceName: string, configurationId: number){
    return this.http.get('/api/instance/new?instanceName='+instanceName+"&configurationId="+configurationId, "");
  }

  stopInstance(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/instance/stop', "", {headers: headers}).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  startInstance(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/instance/start', "", {headers: headers}).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  restartInstance(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/instance/restart', "", {headers: headers}).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  terminateInstance(){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/instance/terminate', "", {headers: headers}).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  getInstanceStatus(){
    return this.http.get('/api/instance/status').map(
      (response: Response) => {
        return response.text();
      }
    );
  }

}
