import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspacebar',
  templateUrl: './workspacebar.component.html',
  styleUrls: ['./workspacebar.component.css']
})
export class WorkspacebarComponent implements OnInit {

  constructor() { }

  @Input()
  isMenuOpen: boolean = false;

  str:String = "Text example for testing";
  maxLength:number = 20;

  listElements = [1, 2, 3, 4, 5, 6, 7, 8]

  ngOnInit(): void {

  }

  tmp:String = "";

  finalStr()
  {
    if(this.str.length > this.maxLength)
    {
        this.tmp = this.str.substring(0, this.maxLength);
        this.str = this.tmp + "..";
        
    }
    return this.str;
  }

}
