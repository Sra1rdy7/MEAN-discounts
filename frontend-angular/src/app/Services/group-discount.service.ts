import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupDiscountService {

  constructor(private http: HttpClient) { }
  API_URI = environment.API_URI;
  Discounts = 'discounts';

  addNewGroupDiscount(university: string, endDate: Date, discountRules: [] ) {
    const groupDiscountData = {
                      university,
                      endDate,
                      discountRules
                      };
    return this.http.post(`${this.API_URI}/${this.Discounts}`, groupDiscountData);
  }

  getDiscounts() {
    return this.http.get(`${this.API_URI}/${this.Discounts}`);

  }

  getDiscountsById(id: any) {
    return this.http.get(`${this.API_URI}/${this.Discounts}/${id}`);

  }
  deleteDiscount(id) {
    return this.http.delete(`${this.API_URI}/${this.Discounts}/${id}`);
  }
  updateDiscount(id, userId) {
    const data = {
      id,
      userId
    };
    return this.http.patch(`${this.API_URI}/${this.Discounts}/adduser`, data);
  }
  getUsersInfo(id: any) {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get(`${this.API_URI}/${this.Discounts}/userinfo/${id}`);
  }







}
