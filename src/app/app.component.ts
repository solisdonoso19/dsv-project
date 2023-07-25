import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'project-dsv';
  constructor(private router: Router) {}

  ngOnInit = () => {
    this.router.navigateByUrl('/pages/home');
  };
}
