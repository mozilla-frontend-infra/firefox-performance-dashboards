const prepareData = (benchmarks) => {
  // eslint-disable-next-line
  const sortAlphabetically = (a, b) => {
    if (a.meta.test < b.meta.test) {
      return -1;
    } else if (a.meta.test > b.meta.test) {
      return 1;
    }
    return 0;
  };

  const newData = {};
  Object.values(benchmarks).forEach(({ data, perfherderUrl }) => {
    Object.values(data).forEach((elem) => {
      const { meta } = elem;
      const subbenchmarkData = elem.data;
      if (!newData[meta.test]) {
        newData[meta.test] = {
          data: [subbenchmarkData],
          meta,
          urls: [perfherderUrl],
        };
      } else {
        newData[meta.test].data.push(subbenchmarkData);
        newData[meta.test].urls.push(perfherderUrl);
      }
    });
  });

  return newData;
};

export default prepareData;
