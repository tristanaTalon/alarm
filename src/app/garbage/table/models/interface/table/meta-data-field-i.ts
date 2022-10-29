export interface MetaDataFieldI {
  name: string;

  alias: string;

  visible: boolean;

  icon?: string;

  direction: '' | 'asc' | 'desc';

  search: string;

  uniqueValues: any[];
}
