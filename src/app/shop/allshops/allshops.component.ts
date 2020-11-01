import {Component, OnInit} from '@angular/core';
import {ShopService} from '../service/shop.service';

@Component({
  selector: 'app-allshops',
  templateUrl: './allshops.component.html',
  styleUrls: ['./allshops.component.css']
})
export class AllshopsComponent implements OnInit {
  searchString = '';

  shop: any = [];

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.shopService.getAllShops().subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
