import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homeData: any = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getHomeDetail()
      .subscribe((data: any) => {
        this.homeData = data;
    });
  }

}
