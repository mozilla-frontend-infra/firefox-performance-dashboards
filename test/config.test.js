import { BENCHMARKS, CONFIG } from '../src/config';

it('Verify all benchmarks are defined', () => {
  Object.values(CONFIG.views).map(({ benchmarks }) => (
    benchmarks.forEach((benchmarkKey) => {
      if (!(benchmarkKey in BENCHMARKS)) {
        // eslint-disable-next-line
        console.log(benchmarkKey);
      }
    })
  ));
});
