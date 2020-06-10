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
  background: redColors[5],
};
const redGradientBkg = {
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
    paddingBottom: 8,
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
  padding: 8,
  justifyContent: 'flex-end',
  height: 64,
};
export const cardStyles = makeStyles({
  container: {
    margin: '64px auto',
    padding: 0,
    position: 'relative',
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
    position: 'relative',
  },
  pageheader: {
    position: 'fixed',
    top: 0,
    height: 64,
    ...greenGradientBkg,
    padding: 8,
    zIndex: 100,
    margin: '0 auto',
  },
  body: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
  },
  profileBody: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
    height: 300,
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  viewProfileBody: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
    height: 'calc(100vh - 240px)',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  footer: {
    ...greenGradientBkg,
    ...footerBase,
    boxSizing: 'border-box',
  },
  headerNoBkg: {
    ...headerBase,
  },
  footerNoBkg: {
    ...footerBase,
    boxSizing: 'border-box',
  },
  headerBlue: {
    ...headerBase,
    ...blueBkg,
    position: 'relative',
  },
  profile: {
    margin: 16,
    borderRadius: 10,
    ...greenBlueBkg,
  },
  qn: {
    margin: 16,
  },
  viewProfile: {
    margin: '72px 16px 16px 16px',
    borderRadius: 10,
    ...greenBlueBkg,
  },
  profilelist: {
    fontWeight: 500,
    padding: 8,
    wordBreak: 'break-word',
  },
  profilequote: {
    fontStyle: 'italic',
    padding: 8,
  },
  profileitem: {
    padding: 8,
  },
  modal: {
    position: 'relative',
    top: 0,
    left: 0,
    outline: 'none',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  form: {
    margin: '72px 16px 16px 16px',
    borderRadius: 10,
    ...greenBlueBkg,
    overflowY: 'auto',
    overflow: 'hidden',
    height: 'calc(100vh - 120px)',
  },
  leftIcon: {
    position: 'absolute',
    left: 16,
    top: 4,
  },
  link: {
    ...defaultFont,
    padding: 4,
    outline: 'none',
    textDecoration: 'none',
    textAlign: 'center',
  },
  qbrief: {
    padding: 8,
  },
  qactive: {
    ...greenBlueBkg,
    borderLeft: `2px solid ${greenColors[5]}`,
  },
  options: {
    padding: '16px 32px',
  },
  option: {
    padding: 8,
  },
});

export const formStyles = makeStyles({
  formLine: {
    margin: 8,
    padding: 8,
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
    padding: '4px 8px',
    margin: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: greenColors[7],
    },
  },
  delete: {
    color: redColors[5],
    fontWeight: 400,
    textTransform: 'none',
    padding: '4px 8px',
    margin: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: redColors[7],
    },
  },

  edit: {
    color: greenColors[5],
    fontWeight: 400,
    textTransform: 'none',
    padding: '4px 8px',
    margin: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: greenColors[7],
    },
  },
  close: {
    color: redColors[1],
    fontWeight: 400,
    textTransform: 'none',
    padding: 0,
    margin: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: redColors[1],
      color: redColors[5],
    },
    position: 'relative',
    top: -8,
  },
});
