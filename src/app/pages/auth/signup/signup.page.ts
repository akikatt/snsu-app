import { Component } from '@angular/core'; 
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Router, RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 
 
import { 
  IonHeader, 
  IonToolbar, 
  IonContent, 
  IonInput, 
  IonItem, 
  IonButton, 
  IonTitle, 
  IonCard,  
  IonCardContent, 
  IonLabel, 
  IonText, 
  IonIcon 
} from '@ionic/angular/standalone'; 
 
// Importing Ionicons for usage in the app 
import { addIcons } from 'ionicons'; 
import { lockClosedOutline, personOutline, mailOutline } from 'ionicons/icons'; 
addIcons({ 
  lockClosedOutline, 
  personOutline 
}); 
 
@Component({ 
  selector: 'app-signup', 
  templateUrl: './signup.page.html', 
  styleUrls: ['./signup.page.scss'], 
  standalone: true, 
  imports: [ 
    IonText, 
    IonLabel, 
    IonCardContent, 
    IonCard, 
    IonHeader, 
    IonIcon, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonInput, 
    IonItem, 
    IonButton, 
    FormsModule, 
    RouterModule,
    HttpClientModule 
  ] 
}) 
export class SignupPage { 
  full_name = '';
  email = '';
  password = '';
  // Replace with your InfinityFree site URL (no trailing slash)
  apiBase = 'https://citraframework.pythonanywhere.com';
  constructor(private http: HttpClient, private router: Router) {
      addIcons({personOutline, mailOutline, lockClosedOutline});
  }
  signup() {
    if (!this.full_name || !this.email || !this.password) {
      alert('Please enter name, email and password');
      return;
    }
    const payload = { full_name: this.full_name.trim(), email: this.email.trim(), password: this.password };
    this.http.post(`${this.apiBase}/signup`, payload).subscribe(
      (response: any) => {
        if (response?.success || response?.message === 'Registration successful') {
          alert('Registration Successful');
          this.router.navigate(['login']);
        } else {
          alert(response?.error || 'Registration Failed');
        }
      },
      (error) => {
        console.error(error);
        alert(error?.error?.error || 'Registration Failed');
      }
    );
  }
} 