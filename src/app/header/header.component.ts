import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

/*import {AuthService} from '../../services/auth.service'*/

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    NavbarComponent
    ],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
