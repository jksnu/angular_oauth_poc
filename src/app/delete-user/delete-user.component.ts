import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  public users: any = [];
  userForm = new FormGroup({
    username: new FormControl('')
  });

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((data: any) => {
        this.users = data;
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userService.deleteUser(this.userForm.value.username)
    .subscribe(
      res => {
        this.userService.getUsers()
          .subscribe((data: any) => {
            this.users = data;
        });
      },
      err => {
        console.log('HTTP Error', err)
      },
      () => console.log('HTTP request completed.')
    );
  }

}
