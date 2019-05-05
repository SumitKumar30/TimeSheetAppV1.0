import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule } from 'node_modules/ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { ComputerdeptComponent } from './computerdept/computerdept.component';
import { ElectronicdeptComponent } from './electronicdept/electronicdept.component';
import { MechanicaldeptComponent } from './mechanicaldept/mechanicaldept.component';
import { CivildeptComponent } from './civildept/civildept.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HomepageComponent,
    ComputerdeptComponent,
    ElectronicdeptComponent,
    MechanicaldeptComponent,
    CivildeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
