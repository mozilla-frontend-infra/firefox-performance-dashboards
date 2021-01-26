import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  formControl: {
    minWidth: 120,
    maxWidth: 300,
    margin: '0 20px',
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultipleSelectPicker = ({
  classes, labels, selectedLabels, onSelection, identifier,
}) => {
  let clearSelection = false;
  if (selectedLabels.length !== 0) {
    clearSelection = true;
  }
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Series</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          name={identifier}
          value={selectedLabels}
          onChange={onSelection}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {clearSelection ? (
            <MenuItem key="Clear selection" value="Clear selection">
              <em>Clear selection</em>
            </MenuItem>
          ) : ''}
          {labels.map((label) => (
            <MenuItem key={label} value={label}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(MultipleSelectPicker);
