const fs = require('fs');
const F2 = require('@antv/f2');

const { createCanvas } = require('canvas');

const data = [
  { date: '2011-10-01', city: 'New York', value: 63.4 },
  { date: '2011-10-02', city: 'New York', value: 58 },
  { date: '2011-10-03', city: 'New York', value: 53.3 },
  { date: '2011-10-04', city: 'New York', value: 54.3 },
  { date: '2011-10-05', city: 'New York', value: 56.3 },
  { date: '2011-10-06', city: 'New York', value: 50.3 },
  { date: '2011-10-01', city: 'Alaska', value: 62.7 },
  { date: '2011-10-02', city: 'Alaska', value: 59.9 },
  { date: '2011-10-03', city: 'Alaska', value: 59.1 },
  { date: '2011-10-01', city: 'Austin', value: 72.2 },
  { date: '2011-10-02', city: 'Austin', value: 67.7 },
  { date: '2011-10-03', city: 'Austin', value: 69.4 },
];

const pixelRatio = 2;
const width = 375;
const height = 240;

const canvas = createCanvas(width * pixelRatio, height * pixelRatio);
const ctx = canvas.getContext('2d');


const chart = new F2.Chart({
  context: ctx,
  width,
  height,
  pixelRatio,
});

chart.source(data, {
  date: {
    range: [0, 1],
    type: 'timeCat',
    mask: 'MM-DD'
  },
  value: {
    max: 300,
    tickCount: 4
  }
});
chart.line().position('date*value').color('city');
chart.render();

exports.chart = chart;
exports.canvas = canvas;
