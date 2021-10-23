import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.css']
})
export class UserWidgetComponent implements OnInit {

  public name = "Rowan	Torres";

  public email = "rowan.torres@gmail.com";

  public active = "Active";

  userImage:string = "assets/images/user.png";

  threeDot:string = "assets/images/three-dot.png";


  constructor() { }

  ngOnInit(): void {
  }

}
