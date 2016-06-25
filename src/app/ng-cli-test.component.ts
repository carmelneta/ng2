import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';


@Component({
  moduleId: module.id,
  selector: 'ng-cli-test-app',
  templateUrl: 'ng-cli-test.component.html',
  styleUrls: ['ng-cli-test.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES
  ]
})
export class NgCliTestAppComponent {
  title = 'ng-cli-test works!';
}
