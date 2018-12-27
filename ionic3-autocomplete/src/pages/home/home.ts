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
