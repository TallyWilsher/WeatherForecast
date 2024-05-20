import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import this
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component'; // Adjust path as necessary
import { AuthService } from './auth.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,  // And add it here
        HttpClientModule
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        AuthService,
    ],
})
export class AppModule { }
