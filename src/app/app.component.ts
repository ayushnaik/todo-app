import { Component } from '@angular/core';
import { ConfigService } from './core/service/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';

  constructor(
    private configService: ConfigService,
    private router: Router
  ) {
    this.fetchConfig();
  }

  fetchConfig() {
    const obs = this.configService.fetchConfig();
    obs.subscribe(
      () => this.router.initialNavigation(),
      err => console.log(err)
    );
  }
}
