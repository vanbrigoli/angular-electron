import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.authService.signUpWithCustomAccount(this.model);
  }

}
