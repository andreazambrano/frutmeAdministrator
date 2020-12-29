import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { CategoryInterface } from '../../models/category-interface'; 

import { Router } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.css']
})
export class TestappComponent implements OnInit {

  constructor(
    public _uw:UserWService,
    private dataApi: DataApiService,
    public router: Router,
    public location: Location
     ) { }
  public tixs:TixInterface;
  public categorys:CategoryInterface;
  loadAPI = null;  



   url="assets/assetsadmin/js/plugin.js";
   url2 = "assets/assetsadmin/js/main.js";
    getAllTixs(){
    this.dataApi
    .getAllTixs()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }

  public viewProduct(tix){
    console.log("ejecutado");
    let tixToView = tix;
    this._uw.tixPreview=tixToView;
    this._uw.tixPreview.quantity=1; 
    this._uw.imagePreviewProduct=this._uw.tixPreview.images[0];

    this.router.navigate(['/detail'])
    
  } 
      public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
        public loadScript2() {
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }


  ngOnInit() {
        this.getAllTixs();
         // this.getAllCategory();
    // this._uw.tixPreview.quantity=1;
        if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
          });
        }
        this._uw.loaded=true;
  }

}
