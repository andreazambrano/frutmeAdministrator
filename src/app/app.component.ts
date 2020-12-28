import { Component, OnInit } from '@angular/core';
import { TixsService } from "./services/tixs.service";
import { IpbucketService } from "./services/ipbucket.service";
import { DataApiService } from "./services/data-api.service";
import { ProductInfoService } from "./services/product-info.service";
import { UserWService } from "./services/user-w.service";
import { SwUpdate } from '@angular/service-worker';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
// declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor (
 	public _ps:TixsService, 
 	public _pi:ProductInfoService, 
 	public ipbucket:IpbucketService,
 	public _uw:UserWService, 
  public router: Router,
    public location: Location,
  private swUpdate:SwUpdate,
 	public dataApi:DataApiService){

 }
 loadAPI = null;  
 url="assets/assetsadmin/js/plugin.js";
 url2 = "assets/assetsadmin/js/main.js";
    ngOnInit() {

      if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if(confirm("adminshop tiene nuevas mejoras. desea cargar esta nueva versión?")) {
                    window.location.reload();
                }
            });
        }    


  	 if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
              this.loadScript2();
          });
        }
        this._uw.loaded=true;
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
}
