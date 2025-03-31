import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Falls du Routing nutzt

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Falls Routing vorhanden ist
}).catch(err => console.error(err));
