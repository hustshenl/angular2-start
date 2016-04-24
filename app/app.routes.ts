import {RouteDefinition} from 'angular2/router';
import {HomeComponent} from './pages/home/home.component';
import {TodolistComponent} from './pages/todolist/todolist.component';
import {SimplebindComponent} from './pages/simplebind/simplebind.component';

export var APP_ROUTES: RouteDefinition[] = [
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/simplebind', name: 'Simplebind', component: SimplebindComponent },
    { path: '/todolist', name: 'Todolist', component: TodolistComponent }
];
