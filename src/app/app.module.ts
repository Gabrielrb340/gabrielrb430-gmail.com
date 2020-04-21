import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import {FormsModule} from '@angular/forms'
import { DetalhesModalComponent } from './components/detalhes-modal/detalhes-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PaginationComponent,
    DetalhesComponent,
    DetalhesModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    NgbModule,
    NgbPaginationModule,
    AngularResizedEventModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[DetalhesModalComponent,DetalhesComponent]

})
export class AppModule { }
