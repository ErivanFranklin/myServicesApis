import { Component, OnInit, ElementRef, NgModule, NgZone, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { WeatherService } from '../services/weather.service';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-google-autocomplete',
  templateUrl: './google.autocomplete.component.html',
  styleUrls: ['./google.autocomplete.component.scss']
})
export class GoogleAutocompleteComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
       // set google maps defaults
       this.zoom = 4;
       this.latitude = 39.8282;
       this.longitude = -98.5795;

       // create search FormControl
       this.searchControl = new FormControl();

       // set current position
       this.setCurrentPosition();

       // load Places Autocomplete
      //  this.mapsAPILoader.load().then(() => {
      //    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      //      types: ['address']
      //    });
      //    autocomplete.addListener('place_changed', () => {
      //      this.ngZone.run(() => {
      //        // get the place result
      //        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

      //        // verify result
      //        if (place.geometry === undefined || place.geometry === null) {
      //          return;
      //        }

      //        // set latitude, longitude and zoom
      //        this.latitude = place.geometry.location.lat();
      //        this.longitude = place.geometry.location.lng();
      //        this.zoom = 12;

      //        // get the wather by location
      //        this.getWaeatherBylocation(this.latitude, this.latitude);
      //      });
      //    });
      //  });
     }

     private getWaeatherBylocation(lat, long) {
      this.weatherService.getByCordinates(lat, long)
      .subscribe(
        res => console.log(res),
        err => console.log(err.message)
      );
     }

     private setCurrentPosition() {
       if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition((position) => {
           this.latitude = position.coords.latitude;
           this.longitude = position.coords.longitude;
           this.zoom = 12;
         });
       }
     }
  }
