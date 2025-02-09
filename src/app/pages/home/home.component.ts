import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TempDataService } from '../../service/temp-data-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedCharacter: number ;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router,tempDataService: TempDataService) {
    this.selectedCharacter = Number(tempDataService.getSelectedCharacter()) || 1;
  }




  goToSongs() {
    this.router.navigate(['songs']);
  }

  goToInfo() {
    this.router.navigate(['info']);

  }
  goToCharacters() {
    this.router.navigate(['characters']);
  }

  playgame() {
    this.router.navigate(['game']);
  }
}
