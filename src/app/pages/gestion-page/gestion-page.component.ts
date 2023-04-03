import {Product} from 'src/app/models/product.model'
import {ProdsService} from 'src/app/shared/services/prods.service';
import { Component, InputDecorator } from '@angular/core';



@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent {

  productos: Product = {
    id: 0,
    name:"",
    price: 0,
    description: "",
    stars: 0,
    image: "",
  }

  constructor(private ProdsService: ProdsService){}

  crearProducto(){
    this.ProdsService.postProducts(this.productos)
    console.log(this.productos);
  }

}
