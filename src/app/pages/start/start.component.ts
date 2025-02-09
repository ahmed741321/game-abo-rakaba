import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TempDataService } from './../../service/temp-data-service.service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterModule],
templateUrl: './start.component.html',
  styleUrl: './start.component.css',
})
export class StartComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private tempDataService: TempDataService // حقن الخدمة
  ) {}

  ngAfterViewInit() {
    // استخدام TempDataService بدلاً من sessionStorage
    this.tempDataService.setSelectedMusic('1');
    this.tempDataService.setSelectedCharacter('1');

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2500);
  }
}
