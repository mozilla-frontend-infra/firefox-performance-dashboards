import { BENCHMARKS, CONFIG } from '../src/config';

it('Verify all benchmarks are defined', () => {
  Object.values(CONFIG.views).map(({ benchmarks }) => (
    benchmarks.forEach((benchmarkKey) => {
      if (!(benchmarkKey in BENCHMARKS)) {
        console.log(benchmarkKey);
      }
    })
  ));
});
