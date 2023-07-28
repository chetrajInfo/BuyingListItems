import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroceryOptionService } from './grocery-option.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Add ReactiveFormsModule to the imports array
  ],
  providers: [GroceryOptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
