import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatSidenavModule} from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatChipsModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatAutocompleteModule,
    MatSliderModule,
    OverlayModule,
  ],
  providers: [MatDatepickerModule],
})
export class AngularMaterialModule {}
