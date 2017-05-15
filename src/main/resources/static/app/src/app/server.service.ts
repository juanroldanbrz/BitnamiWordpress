import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
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

  launchInstance(instanceName: string, configurationId: number){
    return this.http.get('/api/instance/new?instanceName='+instanceName+"&configurationId="+configurationId, "");
  }
}
