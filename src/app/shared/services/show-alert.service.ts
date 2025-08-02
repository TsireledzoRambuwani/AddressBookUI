import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShowAlertService {

 constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition:"center",
      verticalPosition:"top",
      duration: 5000,
      panelClass:['alert-success']
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition:"center",
      verticalPosition:"top",
      panelClass:['alert-error']
    });
  }

}
