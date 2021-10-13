import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ){}

  routingBackToHome() {
    this.router.navigateByUrl('/');
  }

  routingToArticles() {
    this.router.navigateByUrl('/articles');
  }

  routingToContact() {
    this.router.navigateByUrl('/contact');
  }

  ngOnInit(): void {
  }

}
