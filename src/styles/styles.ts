import { makeStyles } from '@material-ui/core';
import { grayColors, primaryColors } from '../constants/Constants';

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
    margin: 8,
    borderRadius: 10,
    border: `1px solid ${grayColors[12]}`,
    backgroundColor: grayColors[13],
    overflow: 'hidden',
  },
  header: {
    ...defaultFont,
    fontWeight: 600,
    textAlign: 'center',
    backgroundColor: grayColors[11],

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
    backgroundColor: grayColors[11],

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
    ...defaultFont,
    paddingBottom: 4,
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
      borderBottom: `1px solid ${grayColors[4]}`,
    },
    '&:hover:not(:disabled):before': {
      borderBottom: `1px solid ${grayColors[4]}`,
    },
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
