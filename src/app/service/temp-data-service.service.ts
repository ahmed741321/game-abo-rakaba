import { Injectable, makeStateKey, TransferState } from '@angular/core';

// إنشاء مفاتيح لتخزين البيانات
const SELECTED_MUSIC_KEY = makeStateKey<string>('selectedMusic');
const SELECTED_CHARACTER_KEY = makeStateKey<string>('selectedCharacter');

@Injectable({
  providedIn: 'root',
})
export class TempDataService {
  constructor(private transferState: TransferState) {}

  // تعيين الموسيقى المختارة
  setSelectedMusic(musicId: string): void {
    this.transferState.set(SELECTED_MUSIC_KEY, musicId);
  }

  // الحصول على الموسيقى المختارة
  getSelectedMusic(): string {
    return this.transferState.get(SELECTED_MUSIC_KEY, '');
  }

  // تعيين الشخصية المختارة
  setSelectedCharacter(characterId: string): void {
    this.transferState.set(SELECTED_CHARACTER_KEY, characterId);
  }

  // الحصول على الشخصية المختارة
  getSelectedCharacter(): string {
    return this.transferState.get(SELECTED_CHARACTER_KEY, '');
  }
}
