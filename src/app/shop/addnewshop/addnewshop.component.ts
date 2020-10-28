import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-addnewshop',
  templateUrl: './addnewshop.component.html',
  styleUrls: ['./addnewshop.component.css']
})
export class AddnewshopComponent implements OnInit {

  newShop: any = { };
  shopName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  services1: string;
  services2: string;
  description: string;
  shopPicture: string;
  shopOwner: 'ShopOwner';

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewShop = (shop: any) => {
    console.log(shop);
  }
}
