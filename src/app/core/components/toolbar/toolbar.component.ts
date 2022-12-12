import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthService } from '../../services/Auth.service'

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})

export class ToolbarComponent {
  constructor(
    private authS: AuthService,
  ) { }

  logOut() {
    this.authS.logout()
  }
}
