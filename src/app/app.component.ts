import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transport-management';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  homeClicked(): void {
    this.router.navigate(['/'])
  }

  onTransporter(): void {
    this.router.navigate(['/transporters'], { relativeTo: this.route })
  }

  onTransportOffer(): void {
    this.router.navigate(['/transport_offers'], { relativeTo: this.route })
  }

  onTransportBid() {
    this.router.navigate(['/transport_bid'], { relativeTo: this.route })
  }

  onTransportPlan(): void {
    this.router.navigate(['/transport_plans'], { relativeTo: this.route })
  }
  onLocation(): void {
    this.router.navigate(['/locations'], { relativeTo: this.route })
  }
  onRoute(): void {
    this.router.navigate(['/routes'], { relativeTo: this.route })
  }

  onTransportBid(): void{
    this.router.navigate(['transport_bids'], {relativeTo: this.route})
  }
}
