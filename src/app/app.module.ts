
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageCountriesComponent } from './not use/manag/manage-countries/manage-countries.component';
import { CountriesService } from './services/countries.service';
import { LocalStorageService } from './services/local-storage.service';
import { ManageAreaService } from './services/manage-area.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { map } from 'rxjs/operators/map';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManagComponent } from './not use/manag/manag.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NestedTreeControl} from '@angular/cdk/tree/control/nested-tree-control';
import {MatTreeModule} from '@angular/material/tree';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { TreeComponent } from './tree/tree.component';





@NgModule({
  
  declarations: [
    AppComponent,
    ManageCountriesComponent,
    ManagComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    BrowserAnimationsModule,
     MatTreeModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    A11yModule,
    DragDropModule,
    PortalModule,ScrollingModule,CdkStepperModule,CdkTreeModule,
    CdkTableModule
  ],
  exports:[ MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    ManagComponent,
    ManageCountriesComponent,
    ReactiveFormsModule,
MatTreeModule,
A11yModule,
DragDropModule,PortalModule,ScrollingModule,CdkTableModule,CdkTreeModule,
CdkStepperModule
  ],
  providers: [CountriesService,ManageAreaService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
