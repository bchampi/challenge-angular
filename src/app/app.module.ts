import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FormDialogComponent } from './core/components/form-dialog/form-dialog.component'
import { ToolbarComponent } from './core/components/toolbar/toolbar.component'

@NgModule({
  declarations: [
    AppComponent,
    FormDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    ToolbarComponent,
  ],
})
export class AppModule { }
