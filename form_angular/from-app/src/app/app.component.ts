import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserModuleModule } from './user-module/user-module.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'from-app';
}
