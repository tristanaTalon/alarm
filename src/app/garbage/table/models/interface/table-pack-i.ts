import { MenuI } from './menu/menu-i';
import { PaginatorI } from './paginator/paginator-i';
import { TableI } from './table/table-i';

export interface TablePackI {
  async: boolean;

  table: TableI;

  paginator: PaginatorI;

  menu: MenuI;

  route: string;
}
