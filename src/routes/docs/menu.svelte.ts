import * as actions from '$lib/actions/index.js';
import * as components from '$lib/components/index.js';
import * as themes from '$lib/themes/index.js';

// utilities
const getLabel = (key: string) =>
  key.replace(/(^.)/g, (character) => character.toUpperCase()).replace(/([A-Z])/g, ' $1');
const getHREF = (key: string) =>
  key
    .replace(/(^.)/g, (character) => character.toLowerCase())
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase();

export const menu: {
  title: string;
  isOpen: boolean;
  items: Map<string, { href: string }>;
}[] = $state([
  {
    title: 'Getting Started',
    isOpen: false,
    items: new Map([
      ['Installation', { href: '/docs/getting-started/installation' }],
      ['Using Components', { href: '/docs/getting-started/using-components' }]
    ])
  },
  {
    title: 'Actions',
    isOpen: false,
    items: Object.keys(actions).reduce((map, key) => {
      const label = getLabel(key);
      map.set(label, { href: `/docs/actions/${getHREF(key)}` });
      return map;
    }, new Map())
  },
  {
    title: 'Components',
    isOpen: false,
    items: Object.keys(components).reduce((map, key) => {
      const label = getLabel(key);
      map.set(label, { href: `/docs/components/${getHREF(key)}` });
      return map;
    }, new Map())
  },
  {
    title: 'Themes',
    isOpen: false,
    items: Object.keys(themes).reduce((map, key) => {
      const label = getLabel(key);
      map.set(label, { href: `/docs/themes/${getHREF(key)}` });
      return map;
    }, new Map())
  }
]);
