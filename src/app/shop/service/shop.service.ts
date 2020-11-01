import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from '../../models/shop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  urlshop = 'http://localhost:3000/shop';

  addShop(shop: Shop): Observable<Shop> {
    return this.httpClient.post<Shop>(this.urlshop, shop);
  }

  getAllShops = () => {
    return this.httpClient.get(this.urlshop);
  }

  getShopById = (id) => {
    return this.httpClient.get(this.urlshop + '/' + id);
  }

  constructor(private httpClient: HttpClient) { }
}
