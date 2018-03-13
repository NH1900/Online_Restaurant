import { Component, OnInit } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};
  //create the a object of dialog (reference) to login component
  constructor(public dialogRef: MdDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  //we can check console content in browser Javascript consoler
  onSubmit() {
    //put value to console
    console.log("User: ", this.user);
    //invoke close method to close the dialog
    this.dialogRef.close();
  }
}
