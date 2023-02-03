import { Component } from '@angular/core';
import { TestTypeEnum } from '../test/test-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  testType = TestTypeEnum.a;
}
