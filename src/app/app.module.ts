import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
// import { SelectDropDownModule } from 'ngx-select-dropdown'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { DropdownComponent } from './dropdown/dropdown.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    // SelectDropDownModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
