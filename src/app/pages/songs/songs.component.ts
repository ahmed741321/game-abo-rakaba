import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from './../../environment';
import { TempDataService } from '../../service/temp-data-service.service';
@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  moods: any[] = environment.musice;
  selectedMood: number ;

   constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private tempDataService: TempDataService) {
     this.selectedMood = Number(tempDataService.getSelectedMusic()) || 1;
   }

  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef<HTMLAudioElement>;

  playAudio(audioSrc: string) {
    if (this.audioPlayer && audioSrc) {
      this.audioPlayer.nativeElement.src = "/assets/songs/" + audioSrc + ".mp3";
      this.audioPlayer.nativeElement.play();
    }
  }


  okBtn() {
    this.tempDataService.setSelectedMusic(this.selectedMood.toString());
    this.router.navigate(['home']);
  }
}
