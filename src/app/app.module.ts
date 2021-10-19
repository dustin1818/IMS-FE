import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainRoutingModule } from './main/main-routing.module';
import { FormsModule } from '@angular/forms'

//import components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SupplierModal } from './components/supplier-modal/supplier-modal.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { HelpComponent } from './components/help/help.component';
import { AboutComponent } from './components/about/about.component';

//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    ProfileComponent,
    EmployeeComponent,
    InventoryComponent,
    SupplierModal,
    SupplierComponent,
    HelpComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatInputModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
