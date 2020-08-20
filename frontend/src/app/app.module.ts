import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { RedDirective } from "./directives/red.directive";
import { ForDirective } from "./directives/for.directive";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ProductReadComponent } from "./components/product/product-read/product-read.component";

import { Component } from "@angular/core";
import { FormControl, FormGroupDirective, Validators } from "@angular/forms";
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from "@angular/material/core";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/product/product-delete/product-delete.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMaskModule.forRoot(),
    MatSelectModule,
    ReactiveFormsModule,
  ],

  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
    { provide: ErrorStateMatcher, 
      useClass: ShowOnDirtyErrorStateMatcher },
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {
  options: Partial<IConfig> | (() => Partial<IConfig>);
}