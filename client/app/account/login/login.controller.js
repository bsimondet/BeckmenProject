'use strict';

class LoginController {
  constructor(Auth, $location) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.isLoggedIn = Auth.isLoggedIn;
    this.$location = $location;

  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to home
          this.$location.path('/home');
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('beckmenProjectApp')
  .controller('LoginController', LoginController);
