import { Component } from '@angular/core';
import metadata from '../assets/json/metadata.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'novoapp';

  vialData = metadata.data
}
