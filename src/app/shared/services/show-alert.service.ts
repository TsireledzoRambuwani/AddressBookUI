import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShowAlertService {

 constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition:"right",
      verticalPosition:"top",
      duration: 3000,
      panelClass:['alert-success']
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      horizontalPosition:"right",
      verticalPosition:"top",
      duration: 3000,
      panelClass:['alert-error']
    });
  }

}
