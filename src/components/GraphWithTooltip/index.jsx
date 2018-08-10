import PropTypes from 'prop-types';
import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { curveLinear } from 'd3';
import Popper from 'popper.js';
import { changesetUrl } from '../../utils/hg';
import getDatumMeta from '../../utils/perfherder';

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
    // We only want to clear the tooltip when the mouse leaves the graph
    // rather than the circle
    const graphEl = document.querySelector(`#mg-graph-parent-${this.props.uid}`);
    // https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave
    // mouseleave does not bubble up
    graphEl.addEventListener('mouseleave', () => {
      // NOTE: If you move the mouse over the tooltip you will notice that
      // the tooltip will cause a weird cycle of calling:
      // MG OUT, GRAPH OUT, GRAPH leaving and MG mouseover
      console.log('Mouse GRAPH leaving');
      const tooltipEl = document.querySelector(`#${this.state.tooltipId}`);
      tooltipEl.style.display = 'none';
    });
    graphEl.addEventListener('mouseout', () => {
      console.log('Mouse GRAPH OUT');
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
            borderRadius: '5px',
            padding: '0.7em',
            marginBottom: '1em',
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
              interpolate={curveLinear}
              mouseover={async (d) => {
                console.log('Mouse MG mouseover');
                const tooltipEl = document.querySelector(`#${this.state.tooltipId}`);
                const link = document.createElement('a');
                const datumMeta = await getDatumMeta(d.push_id);
                const url = changesetUrl(datumMeta.revision);
                link.href = url;
                link.innerText = datumMeta.revision.substring(0, 8);
                while (tooltipEl.firstChild) {
                  tooltipEl.removeChild(tooltipEl.firstChild);
                }
                tooltipEl.innerText = 'Revision: ';
                tooltipEl.appendChild(link);
                const popper = new Popper(document.documentElement, tooltipEl, { placement: 'top' });
                popper.reference = document
                  .querySelector(`#mg-graph-parent-${this.props.uid} .mg-line${d.line_id}.mg-line-rollover-circle`);
                popper.update();
                tooltipEl.style.display = 'block';
              }}
              mouseout={() => {
                console.log('Mouse MG OUT');
              }}
              mouseleave={() => {
                console.log('Mouse MG leaving');
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default GraphWithTooltip;
