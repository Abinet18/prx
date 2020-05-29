import { makeStyles, RootRef } from '@material-ui/core';
import {
  grayColors,
  primaryColors,
  greenColors,
  redColors,
  blueColors,
  whiteColor,
} from '../constants/Constants';

const greenGradientBkg = {
  background: `linear-gradient(45deg, 
        ${greenColors[0]},${greenColors[9]})`,
};
const greenBkg = {
  backgroundColor: greenColors[5],
};
const redBkg = {
  background: `linear-gradient(45deg, 
          ${redColors[0]},${redColors[9]})`,
};
const blueBkg = {
  background: `linear-gradient(45deg, 
            ${blueColors[0]},${blueColors[9]})`,
};

const greenBlueBkg = {
  background: `linear-gradient(45deg, 
              ${blueColors[0]},${greenColors[0]})`,
};
const defaultFont = {
  color: grayColors[4],
  fontSize: '14px',
};

export const labelStyles = makeStyles({
  root: {
    ...defaultFont,
    verticalAlign: 'bottom',
  },
});

export const inputLabelStyles = makeStyles({
  root: {
    color: grayColors[7],
    fontSize: '10px',
    lineHeight: '1.42857',
    top: '10px',
  },
});

export const textInputStyles = makeStyles({
  root: {
    ...defaultFont,
    width: '100%',
  },
});
const headerBase = {
  ...defaultFont,
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'center',
  padding: 8,
};
const footerBase = {
  display: 'flex',
  ...defaultFont,
  width: '100%',
  padding: 8,
  justifyContent: 'flex-end',
};
export const cardStyles = makeStyles({
  container: {
    margin: 'auto',
    padding: 0,
  },
  root: {
    margin: 16,
    borderRadius: 10,
    ...greenBlueBkg,
    overflow: 'hidden',
  },
  header: {
    ...greenGradientBkg,
    ...headerBase,
  },
  body: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
  },
  footer: {
    ...greenGradientBkg,
    ...footerBase,
  },
  headerNoBkg: {
    ...headerBase,
  },
  footerNoBkg: {
    ...footerBase,
  },
  headerBlue: {
    ...headerBase,
    ...blueBkg,
  },
  profile: {
    height: 400,
    overflowY: 'scroll',
    margin: 16,
    borderRadius: 10,
    ...greenBlueBkg,
    overflow: 'hidden',
  },
  profilelist: {
    fontWeight: 500,
    padding: 8,
    textOverflow: 'word-wrap',
  },
  profilequote: {
    fontStyle: 'italic',
    padding: 8,
  },
  profileitem: {
    padding: 8,
  },
});

export const formStyles = makeStyles({
  formLine: {
    margin: 8,
  },
});

export const selectInputStyles = makeStyles({
  root: {
    ...defaultFont,
    width: '100%',
  },
});

export const textFieldRootStyles = makeStyles({
  root: {
    width: '100%',
    ...defaultFont,
    '&:focused': {
      color: grayColors[0],
    },
  },
  underline: {
    '&:after': {
      borderBottomColor: primaryColors[0],
      transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    },
    '&:before': {
      borderBottom: `.5px solid ${grayColors[10]}`,
    },
    '&:hover:not(:disabled):before': {
      borderBottom: `1px solid ${primaryColors[0]}`,
    },
  },
});

export const chipClasses = makeStyles({
  root: {
    width: '100%',
    ...defaultFont,
    ...greenGradientBkg,
  },
});

export const textFieldLabelStyles = makeStyles({
  root: {
    color: grayColors[0],
    '&$focused': {
      color: primaryColors[0],
    },
  },
  focused: {},
});

export const checkboxStyles = makeStyles({
  colorPrimary: {
    color: primaryColors[0],
    '&$checked': {
      color: primaryColors[0],
    },
  },
  checked: {
    color: primaryColors[0],
  },
});

export const formControlLabelStyles = makeStyles({
  root: {
    ...defaultFont,
  },
  label: {
    ...defaultFont,
  },
});

export const dateStyles = makeStyles({
  datePicker: {
    padding: '6px 0',
    width: '100%',
    background: 'none',
    border: 'none',
    outline: 'none',
    ...defaultFont,
    borderBottomColor: grayColors[10],
    borderBottomStyle: 'solid',
    borderBottomWidth: 0.5,
    '&:focus': {
      transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      borderBottomColor: primaryColors[0],
      borderBottomWidth: 2,
    },
  },
  wrapper: {
    width: '100%',
  },
});

export const buttonStyles = makeStyles({
  primary: {
    color: whiteColor,
    fontWeight: 400,
    textTransform: 'none',
    ...greenBkg,
    padding: '4px 16px',
    margin: '4px 16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: greenColors[7],
    },
  },
});
