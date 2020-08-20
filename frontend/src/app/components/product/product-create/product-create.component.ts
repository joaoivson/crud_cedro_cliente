import { HttpClient } from "@angular/common/http";
import { ProductService } from "../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.model";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { from } from "rxjs";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    cpf: "",
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  };
  isLoading: boolean;
  auth: any;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Cliente Cadastrado");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

  form = new FormGroup({
    first: new FormControl("Nancy", Validators.minLength(2)),
    last: new FormControl("Drew"),
  });
}
