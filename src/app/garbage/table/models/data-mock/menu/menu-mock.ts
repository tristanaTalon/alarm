import { MenuConfigurationI } from '../../interface/menu/menu-configuration-i';
import { MenuI } from '../../interface/menu/menu-i';

export function getMenu(): MenuI {
  return {
    configuration: getConfigurationMenu(),
    metaDataFields:[],
  };
}

function getConfigurationMenu(): MenuConfigurationI {
  return {
    search: true,
    filter: true,
    order: true,
    hide: true,
  };
}
