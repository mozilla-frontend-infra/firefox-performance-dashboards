import PropTypes from 'prop-types';
import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { select } from 'd3';
import Popper from 'popper.js';

class GraphWithTooltip extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.array).isRequired,
    uid: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    // For lack of a better solution when we have multiple MG graphs
    this.state = {
      tooltipId: `tooltip-${this.props.uid}`,
    };
  }

  componentDidMount() {
    const tooltipEl = select(`#${this.state.tooltipId}`).node();
    tooltipEl.addEventListener('mouseover', () => {
      tooltipEl.style.display = 'block';
    });
    tooltipEl.addEventListener('mouseout', () => {
      tooltipEl.style.display = 'none';
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div
          className="tooltip"
          id={this.state.tooltipId}
          style={{
            display: 'none',
            minHeight: '32px',
            minWidth: '100px',
            padding: '12px',
            marginBottom: '8px',
            backgroundColor: '#333',
            color: 'white',
            opacity: '0.7',
            textAlign: 'left',
          }}
        />
        {data && (
          <div>
            <MetricsGraphics
              data={data}
              x_accessor="datetime"
              y_accessor="value"
              min_y_from_data
              full_width
              right="60"
              legend={['Firefox', 'Chrome']}
              mouseover={(d) => {
                const tooltipEl = select(`#${this.state.tooltipId}`).node();
                tooltipEl.style.display = 'block';
                tooltipEl.innerText = `value: ${d.value}`;
                const popper = new Popper(document.documentElement, tooltipEl, { placement: 'top' });
                popper.reference = select('.mg-line-rollover-circle').node();
                popper.update();
              }}
              mouseout={() => {
                const tooltipEl = select(`#${this.state.tooltipId}`).node();
                tooltipEl.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default GraphWithTooltip;
