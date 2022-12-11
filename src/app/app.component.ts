import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FormDialogComponent } from './core/components/form-dialog/form-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'angular-demo'

  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '500px',
      autoFocus: false,
      data: 'What is your favorite animal?',
    })
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res)
    })
  }
}
