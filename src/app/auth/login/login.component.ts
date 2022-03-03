 import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
 import { NbAuthResult, NbAuthService, NbAuthSocialLink, NbLoginComponent } from '@nebular/auth';

 @Component({
   selector: 'ngx-login',
   templateUrl: './login.component.html',
 })
 export class LoginComponent extends NbLoginComponent {


  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.service.authenticate(this.strategy, {username: this.user.email, password: this.user.password})
    .subscribe((result: NbAuthResult) => {
      this.submitted = false;

      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }

 }
