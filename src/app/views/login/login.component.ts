import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginUsingGoogle() {
    this.authService.loginWithGoogle();
  }

}
