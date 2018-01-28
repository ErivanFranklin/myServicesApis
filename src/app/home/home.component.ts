import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service';
import { error } from 'selenium-webdriver';
import { GoogleAutocompleteComponent } from '../google.autocomplete/google.autocomplete.component';
import { GoogleService } from '../services/google.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardMessages = [];
  searchActivated = 'hashtag';
  txtSearch = '';
  tiles = [
    {text: 'One', cols: 2, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'}
  ];

  constructor(private instaService: InstagramService, private googleService: GoogleService ) { }

  ngOnInit() {
    this.cardMessages = [
      {
        'text': 'Welcome, search anithing on Instagram',
        'style': 'message'
      }
    ];

  }

  search(txtSearch) {
    const tag = {'text': txtSearch, 'style': 'tag'};
    const message = {"text":"Found something '"+txtSearch+"' related " + this.searchActivated, "style":"message"};

    this.cardMessages.push(tag);
    this.cardMessages.push(message);
    this.txtSearch = '';

    if (this.searchActivated === 'user') {
      this.doSeacrch('/users/search?q=' + txtSearch + '&');
    }else if (this.searchActivated === 'hashtag') {
      this.doSeacrch('/tags/' + txtSearch + '/media/recent?');
    }else {
      this.doSeacrch('/locations/4730225/media/recent?');
    }

  }

  doSeacrch(api) {
    this.instaService.search(api)
    .subscribe(
      res => console.log(res),
      err => console.log(err.message)
    );
  }

  // searchAdress() {
  //   this.googleService.searchAdress('jksd')
  //   .subscribe(
  //     res => console.log(res),
  //     err => console.log(err.message)
  //   );
  // }

}
