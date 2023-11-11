import type { SvelteComponent } from 'svelte';

export type Column = {
  component?: SvelteComponent;
  isEditable?: boolean;
  isInitiated?: boolean;
  isExportable?: boolean;
  isSortable?: boolean;
  isVisible?: boolean;
  key: string;
  label?: string;
  mask?: (arg: any) => any;
  props?: { [key: string]: any };
};

export type Columns = Column[];
