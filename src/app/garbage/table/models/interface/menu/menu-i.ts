import { MenuConfigurationI } from './menu-configuration-i';
import { MetaDataFieldI } from '../table/meta-data-field-i';

export interface MenuI {
  configuration: MenuConfigurationI;

  metaDataFields: MetaDataFieldI[];
}
