import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MuiSlider from '@material-ui/lab/Slider';
import Tooltip from '@material-ui/core/Tooltip';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 305,
    margin: '0 20px',
    padding: '15px',
    textAlign: 'left',
  },
  label: {
    whiteSpace: 'nowrap',
    padding: '0 10px 3px 0',
    fontSize: '12px',
    color: '#757575',
  },
});

class Slider extends Component {
  constructor(props) {
    super(props);
    const { selectedValue } = props;
    this.state = {
      selectedValue,
    };
  }

  handleDragEnd = () => {
    const { handleSliderChange, searchParam } = this.props;
    const { selectedValue } = this.state;
    handleSliderChange(searchParam, selectedValue);
  };

  handleChange = (event, value) => {
    this.setState({ selectedValue: value });
  };

  render() {
    const {
      classes, identifier, label, options, onChangeUpdateTooltipFunc,
    } = this.props;
    const { selectedValue } = this.state;
    return (
      <form className={classes.root} autoComplete="off">
        <InputLabel
          className={classes.label}
          htmlFor={identifier}
        >
          {label}
        </InputLabel>
        <Tooltip
          disableFocusListener
          title={onChangeUpdateTooltipFunc(selectedValue)}
          placement="right"
        >
          <MuiSlider
            value={selectedValue}
            aria-labelledby={identifier}
            min={options.min}
            max={options.max}
            step={options.step}
            onChange={this.handleChange}
            onDragEnd={this.handleDragEnd}
          />
        </Tooltip>
      </form>
    );
  }
}

Slider.propTypes = {
  classes: PropTypes.shape().isRequired,
  identifier: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
  searchParam: PropTypes.string.isRequired,
  selectedValue: PropTypes.number.isRequired,
  onChangeUpdateTooltipFunc: PropTypes.func.isRequired,
  handleSliderChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Slider);
