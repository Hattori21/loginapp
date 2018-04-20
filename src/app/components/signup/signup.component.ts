import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

	public email: string;
	public password: string;

  constructor(
  	public authService: AuthService,
  	public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // Singup method
  onSubmitAddUser(){
  	this.authService.registerUser(this.email, this.password)
  	.then((res) => {
      this.flashMessage.show('User created!', 
      {cssClass: 'alert-success', timout: 4000});
  		this.router.navigate(['/members']);
  		//console.log(res);
  	}).catch((err) => {
  		//console.log(err);
      this.flashMessage.show(err.message, 
      {cssClass: 'alert-danger', timout: 4000});
  	});
  }

}
