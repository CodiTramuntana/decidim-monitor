import { Component, OnInit, Input } from '@angular/core';
import { VersionerService } from "../versioner.service";
import { Observable } from "rxjs/Observable";
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {
  @Input() installation: any;
  outdated$:Observable<boolean>;
  outdatedColor$:Observable<string>;

  constructor(private versioner:VersionerService) { }

  ngOnInit() {
    this.outdated$ = this.versioner.checkOutdated(this.installation.version);

    this.outdatedColor$ = this.outdated$.pipe(
      map(outdated => outdated ? "warn" : "primary"),
      startWith('')
    );
  }
}
