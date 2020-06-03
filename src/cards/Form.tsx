import React from 'react';

import Card from './Card';

import FormLine from './FormLine';
import { profileForm as data } from '../data/data';

import { cardStyles } from '../styles/styles';
import InputField from './InputField';
import ProfileSaveButton from './ProfileSaveButton';
import CloseIcon from '@material-ui/icons/Close';
import { useStore } from '../store/store';

type Props = {
  path?: string[];
};

const Form = ({ path }: Props) => {
  const classes = cardStyles();
  const curPath = path || ['newProfile'];
  const [, setOpen] = useStore(['open'], false);
  const onClose = () => {
    setOpen(false);
  };
  const header = (
    <div className={classes.header}>
      <CloseIcon onClick={onClose} className={classes.leftIcon} />
      {data.title}
    </div>
  );

  return (
    <Card header={header} xs={12} md={8} className={classes.form}>
      {data.fields.map((field, index) => (
        <FormLine key={index} label={field.label} labelSize={3}>
          <InputField field={field} path={curPath} />
        </FormLine>
      ))}
      <ProfileSaveButton path={curPath} count={data.fields.length} />
    </Card>
  );
};

export default Form;
