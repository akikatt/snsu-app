import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 


 
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton, 
  IonCard, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonIcon, 
  IonImg, 
  IonBackButton, 
  IonButton, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
} from '@ionic/angular/standalone'; 
 
import { addIcons } from 'ionicons'; 
import { 
  school, 
  people, 
  book, 
  peopleCircle, 
  person, 
  flask, 
  library, 
  ribbon, 
  business, 
} from 'ionicons/icons'; 
 
// Add icons for IonIcon usage 
addIcons({ 
  school, 
  people, 
  book, 
  peopleCircle, // Keep this one, remove the duplicate 
  person, 
  flask, 
  library, 
  ribbon, 
  business, 
}); 
 
@Component({ 
  selector: 'app-home', 
  templateUrl: './home.page.html', 
  styleUrls: ['./home.page.scss'], 
  standalone: true, 
  imports: [ 
    RouterModule, 
    IonCardContent, 
    IonCardTitle, 
    IonCardHeader, 
    IonButton, 
    IonImg,
    IonBackButton, 
    IonIcon, 
    IonCol, 
    IonRow, 
    IonGrid, 
    IonCard, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonMenuButton, 
  ], 
}) 
export class HomePage implements OnInit { 
 
  constructor() { 
    // Add icons here // No need to add icons again here as it's already done in the global addIcons call 
      addIcons({school,people,book,peopleCircle,person,flask,library,ribbon,business});
} 
ngOnInit() { 
// Add any initialization logic here if needed 
} 
// Define the logout method 
logout() { 
console.log('User logged out'); 
// Add your logout logic here, like clearing session, tokens, etc. 
// Example: this.authService.logout(); 
// Navigate to login page if necessary: 
// this.router.navigate(['/login']); 
} 
}
