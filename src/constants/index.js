export const entities = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles',
];
export const propertiesWithArray = {
  films: [
    'characters',
    'planets',
    'species',
    'starships',
    'vehicles',
  ],
  people: [
    'films',
    'species',
    'starships',
    'vehicles',
  ],
  planets: [
    'films',
    'species',
    'starships',
    'vehicles',
  ],
  species: [
    'films',
    'people',
  ],
  starships: [
    'films',
    'pilots',
  ],
  vehicles: [
    'films',
    'pilots',
  ],
};
