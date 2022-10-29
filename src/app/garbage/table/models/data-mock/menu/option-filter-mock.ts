import { OptionI } from '../../interface/menu/option-i';
import { CanvasI } from '../../interface/menu/canvas-i';
import { getMetaDataFields } from '../table/table-mock';
import { ButtonI } from '../../interface/button/button-i';

export function getOptionFilterAdvanced(): OptionI {
  return {
    button: getButtonFilterAdvanced(),
    canvas: getCanvasFilterAdvanced(),
  };
}
function getButtonFilterAdvanced(): ButtonI {
  return {
    ariaLabel: 'Advanced filter',
    tooltip: 'Advanced filter',
    icon: 'expand_more',
    content: '',
  };
}

function getCanvasFilterAdvanced(): CanvasI {
  return {
    title: 'Advanced filter',
    fields: [],
  };
}

export function getOptionFilterFast(): OptionI {
  return {
    button: getButtonFilterFast(),
    canvas: getCanvasFilterFast(),
  };
}

function getButtonFilterFast(): ButtonI {
  return {
    ariaLabel: 'Fast filter',
    tooltip: 'Fast filter',
    icon: 'filter_alt',
    content: 'Filter',
  };
}

function getCanvasFilterFast(): CanvasI {
  return {
    title: 'Fast filter',
    fields: [],
  };
}
