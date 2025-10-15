import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCol,
  IonImg,
  IonCard,
  IonGrid,
  IonRow,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
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
    IonButton,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonIcon,
    IonRow,
    IonGrid,
    IonCard,
    IonImg,
    IonCol,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
    RouterLink,
    RouterModule
  ],
})
export class HomePage implements OnInit {
  //constructor() {}
  // Declare a private WebSocket property for real-time communication
  //private socket!: WebSocket;
  // Lifecycle hook that runs when the component/page is initialized
  //ngOnInit() {
    // ✅ Establish connection to the WebSocket server
    //this.socket = new WebSocket('ws://localhost:8080');
    // ✅ Triggered when WebSocket successfully connects
    //this.socket.onopen = () => {
      //console.log('🟢 WebSocket connected');
      // Send a greeting message to the server (for testing)
     //this.socket.send('Hello from client!');
    //};
    // ✅ Triggered when a message is received from the server
    //this.socket.onmessage = (event) => {
      //console.log('📨 Message from server:', event.data);
    //};
    // ✅ Triggered when there's an error in the WebSocket connection
    //this.socket.onerror = (error) => {
      //console.error('❌ WebSocket error:', error);
    //};
    // ✅ Triggered when the WebSocket connection is closed
    //this.socket.onclose = () => {
      //console.log('🔌 WebSocket disconnected');
    //};
  //}

  //logout() {
    //console.log('User logged out');
    // Add your logout logic here, like clearing session, tokens, etc.
    // Example: this.authService.logout();
    // Navigate to login page if necessary:
    // this.router.navigate(['/login']);
  //}



  // private socket
  //private socket!: WebSocket;

  constructor(private router: Router) {
    // Add icons here
    // No need to add icons again here as it's already done in the global addIcons call
      addIcons({school,people,book,peopleCircle,person,flask,library,ribbon,business});
  }
  ngOnInit() {
   
  }

  get isLogged(): boolean {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user')
    this.router.navigate(['/login']);
  }

  // Define the logout method
  loginPage() {
    this.router.navigate(['/login']);
  }
}
