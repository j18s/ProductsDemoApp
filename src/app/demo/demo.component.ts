import { Component, OnInit } from '@angular/core';
import {  
    ProductsService  
} from '../../app/products.service'; 

import {  
    Products  
} from '../../app/products'; 

import {  
    Router  
} from '@angular/router';  
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 allTasks: Products[] = [];  
    constructor(private _datatask: ProductsService) {}  
    ngOnInit() {  
        this._datatask.getAllTasks().subscribe(  
            (data: Products[]) => {  
                console.log(data);
                this.allTasks = data;  
            });  
    }  

}
