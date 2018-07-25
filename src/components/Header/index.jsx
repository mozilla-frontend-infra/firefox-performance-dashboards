import PropTypes from 'prop-types';
import Picker from '../../components/Picker';
import CONFIG from '../../config';
import './style.css';

const Header = ({ benchmark, onChange, platform }) => (
  <div className="header">
    <Picker
      key="Platform selection"
      identifier="platform"
      topLabel="Platform"
      onSelection={onChange}
      selectedValue={platform}
      options={
        Object.keys(CONFIG).reduce((res, elem) => {
          res.push({ value: elem, label: CONFIG[elem].label });
          return res;
        }, [])
      }
    />
    <Picker
      key="Benchmark selection"
      identifier="benchmark"
      topLabel="Benchmark"
      onSelection={onChange}
      selectedValue={benchmark}
      options={
        CONFIG[platform].benchmarks.reduce((res, elem) => {
          res.push({ value: elem, label: elem });
          return res;
        }, [])
      }
    />
  </div>
);

Header.propTypes = ({
  benchmark: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
});

export default Header;
