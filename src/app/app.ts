import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {HttpClientModule} from '@angular/common/http';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HttpClientModule, Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
