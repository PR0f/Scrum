import { Component, OnInit,  NgModule, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-workespaces',
  templateUrl: './workespaces.component.html',
  styleUrls: ['./workespaces.component.css']
})
export class WorkespacesComponent  {

  workspaceGroups = [
    {"id":0, "title":'Bronze age', "subtitle":'cos tam'},
    {"id":1, "title":'Iron age', "subtitle":'cos tam'},
    {"id":2, "title":'Middle ages', "subtitle":'cos tam'},
    {"id":3, "title":'Golden age', "subtitle":'cos tam'}
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.workspaceGroups, event.previousIndex, event.currentIndex);
  }


  addCard()
  {
    this.workspaceGroups.push({"id":4, "title":'Test', "subtitle":'cos tam'});
    //add server backend to update filles
  }

  delCard(index : number)
  {
    this.workspaceGroups.splice(index,1);
    //add server backend to update filles
  }

  isGroupHidden : boolean = false;

  toogleGroupHidding()
  {
    this.isGroupHidden = !this.isGroupHidden;
    //add server backend to update filles
  }
}