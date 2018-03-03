import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { MafatihService } from './services/mafatih.service';
import { SearchService } from './services/search.service';
import { MainComponent } from './main.component';
import { IntroComponent } from './intro.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatToolbarModule, MatSidenavModule, MatButtonModule, 
    MatCheckboxModule, MatExpansionModule, MatGridListModule, 
    MatButtonModule, MatCardModule, MatInputModule,

    RouterModule.forRoot(
      [
        {
            path: '',
            component: IntroComponent
        },
        {
            path: 'mafatih',
            component: AppComponent
        }
      ],
      { enableTracing: true }
    )
  ],
  providers: [
    MafatihService,
    SearchService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
