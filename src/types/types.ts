export type OneToTen = undefined | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Spacing = 0 | OneToTen;

export type XS = boolean | OneToTen | 11 | 12;

export type Option = {
  value: string;
  label: string;
};

// export type CheckboxValue = {
//   value: string;
//   checked: boolean;
// };

export type FormField = {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  options?: string[] | Option[];
  default?: string;
};

export type FormData = {
  title: string;
  fields: FormField[];
};

export type StyleColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'default'
  | undefined;

export type KeyValue = { key: string; value?: string };
