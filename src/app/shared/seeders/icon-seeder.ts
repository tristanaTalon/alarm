import { SourceC } from '../models/classes/source/sourceC';

export function getIconsSeeder(): SourceC[] {
  return [new SourceC('logo', getPath('logo'))];
}

function getPath(source: string): string {
  const rootPath = 'assets/icons/';
  const extension = '.svg';
  return rootPath + source + extension;
}
