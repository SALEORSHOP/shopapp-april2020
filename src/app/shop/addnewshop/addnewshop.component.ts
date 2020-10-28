import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-addnewshop',
  templateUrl: './addnewshop.component.html',
  styleUrls: ['./addnewshop.component.css']
})
export class AddnewshopComponent implements OnInit {

  newShop: any = { };

  shopName: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewShop = (value: any) => {  };
}
