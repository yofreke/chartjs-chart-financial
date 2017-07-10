'use strict';

var registerPlugin = function(
  ChartJs
) {
  if (!ChartJs) {
    ChartJs = require('chart.js');
    if (typeof(Chart) !== 'function') {
      ChartJs = window.Chart;
    }
  }

  require('./element.candlestick.js')(ChartJs);
  require('./scale.financialLinear.js')(ChartJs);
  require('./scale.timeseries.js')(ChartJs);
  require('./controller.financial.js')(ChartJs);
}

module.exports = {
  registerPlugin: registerPlugin
};
