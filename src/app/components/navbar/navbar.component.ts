import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = "https://www.pinclipart.com/picdir/middle/520-5202476_movie-icon-vector-png-clipart.png";

  constructor() { }

  ngOnInit(): void {
  }

}
