import { Component } from '@angular/core';
import { NgxNeoLoaderService } from 'ngx-neo-loader';
import { timer } from 'rxjs';

@Component({
  selector: 'neo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public delayTime;
  public delayClose = 5000;
  private loaderSubscription;
  constructor(private loaderService: NgxNeoLoaderService) { }

  public showLoader(): void {
    if (this.delayTime) {
      this.loaderService.DELAY_TIME = this.delayTime;
    }
    this.loaderSubscription = this.loaderService.show();
    const timerObs = timer(this.delayClose);
    timerObs.subscribe(t => this.loaderService.hide(this.loaderSubscription));
  }
}
