import { Component } from 'react';
import Header from '../../components/Header';
import CONFIG from '../../config';

class Benchmark extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    platform: 'win10',
    benchmark: 'ARES6',
  }

  onChange(event) {
    if (event.target.name === 'platform') {
      this.setState({
        benchmark: CONFIG[event.target.value].benchmarks[0],
      });
    }
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <Header onChange={this.onChange} {...this.state} />
        <div style={{ textAlign: 'center' }}>Graph</div>
      </div>
    );
  }
}

export default Benchmark;
