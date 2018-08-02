import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Picker from '../../components/Picker';
import CONFIG from '../../config';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

const Header = ({
  classes, benchmark, onChange, platform,
}) => (
  <div className={classes.root2} >
    <Picker
      key="Platform selection"
      identifier="platform"
      topLabel="Platform"
      onSelection={onChange}
      selectedValue={platform}
      options={
        Object.keys(CONFIG).reduce((res, platformKey) => {
          res.push({ value: platformKey, label: CONFIG[platformKey].label });
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
        Object.keys(CONFIG[platform].benchmarks).reduce((res, benchmarkKey) => {
          res.push({ value: benchmarkKey, label: CONFIG[platform].benchmarks[benchmarkKey].label });
          return res;
        }, [])
      }
    />
  </div>
);

Header.propTypes = ({
  classes: PropTypes.shape().isRequired,
  benchmark: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired,
});

export default withStyles(styles)(Header);
