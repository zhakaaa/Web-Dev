import { Component } from '@angular/core';
import {AlbumsComponent} from '../albums/albums.component';
import {AboutComponent} from '../about/about.component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [AlbumsComponent, AboutComponent, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
