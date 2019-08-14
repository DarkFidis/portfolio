import { Component, OnInit } from '@angular/core';
import { JwtToken } from '../../models/jwtToken.model';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public jwtToken: JwtToken;

  ngOnInit() {
    this.authService.jwtToken.subscribe((jwtToken) => {
      this.jwtToken = jwtToken;
    })
  }

  public logout(): void {
    this.authService.logout();
  }

}
