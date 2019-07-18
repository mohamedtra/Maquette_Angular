import { OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Flight } from 'src/app/models/flight';

/**
 * Base class for all components with subscriptions which have to be unsubscribed on component's destroying
 */
export abstract class BaseDestroyableComponent implements OnInit, OnDestroy {
  @Input() flight: Flight;
  private subscriptions: Subscription[] = [];
  dialog: any;

  abstract ngOnInit(): void;

  ngOnDestroy(): void {
      this.subscriptions.forEach((item) => item.unsubscribe());
  }

  openDialog(MyComponent: any, pWidth: string) {
    const dialogRef = this.dialog.open(MyComponent, {
      width: pWidth, data: {flight: this.flight}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.flight = result;
    });
  }

  subscribe<T>(observable: Observable<T>,
               next?: (value: T) => void,
               error?: (error: any) => void,
               complete?: () => void): void {
          this.subscriptions.push(observable.subscribe(next, error, complete));
  }
}
