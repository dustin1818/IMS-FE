import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainRoutingModule } from './main/main-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';


//import components
import { WelcomeComponent } from './components/register/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/register/signin/signin.component';
import { SignupComponent } from './components/register/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmployeeComponent } from './components/employee-container/employee/employee.component';
import { EmployeeModalComponent } from './components/employee-container/employee-main/employee-modal/employee-modal.component';
import { InventoryComponent } from './components/inventory-main/inventory/inventory.component';
import { InventoryModalComponent } from './components/inventory-main/add-inventory/inventory-modal.component';
import { EditInventoryComponent } from './components/inventory-main/edit-inventory/edit-inventory.component';
import { SupplierModal } from './components/supplier-main/modal-supplier/supplier-modal.component';
import { SupplierComponent } from './components/supplier-main/supplier/supplier.component';
import { HelpComponent } from './components/help/help.component';

//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

//other imports
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
    WelcomeComponent,
    InventoryModalComponent,
    EditInventoryComponent,
    EmployeeModalComponent,
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
