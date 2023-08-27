import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      res => console.log('params', res)
    )

    this.activatedRoute.queryParams.subscribe(
      res => console.log('query params', res)
    )

    setInterval(() => {
      this.router.navigate(['404'])
      // this.router.navigateByUrl('404') // To external URLs
    }, 5000)
  }
}
