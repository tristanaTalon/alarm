import { DateRangeC } from 'src/app/progress-bar/models/classes/date-range-c';
import { MetaDataFieldI } from '../../interface/table/meta-data-field-i';
import { TableConfigurationI } from '../../interface/table/table-config-i';
import { TableI } from '../../interface/table/table-i';

export function getTable(): TableI {
  return {
    dataSource: [],
    metaDataFields: [],
    configuration: getConfiguration(),
    isLoading: false,
  };
}

export function getMetaDataFields(): MetaDataFieldI[] {
  return [
    {
      name: 'Código',
      alias: 'Code',
      visible: true,
      icon: 'vpn_key',
      direction: '',
      search: '',
      uniqueValues: [],
    },
    {
      name: 'Nombre',
      alias: 'Name',
      visible: true,
      icon: 'badge',
      direction: '',
      search: '',
      uniqueValues: [],
    },
    {
      name: 'Apellido',
      alias: 'Surname',
      visible: true,
      icon: 'badge',
      direction: '',
      search: '',
      uniqueValues: [],
    },
    {
      name: 'Cronograma',
      alias: 'Cronogram',
      visible: true,
      icon: 'date_range',
      direction: '',
      search: '',
      uniqueValues: [],
    },
  ];
}

function getConfiguration(): TableConfigurationI {
  return {
    selection: true,
    draggedAndDropped: true,
    ordering: ['Código', 'Nombre', 'Apellido'],
  };
}

export function getDataSource(): any[] {
  return [
    {
      Código: 15,
      Nombre: 'Nuna Apuqatiqill',
      Apellido: 'Tomayro Uchuypoma',

      Cronograma: new DateRangeC(new Date('10/03/22'), new Date('10/06/22')),
    },
    {
      Código: 1,
      Nombre: 'Francisco Javier',
      Apellido: 'Gutierrez Alvarado',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 1,
      Nombre: 'Francisco Javier',
      Apellido: 'Gutierrez Alvarado',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 2,
      Nombre: 'Jose Antonio',
      Apellido: 'Hernandez Jimenez',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 3,
      Nombre: 'Jose Manuel',
      Apellido: 'Martinez Rodriguez',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/07/22')),
    },
    {
      Código: 4,
      Nombre: 'Miguel Angel',
      Apellido: 'Sanchez Sanchez',

      Cronograma: new DateRangeC(new Date('10/03/22'), new Date('10/06/22')),
    },
    {
      Código: 5,
      Nombre: 'Maria Angeles',
      Apellido: 'Schumacher Mitterand',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 6,
      Nombre: 'Cristina Dolores',
      Apellido: 'Colquehuanca Guañuna',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 7,
      Nombre: 'Cleopatra Antonieta',
      Apellido: 'Huancahuari Paucarchuco',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 8,
      Nombre: 'Kunturchawa Kusiyupanki',
      Apellido: 'Sayritupac Chuquimango',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 9,
      Nombre: 'Pawq´artupaq Pumasunk´u',
      Apellido: 'Uchuypoma Vilca',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 10,
      Nombre: 'Qollaqhapaq Sullkawaman',
      Apellido: 'Chanca Chipana',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/07/22')),
    },
    {
      Código: 11,
      Nombre: 'Yaku Wamanachachi',
      Apellido: 'Inka Huyhua',

      Cronograma: new DateRangeC(new Date('10/03/22'), new Date('10/06/22')),
    },
    {
      Código: 12,
      Nombre: 'Pachakutiq Pikichaki',
      Apellido: 'Jaillita Malqui',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 13,
      Nombre: 'Llaska Kuntur',
      Apellido: 'Ñaupari Olaya',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/06/22')),
    },
    {
      Código: 14,
      Nombre: 'Illayuq Hakan',
      Apellido: 'Pinto Pumacaja',

      Cronograma: new DateRangeC(new Date('10/04/22'), new Date('10/07/22')),
    },
    {
      Código: 15,
      Nombre: 'Nuna Apuqatiqill',
      Apellido: 'Tomayro Uchuypoma',

      Cronograma: new DateRangeC(new Date('10/03/22'), new Date('10/06/22')),
    },
  ];
}
