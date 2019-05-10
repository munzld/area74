import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.authService.getCurrentUser().then(
        res => {
          return resolve(true);
        },
        err => {
          this.router.navigate(['/login']);
          return reject(err);
        }
      );
    });
  }
}
