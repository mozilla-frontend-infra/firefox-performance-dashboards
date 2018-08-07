import PropTypes from 'prop-types';
import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { select } from 'd3-selection';
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
        <div id={`mg-graph-parent-${this.props.uid}`}>
          {data && (
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
                popper.reference = select(`#mg-graph-parent-${this.props.uid} .mg-line-rollover-circle`).node();
                // Depending on how you "enter" the graph with your mouse, you will somehow
                // make that first line that you hovered over "special".
                // When you switch from hovering from the first line to the second one you will
                // notice that the tooltip will stay over the last data point from the
                // first line that you were hovering over. You can only affect the position
                // of the tooltip by returning to the first line.
                // I think the style.opacity should always return 1, however, when we hover over
                // data points from the second line you will notice that the console prints a 0
                console.log(popper.reference.style.opacity);
                popper.update();
              }}
              mouseout={() => {
                const tooltipEl = select(`#${this.state.tooltipId}`).node();
                tooltipEl.style.display = 'none';
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default GraphWithTooltip;
