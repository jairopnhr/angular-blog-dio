import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  imports: [PagesModule, ComponentsModule, RouterModule, CommonModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
