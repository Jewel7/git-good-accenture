/**
 * This is the router for the app. For good Angular practice, we load/configure the router
 * in a separate, top-level module (such as this one) dedicated to routing.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

/**
 * Routes tell the router which view to display when a user clicks on a link or pastes a URL 
 * into the browser. 
 * We must define routes or any other decorator before the @NgModule decorator
 * We must import the necessary components so we can reference it in a Route
 * @property {string} path - a string that matches the URL in the browser address bar
 * @property {string} component - the component that the router should create when navigating to this route
 * 
 */
const routes: Routes = [
  //This route redirects a URL that fully matches the empty path to the specified route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    //The method is called forRoot() because we configure the rouer at the app's root level
    //The forRoot() method supplies the service providers and directives needed for routing, 
    //and performs the intitial navigation based on the current browser URL
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
