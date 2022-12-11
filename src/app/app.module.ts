import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FormDialogComponent } from './core/components/form-dialog/form-dialog.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component'

@NgModule({
  declarations: [
    AppComponent,
    FormDialogComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
