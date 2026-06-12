import { bootstrapApplication } from '@angular/platform-browser';
import { provideTakt } from '@vskstudio/takt-angular';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideTakt({
      domain: 'example.com',
      endpoint: '/api/event',
      outbound: true,
      excludeLocalhost: false,
    }),
  ],
}).catch((err) => console.error(err));
