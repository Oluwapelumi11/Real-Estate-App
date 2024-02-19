import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'hammerjs';


bootstrapApplication(AppComponent,{
  ...appConfig,
  providers: [...appConfig.providers, provideAnimations()]
  
})
  .catch((err) => console.error(err));
