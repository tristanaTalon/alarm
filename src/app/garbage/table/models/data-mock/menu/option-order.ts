import { OptionI } from '../../interface/menu/option-i';
import { CanvasI } from '../../interface/menu/canvas-i';
import { ButtonI } from '../../interface/button/button-i';

export function getOptionSort(): OptionI {
  return {
    button: getButton(),
    canvas: getCanvas(),
  };
}

function getButton(): ButtonI {
  return {
    ariaLabel: 'Order column',
    tooltip: 'Order column',
    icon: 'sort',
    content: 'Order',
  };
}

function getCanvas(): CanvasI {
  return {
    title: 'Order column',
    fields: [],
  };
}
