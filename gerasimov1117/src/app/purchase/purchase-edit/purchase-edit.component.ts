import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mpurchase } from 'src/app/shared/models/mpurchase.model';
import { MpurchaseService } from 'src/app/shared/services/mpurchase.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {

  id: number;
  purchase: Mpurchase;

  constructor(private activatedRoute: ActivatedRoute, private MpurchaseService: MpurchaseService) {
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
    if(!isNullOrUndefined(this.id)) {
      try{
        let purchase = this.MpurchaseService.getOneById(this.id);
        this.purchase = await purchase
      }catch(err){
        console.error(err);
      }
    }
  }
}
