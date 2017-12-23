import { Component } from '@angular/core'

// Import to make styles in all document, not only for component
import './shared/scss/app.styles.scss'

@Component({
  selector: "app",

  // Requre to make style in the component only
  styles: [require('./app.component.scss')],
  template: require('./app.component.html'),
})
export class AppComponent {
  name: string = 'Pavel'
}