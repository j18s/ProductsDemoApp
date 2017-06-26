import { Injectable } from '@angular/core';
import {  
    Http,  
    Headers,  
    Response,  
    RequestOptions  
} from '@angular/http';  
import 'rxjs/Rx';  
@Injectable()
export class ProductsService {

  public url: string = "https://rkdemotask.herokuapp.com/Tasks/";  
    constructor(private _http: Http) {}  
    getAllTasks() {  
        return this._http.get(this.url).map((response: Response) => response.json());  
    }  

}
