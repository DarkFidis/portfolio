import { Component, OnInit, OnDestroy } from '@angular/core';
import { JwtToken } from '../../models/jwtToken.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public sub: Subscription
  public jwtToken: JwtToken;

  ngOnInit() {
    this.sub = this.authService.jwtToken.subscribe((jwtToken) => {
      this.jwtToken = jwtToken;
    });
  }

  public logout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    if(this.sub) { this.sub.unsubscribe(); }
  }

}
