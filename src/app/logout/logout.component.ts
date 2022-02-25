import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl('', Validators.required)
  });
  public logoutMessage: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userService.logout(this.userForm.value.username)
    .subscribe(
      res => {
        this.logoutMessage = res;
        console.log(this.logoutMessage);
        localStorage.removeItem('accessToken');
        this.router.navigate(['login']);
      },
      err => {
        console.log('HTTP Error', err)
      },
      () => console.log('HTTP request completed.')
    );
  }

}
