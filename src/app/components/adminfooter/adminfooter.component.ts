import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminfooter',
  templateUrl: './adminfooter.component.html',
  styleUrls: ['./adminfooter.component.css']
})
export class AdminfooterComponent implements OnInit {

  constructor(
public router: Router,
  public location: Location
  	) { }

  ngOnInit() {
  }

}
