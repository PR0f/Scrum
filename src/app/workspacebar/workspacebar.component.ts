import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-workspacebar',
  templateUrl: './workspacebar.component.html',
  styleUrls: ['./workspacebar.component.css']
})
export class WorkspacebarComponent implements OnInit {

  constructor() { }

  bold:boolean = true;

  listElements = [1, 2, 3, 4, 5, 6]

  ngOnInit(): void {
  }

}
