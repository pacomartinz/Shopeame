import { Component, OnInit } from '@angular/core';
import {ProdsService} from 'src/app/shared/services/prods.service'

@Component({
  selector: 'app-prods-page',
  templateUrl: './prods-page.component.html',
  styleUrls: ['./prods-page.component.scss']
})
export class ProdsPageComponent implements OnInit{

  products:any;
  constructor (private prodsService: ProdsService) {}

  ngOnInit(): void {
    this.prodsService.getProducts().subscribe((res:any) =>{
      console.log(res)
      this.products = res;
    });
  }

}
