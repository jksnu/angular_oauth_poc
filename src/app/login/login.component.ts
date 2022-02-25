import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  public loginMessage: any;
  loginWindow: Window;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    const params = this.route.snapshot.queryParamMap;
    const accessToken = params.get('access_token');
    if(accessToken) {
      localStorage.setItem("accessToken", accessToken);
      this.loginMessage = "User has logged in successfully";
      this.loginWindow.close();
    }
    if(localStorage.getItem("accessToken")) {
      this.loginMessage = "User has logged in successfully";
    }
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userService.login(this.userForm.value.username, this.userForm.value.password)
    .subscribe(
      res => {
        this.loginMessage = res;
      },
      err => {
        console.log('HTTP Error', err)
      },
      () => console.log('HTTP request completed.')
    );
  }

  //Google sign in starts here
  googleSignIn() {
    const googleSignInUrl = this.getGoogleAuthURL();
    this.loginWindow = window.open(googleSignInUrl, "Login Page", "resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, location=no, width=1000, height=600, left=10 top=100");
    //if (myWindow) {myWindow.focus()};
    this.loginWindow.addEventListener('unload', (event) => {
      this.loginWindow = null;      
      if(localStorage.getItem("accessToken")) {
        this.loginMessage = "User has logged in successfully";
      }
    });
  }

  getGoogleAuthURL() {
    //Creating google consent url
    const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
      redirect_uri: environment.GOOGLE_OAUTH_REDIRECT_URL,
      client_id: environment.GOOGLE_CLIENT_ID,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ].join(' ')
    }
    const querySting = new URLSearchParams(options);
    return `${rootURL}?${querySting.toString()}`;
  }
  //Google sign in Ends here

}
