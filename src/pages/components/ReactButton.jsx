import { buttonBaseClasses } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';

export default function ReactButton(props) {
  return (
    <ToggleButton
      id={props.id}
      value="check"
      selected={props.value}
      onChange={props.handleChange}
    >
    {props.value ? "Add" : "Added"}
    </ToggleButton>
  );
}