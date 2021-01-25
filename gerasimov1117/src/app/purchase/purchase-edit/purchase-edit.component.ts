import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  purchaseForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private MpurchaseService: MpurchaseService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      if(!isNullOrUndefined(params.id)) {
        this.id = +params.id
      }else {
        this.id = null;
      }
    })
  }

  ngOnInit(): void {
    this.purchaseForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
    })
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
      this.purchaseForm.patchValue({
        name: this.purchase.name,
        amount: this.purchase.amount,
        status: this.purchase.status,
      })
    }
  }

  async onDelete() {
    try{
      await this.MpurchaseService.deleteOneById(this.id)
    }catch(err){
      console.error(err);
    }
    this.router.navigate(['/purchase'])
  }

  async onSave() {
    if(!isNullOrUndefined(this.id)) {
      try{
        await this.MpurchaseService.putOneById(this.id, this.purchaseForm.value)
      }catch(err){
        console.error(err);
      }
    } else {
      try{
        let res = await this.MpurchaseService.postOne(this.purchaseForm.value)
        this.router.navigate([this.router.url, res.id])
        this.getData();
      }catch(err){
        console.error(err);
      }
    }
  }
}
