import { Injectable } from '@angular/core';
import { LoaderState } from './models';
import { Subject, timer, Subscription } from 'rxjs';

@Injectable()
export class NgxNeoLoaderService {
    public DELAY_TIME = 500;

    private loaderSubject = new Subject<LoaderState>();

    loaderState = this.loaderSubject.asObservable();

    constructor() { }

    public show(): Subscription {
        const timerObs = timer(this.DELAY_TIME);
        // subscribing to a observable returns a subscription object
        const sub = timerObs.subscribe(t => this.loaderSubject.next(<LoaderState>{showLoading: true}));
        return sub;
        // this.loaderSubject.next(<LoaderState>{showLoading: true});
    }

    public hide(sub: Subscription) {
        sub.unsubscribe();
        this.loaderSubject.next(<LoaderState>{showLoading: false});
    }
}
