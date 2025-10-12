import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton, IonBackButton, IonCol, IonImg, IonCard, IonGrid, IonRow, IonIcon, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonIcon, IonRow, IonGrid, IonCard, IonImg, IonCol, IonBackButton, 
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
  constructor() {}
  // Declare a private WebSocket property for real-time communication
  private socket!: WebSocket;
  // Lifecycle hook that runs when the component/page is initialized
  ngOnInit() {
    // ✅ Establish connection to the WebSocket server
    this.socket = new WebSocket('ws://localhost:8080');
    // ✅ Triggered when WebSocket successfully connects
    this.socket.onopen = () => {
      console.log('🟢 WebSocket connected');
      // Send a greeting message to the server (for testing)
      this.socket.send('Hello from client!');
    };
    // ✅ Triggered when a message is received from the server
    this.socket.onmessage = (event) => {
      console.log('📨 Message from server:', event.data);
    };
    // ✅ Triggered when there's an error in the WebSocket connection
    this.socket.onerror = (error) => {
      console.error('❌ WebSocket error:', error);
    };
    // ✅ Triggered when the WebSocket connection is closed
    this.socket.onclose = () => {
      console.log('🔌 WebSocket disconnected');
    };
  }

  logout() {
    console.log('User logged out');
    // Add your logout logic here, like clearing session, tokens, etc.
    // Example: this.authService.logout();
    // Navigate to login page if necessary:
    // this.router.navigate(['/login']);
  }
}