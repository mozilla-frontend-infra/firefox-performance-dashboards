import PropTypes from 'prop-types';
import { Component } from 'react';
import MetricsGraphics from 'react-metrics-graphics';
import { select } from 'd3-selection';
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
            borderRadius: '5px',
            minHeight: '32px',
            width: '150px',
            padding: '8px',
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
              mouseover={async (d) => {
                const tooltipEl = select(`#${this.state.tooltipId}`).node();
                // XXX: We can probably create a data structure with all this metadata
                // in componentDidMount
                // There's a flickering happening because of the fetch delaying us
                const datumMeta = await getDatumMeta(d.push_id);
                const url = changesetUrl(datumMeta.revision);
                const link = document.createElement('a');
                link.href = url;
                const text = datumMeta.revision.substring(0, 8);
                link.innerText = text;
                // NOTE: There are sometimes race conditions so I'm updating
                // the innerText and appending a child as close as possible to each other
                tooltipEl.innerText = 'Revision:         ';
                tooltipEl.appendChild(link);
                const popper = new Popper(document.documentElement, tooltipEl, { placement: 'top' });
                popper.reference = select(`#mg-graph-parent-${this.props.uid} .mg-line-rollover-circle`).node();
                popper.update();
                tooltipEl.style.display = 'block';
              }}
              mouseout={() => {
                const tooltipEl = select(`#${this.state.tooltipId}`).node();
                tooltipEl.style.display = 'none';
                while (tooltipEl.firstChild) {
                  tooltipEl.removeChild(tooltipEl.firstChild);
                }
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default GraphWithTooltip;
