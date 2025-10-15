import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonIcon,
  IonCheckbox,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
// Importing Ionicons for usage in the app
import { addIcons } from 'ionicons';
import { lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';
addIcons({
  lockClosedOutline,
  personOutline,
});
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonIcon,
    IonCheckbox,
    IonButton,
    IonText,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
})
export class LoginPage {
   email = '';
  password = '';
  rememberMe = false;
  // Replace with your InfinityFree site URL (no trailing slash), e.g. https://yoursite.infinityfreeapp.com
  apiBase = 'https://citraframework.pythonanywhere.com';
  constructor(private http: HttpClient, private router: Router) {
      addIcons({mailOutline,lockClosedOutline});}
  ngOnInit() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      this.email = savedEmail;
      this.rememberMe = true;
    }
  }
  login() {
    const payload = { email: this.email?.trim(), password: this.password };
    this.http.post(`${this.apiBase}/login`, payload)
      .subscribe(
        (response: any) => {
          // Accept either a { message: 'Login successful', user } or { success: true, user }
          if (response?.message === 'Login successful' || response?.success) {
            const user = response.user ?? response.data ?? null;
            if (user) localStorage.setItem('user', JSON.stringify(user));
            alert('Login Successful');
            this.router.navigate(['/home']);
            if (this.rememberMe) {
              localStorage.setItem('rememberedEmail', this.email);
            } else {
              localStorage.removeItem('rememberedEmail');
            }
          } else {
            alert(response?.error || 'Invalid Email or Password');
          }
        },
        (error) => {
          alert(
            'Login Failed. Please check your connection or try again later.'
          );
          console.error(error);
        }
      );
  }
  forgotPassword() {
    alert('Forgot password feature coming soon.');
  }
}
