import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  musics: string[] =['1', '2', '3', '4', '5', '6', '7', '8', 
  '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
