import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { DropdownComponent } from './dropdown/dropdown.component'
import { EmployeeFilterPipe } from './dropdown/search.pipe';
import {ScrollingModule} from '@angular/cdk/scrolling'
// import {MatCardModule} from '@angular/material'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeFilterPipe,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    // MatCardModule,
    ScrollingModule,
    NgHttpLoaderModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
