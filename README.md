# ionic3-autocomplete
---
html
``` html
<div class="autocomplete">
      <ion-item>
        <ion-label floating>Country</ion-label>
        <ion-input  type="text" 
                    [(ngModel)]="input"
                    (ionChange)="search()"
                    (ionBlur)="removeFocus()"
                    debounce=500></ion-input>
      </ion-item>
      <ion-list>
        <ion-item *ngFor="let country of countries" (click)="add(country)">
          {{country}}
        </ion-item>
      </ion-list>
</div>
```
---
File .ts
``` ts
import { Component } from '@angular/core';
import { Keyboard } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private list: string[] = [ 'Argentina',
                            'Bolivia',
                            'Brazil',
                            'Chile',
                            'Colombia',
                            'Ecuador',
                            'French Guiana',
                            'Guyana',
                            'Paraguay',
                            'Peru',
                            'Suriname',
                            'Uruguay',
                            'Venezuela'];
  public input: string = '';
  public countries: string[] = [];

  constructor(private keyboard: Keyboard) {
  }

  add(item: string) {
    this.input = item;
    this.countries = [];
  }

  removeFocus() {
    this.keyboard.close();
  }

  search() {
    if (!this.input.trim().length || !this.keyboard.isOpen()) {
      this.countries = [];
      return;
    }
    
    this.countries = this.list.filter(item => item.toUpperCase().includes(this.input.toUpperCase()));
  }
}

```

---
File .scss
``` scss
.autocomplete {
  width: 100%;

  ion-item {
      ion-input {
          padding: 1px !important;
      }
  }

  ion-list {
      position: absolute;
      width: 95%;
      overflow-y: scroll;
      max-height: 150%;
      border: 5px;
      z-index: 999;

      ion-item {
          background: #f1f1f1;
      }

      ion-item:hover {
          cursor: pointer;
          background: #dddddd
      }
  }
}
```
---
## Demo

![Demo](https://raw.githubusercontent.com/brandomcombr/ionic3-autocomplete/master/img-autocomplete.png)

---
##### [markdown-it demo](https://markdown-it.github.io/)
