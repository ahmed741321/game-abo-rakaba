import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  constructor(private Router: Router) { }

  okBtn() {
    this.Router.navigate(['home']);
  }
}
