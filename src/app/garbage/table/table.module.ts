import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PageMainComponent } from './testing-pages/page-main/page-main.component';
import { PageApiComponent } from './testing-pages/page-api/page-api.component';
import { PageExampleComponent } from './testing-pages/page-example/page-example.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { CellComponent } from './components/table/cell/cell.component';
import { HeaderCellComponent } from './components/table/header-cell/header-cell.component';
import { TableComponent } from './components/table/table/table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SelectionButtonsComponent } from './components/selection-buttons/selection-buttons.component';
import { MessagesModule } from '../messages/messages.module';
import { TableModalComponent } from './components/table/table-modal/table-modal.component';
import { OptionOrderComponent } from './components/menu/option-order/option-order.component';
import { OptionSearchComponent } from './components/menu/option-search/option-search.component';
import { OptionHideComponent } from './components/menu/option-hide/option-hide.component';
import { OptionFilterComponent } from './components/menu/option-filter/option-filter.component';
import { ButtonAloneComponent } from './components/button-alone/button-alone.component';
import { OptionComponent } from './components/menu/option/option.component';
import { ItemOrderComponent } from './components/menu/item-order/item-order.component';
import { CanvasComponent } from './components/menu/canvas/canvas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutofocusDirective } from './directives/autofocus.directive';
import { OptionFilterAdvancedComponent } from './components/menu/option-filter-advanced/option-filter-advanced.component';
import { OptionFilterFastComponent } from './components/menu/option-filter-fast/option-filter-fast.component';
import { ItemFilterAdvancedComponent } from './components/menu/item-filter-advanced/item-filter-advanced.component';
import { ItemFilterFastComponent } from './components/menu/item-filter-fast/item-filter-fast.component';
import { ItemFilterValuesComponent } from './components/menu/item-filter-values/item-filter-values.component';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent,
  },
];
@NgModule({
  declarations: [
    TableComponent,
    PageMainComponent,
    PageApiComponent,
    PageExampleComponent,
    CellComponent,
    HeaderCellComponent,
    PaginatorComponent,
    MenuComponent,
    SelectionButtonsComponent,
    TableModalComponent,
    OptionOrderComponent,
    OptionSearchComponent,
    OptionHideComponent,
    OptionFilterComponent,
    ButtonAloneComponent,
    OptionComponent,
    ItemOrderComponent,
    CanvasComponent,
    AutofocusDirective,
    OptionFilterAdvancedComponent,
    OptionFilterFastComponent,
    ItemFilterAdvancedComponent,
    ItemFilterFastComponent,
    ItemFilterValuesComponent,
  ],
  imports: [
    CommonModule,
    ProgressBarModule,
    DragDropModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MessagesModule,
    RouterModule.forChild(routes),
  ],
})
export class TableModule {}
