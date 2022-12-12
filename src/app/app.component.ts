import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { NavigationEnd, Router } from '@angular/router'
import { FormDialogComponent } from './core/components/form-dialog/form-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'angular-demo'

  isLoginOrHome = true

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginOrHome = event.url === '/login' || event.url === '/home'
      }
    })
  }

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
