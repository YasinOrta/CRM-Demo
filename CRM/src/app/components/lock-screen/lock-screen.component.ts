import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrl: './lock-screen.component.scss'
})
export class LockScreenComponent {
  password: string = '';

  @Output() unlocked = new EventEmitter<boolean>();

  unlock() {
    // Replace with your actual password validation logic
    if (this.password === 'aaaAAA1<>') {
      this.unlocked.emit(true); // Notify parent component that unlock was successful
    } else {
      alert('Incorrect password');
    }
  }
}
