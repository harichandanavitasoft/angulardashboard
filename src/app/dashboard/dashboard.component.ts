import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css', 
})
export class DashboardComponent {
  

}
