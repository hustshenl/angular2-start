import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouterLink, RouteDefinition} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/pages/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [RouterLink, CORE_DIRECTIVES]
})
export class NavbarComponent {
    @Input() brand: string;
    @Input() routes: RouteDefinition[];
}
