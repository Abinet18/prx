export type XS =
  | boolean
  | 'auto'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type Option = {
  value: string;
  label: string;
};

export type CheckboxValue = {
  value: string;
  checked: boolean;
};

export type FormField = {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  options?: string[] | Option[] | CheckboxValue[];
  default?: string;
};

export type FormData = {
  title: string;
  fields: FormField[];
};
