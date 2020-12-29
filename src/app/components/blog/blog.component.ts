import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
public router: Router,
      public _uw:UserWService,
  private dataApi: DataApiService,
  public location: Location
  	) { }
   loadAPI = null;  



   url="assets/assetsadmin/js/plugin.js";
   url2 = "assets/assetsadmin/js/main.js";

ngOnInit() {
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
