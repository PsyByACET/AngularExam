import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  purchaseForm: FormGroup;
  id: number;

  constructor(private MpurchaseService: MpurchaseService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if(!isNullOrUndefined(params.id)) {
        this.id = +params.id
      }else {
        this.id = null;
      }
    })
  }

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

  async onSwap(id: number) {
    try {
      let res = await this.MpurchaseService.getOneById(id);
      console.log(res.status);
      if(res.status == 'true') {
        await this.MpurchaseService.putOneById(id, {"name": res.name, "amount": res.amount, "status": "false"})
        // console.log((await this.MpurchaseService.getOneById(id)).status)
      }else {
        await this.MpurchaseService.putOneById(id, {"name": res.name, "amount": res.amount, "status": "true"})
      }

      this.getData();
    } catch(err) {
      console.error(err);
    }
  }
}
