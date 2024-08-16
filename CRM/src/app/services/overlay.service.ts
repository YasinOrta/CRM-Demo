import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LockScreenComponent } from '../components/lock-screen/lock-screen.component';
import { MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  private overlaySubject = new BehaviorSubject<boolean>(false);
  overlayState$: Observable<boolean> = this.overlaySubject.asObservable();
  dialogRef: MatDialogRef<LockScreenComponent> | null = null;

  constructor() { }

  openOverlay() {
    this.overlaySubject.next(true);
  }

  closeOverlay() {
    this.overlaySubject.next(false);
  }

  setDialogRef(dialogRef: MatDialogRef<LockScreenComponent>) {
    this.dialogRef = dialogRef;
  }
  
}
