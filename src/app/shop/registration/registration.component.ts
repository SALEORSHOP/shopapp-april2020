import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserForm: any = {};
  userType = '';
  firstName = '';
  lastName = '';
  userGender = '';
  userEmail = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  registerUserFromHomePage = (user) => {
    console.log(user);
  };
}
