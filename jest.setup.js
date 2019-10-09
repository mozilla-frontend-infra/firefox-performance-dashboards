const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const { createSerializer } = require('enzyme-to-json');

Enzyme.configure({ adapter: new EnzymeAdapter() });

expect.addSnapshotSerializer(
  createSerializer({
    mode: 'deep',
    map(json) {
      // skips deep rendering of React components
      return /^[A-Z]/.test(json.type) ? { ...json, props: undefined } : json;
    },
  }),
);
