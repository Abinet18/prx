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

export type ProfileFormField = {
  name: keyof ProfileType;
  label: string;
  placeholder?: string;
  type: string;
  options?: string[] | Option[];
  default?: string;
  rows?: number;
};

export type ProfileFormData = {
  title: string;
  fields: ProfileFormField[];
};

export type StyleColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'default'
  | undefined;

export type KeyValue = { key: string; value?: string };

export type AlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | undefined;

export type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;

export type ProfileType = {
  name: string;
  gender: string;
  bdate: string;
  jtitle: string;
  cname: string;
  summary: string;
  mstatus: string;
  interests: string;
  skills: string;
};
