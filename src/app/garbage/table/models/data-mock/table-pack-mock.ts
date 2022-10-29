import { TablePackI } from '../interface/table-pack-i';
import { getTable, getMetaDataFields } from './table/table-mock';
import { MetaDataFieldI } from '../interface/table/meta-data-field-i';
import { getMenu } from './menu/menu-mock';

export function getTablePack(): TablePackI {
  const metaDataFields: MetaDataFieldI[] = getMetaDataFields();
  const tablePack: TablePackI = {
    async: false,
    table: getTable(),
    paginator: {
      length: 0,
      pageSize: 5,
      pageIndex: 0,
      pageSizeOptions: [5, 10, 20, 50, 100],
    },
    menu: getMenu(),
    route: 'https://invian',
  };
  setMetaDataInterface(tablePack, metaDataFields);
  return tablePack;
}

function setMetaDataInterface(
  tablePack: TablePackI,
  metaDataFields: MetaDataFieldI[]
): void {
  tablePack.table.metaDataFields = metaDataFields;
  tablePack.menu.metaDataFields = metaDataFields;
}
