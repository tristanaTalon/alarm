import { MetaDataFieldI } from './meta-data-field-i';
import { TableConfigurationI } from './table-config-i';

export interface TableI {
  metaDataFields: MetaDataFieldI[];

  dataSource: any[];

  configuration?: TableConfigurationI;

  isLoading: boolean;
}
