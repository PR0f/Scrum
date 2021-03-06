import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output()
  OnMenuIconClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  MenuIconClick()
  {
    this.OnMenuIconClick.emit();
  }
}
