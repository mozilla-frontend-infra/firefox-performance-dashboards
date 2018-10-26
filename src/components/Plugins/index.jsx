import { Chart } from 'react-chartjs-2';

const registerTooltipPlugin = () => {
  Chart.pluginService.register({
    id: 'tooltipPlugin',
    beforeRender(chart) {
      this.pluginTooltips = [];
      const globalChartObj = Chart;
      // Process only if a data point was clicked
      if (globalChartObj.lastClickedDataPoint) {
        // As we update all charts to clean any open pluginTooltips
        // This will make sure only target chart gets updated with tooltip data
        // eslint-disable-next-line no-underscore-dangle
        if (globalChartObj.lastClickedDataPoint._chart.chart.id !== chart.id) {
          return;
        }
        // eslint-disable-next-line no-underscore-dangle
        const datasetIndex = globalChartObj.lastClickedDataPoint._datasetIndex;
        // eslint-disable-next-line no-underscore-dangle
        const index = globalChartObj.lastClickedDataPoint._index;
        this.pluginTooltips.push(new Chart.Tooltip({
          _chart: chart.chart,
          _chartInstance: chart,
          _data: chart.data,
          _options: chart.options.tooltips,
          _active: [chart.getDatasetMeta(datasetIndex).data[index]],
        }, chart));
      }
    },
    afterDatasetsDraw(chart, easing) {
      Chart.helpers.each(this.pluginTooltips, (tooltip) => {
        tooltip.initialize();
        tooltip.update();
        tooltip.pivot();
        tooltip.transition(easing).draw();
      });
    },
  });
};

export default registerTooltipPlugin;
