import { Component, Input, OnInit } from '@angular/core';
import { colors } from '../models/loading';

@Component({
  selector: 'nn-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() text?: string = 'LOADING...';
  @Input() colors?: colors;

  defaultColors: colors = {
    color1: 'blue',
    color2: 'lightblue',
    color3: 'aqua',
  };

  ngOnInit(): void {
    if(!this.colors) {
      this.colors = this.defaultColors;
    }
    this.setColor('--nn-first-color', this.colors?.color1);
    this.setColor('--nn-second-color', this.colors?.color2);
    this.setColor('--nn-third-color', this.colors?.color3);
  }

  setColor(varName: string, newColor: string) {
    document.documentElement.style.setProperty(varName, newColor);
  };

}
