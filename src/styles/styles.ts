import { makeStyles } from '@material-ui/core';
import {
  grayColors,
  primaryColors,
  greenColors,
  redColors,
  blueColors,
} from '../constants/Constants';

const greenBkg = {
  background: `linear-gradient(45deg, 
        ${greenColors[0]},${greenColors[9]})`,
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

export const cardStyles = makeStyles({
  root: {
    margin: '16px auto',
    borderRadius: 10,
    border: `1px solid ${grayColors[12]}`,
    ...greenBlueBkg,
    overflow: 'hidden',
  },
  header: {
    ...defaultFont,
    fontWeight: 600,
    textAlign: 'center',
    ...greenBkg,
    padding: 8,
  },
  body: {
    ...defaultFont,
    width: '100%',
    margin: 8,
    padding: 8,
  },
  footer: {
    ...defaultFont,
    width: '100%',
    ...greenBkg,
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
    ...greenBkg,
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
  root: {
    ...defaultFont,
  },
  label: {
    ...defaultFont,
  },
});
