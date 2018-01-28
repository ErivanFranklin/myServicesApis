import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import {
  MatAutocompleteModule,
} from '@angular/material';
import { GoogleAutocompleteComponent } from './google.autocomplete/google.autocomplete.component';
import { GoogleService } from './services/google.service';
import { InstagramService } from './instagram.service';
import { WeatherService } from './services/weather.service';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoogleAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY,
      libraries: ['places']
    }),
    ReactiveFormsModule
  ],
  providers: [InstagramService, GoogleService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
