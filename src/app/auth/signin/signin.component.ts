import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
useremail = 'demo@myunisoft.fr';
userpassword = 'myunisoft';
errormessage = 'Email ou mot de passe invalide';
invalidLogin = false;

 user: User ;
 userForm: FormGroup;
 hide = true; // logo password

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // initialisation du formulaire
    this.userForm = this.formBuilder.group({
      email : ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
      password : ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }
  // Methode pour se connecter
  onLoginSubmit() {
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;
    if (email === this.useremail && password === this.userpassword) {
      this.router.navigate(['user']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }
}

