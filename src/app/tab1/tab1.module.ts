import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AgmComponent } from "../agm/agm.component";
import { AgmDirectionModule } from 'agm-direction'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsrwRG_lFv-Y0My9ylDr_kQx3lSE0NBxk',
      libraries: ['places']
    }),
    AgmDirectionModule
  ],
  declarations: [Tab1Page, AgmComponent]
})
export class Tab1PageModule {}
