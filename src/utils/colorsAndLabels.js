import { BENCHMARKS, CONFIG } from '../config';

const colorsAndLabels = configUID => ({
  colors: BENCHMARKS[configUID].colors
    ? BENCHMARKS[configUID].colors
    : CONFIG.default.colors,
  labels: BENCHMARKS[configUID].labels
    ? BENCHMARKS[configUID].labels
    : CONFIG.default.labels,
});

export default colorsAndLabels;
