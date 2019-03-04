import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'cv-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onAddClick() {
    this.router.navigate(['/edit', -1]);
  }
}
