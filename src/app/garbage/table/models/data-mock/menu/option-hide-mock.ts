import { OptionI } from '../../interface/menu/option-i';
import { CanvasI } from '../../interface/menu/canvas-i';
import { getMetaDataFields } from '../table/table-mock';
import { ButtonI } from '../../interface/button/button-i';

export function getOptionHide(): OptionI {
  return {
    button: getButton(),
    canvas: getCanvas(),
  };
}

function getButton(): ButtonI {
  return {
    ariaLabel: 'Hide columns',
    tooltip: 'Hide columns',
    icon: 'visibility_off',
    content: 'Hide',
  };
}

function getCanvas(): CanvasI {
  return {
    title: 'Visible columns',
    fields: [],
  };
}
