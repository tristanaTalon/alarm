import { ButtonC } from 'src/app/shared/models/classes/button/buttonC';
import { ButtonConfigC } from '../../shared/models/classes/button/buttonConfigC';
import { ButtonContentC } from '../../shared/models/classes/button/buttonContentC';
import { cloneDeepWith } from 'lodash';
import { ButtonStatusC } from '../../shared/models/classes/button/buttonStatusC';
import { SourceC } from '../../shared/models/classes/source/sourceC';

const buttonConfigC: ButtonConfigC = new ButtonConfigC('', 'primary');

const buttonContents: ButtonContentC[] = [
  new ButtonContentC('My Lib', 'logo'),
  new ButtonContentC('Components', 'apps'),
  new ButtonContentC('Tutorial', 'video_library'),
  new ButtonContentC('Support me', 'savings'),
];

const buttonUrls: SourceC[] = [
  new SourceC('My Lib', '/about'),
  new SourceC('Components', '/components'),
  new SourceC('Tutorial', '/tutorial'),
  new SourceC('Support me', '/support-me'),
];

export function getMenuSeeder(): ButtonC[] {
  const menu: ButtonC[] = [];
  for (let i = 0; i < buttonContents.length; i++) {
    const buttonConfig = cloneDeepWith(buttonConfigC);
    const buttonContent = buttonContents[i];
    const button = new ButtonC(buttonConfig, buttonContent);
    button.setUrl(getUrl(button.getButtonContent().getName()));
    menu.push(button);
  }
  return menu;
}

function getUrl(name: string): string {
  for (let i = 0; i < buttonUrls.length; i++) {
    const element = buttonUrls[i];
    if (element.getName() == name) {
      return element.getUrl();
    }
  }
  return '';
}
