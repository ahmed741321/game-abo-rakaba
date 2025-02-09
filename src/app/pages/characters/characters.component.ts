import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../environment';
import { TempDataService } from '../../service/temp-data-service.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  coins = 50; // عدد العملات التي يمتلكها اللاعب
  selectedCharacter: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private tempDataService: TempDataService) {
    this.selectedCharacter = Number(tempDataService.getSelectedCharacter()) || 1;
  }

  characters: any[] = environment.characters
  okBtn() {
    console.log(this.selectedCharacter);
    this.tempDataService.setSelectedCharacter(this.selectedCharacter.toString());
    this.router.navigate(['home']);
  }
}
