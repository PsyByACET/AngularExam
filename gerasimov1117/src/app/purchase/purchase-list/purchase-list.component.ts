import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mpurchase } from 'src/app/shared/models/mpurchase.model';
import { MpurchaseService } from 'src/app/shared/services/mpurchase.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  purchase: Mpurchase[];

  constructor(private MpurchaseService: MpurchaseService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try{
      let purchase = this.MpurchaseService.getAll();
      this.purchase = isNullOrUndefined(await purchase) ? [] : await purchase;
    }catch(err){
      console.error(err);
    }
  }

  onAddProduct() {
    this.router.navigate([this.router.url, 'product'])
  }

  onLinkProduct(id: number) {
    this.router.navigate([this.router.url, 'product', id])
  }
}
