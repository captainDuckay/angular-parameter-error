import { Component, Input } from '@angular/core';
import { TestTypeEnum } from './test-type.enum';


@Component({
    selector: 'test',
    template: "<div>This is a string: {{importetString}}, and this is a number {{importetNumber}}</div>"
})
export class TestComponent {
    @Input() public importetString: String = '';
    @Input() public importetNumber: Number = 0;
    @Input() public testTypeEnum: TestTypeEnum = TestTypeEnum.a;
}