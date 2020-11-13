const Canvas = require('canvas'); // 引入 node canvas
const F2 = require('@antv/f2');
const { JSDOM } = require('jsdom')
const C2S = require('canvas2svg');

var window = new JSDOM('').window;
global.XMLSerializer = window.XMLSerializer;

const canvas = Canvas.createCanvas(375, 260); // 创建 canvas 对象
var ctx = C2S({
  document: window.document,
  width: 375,
  height: 260,
  ctx: canvas.getContext('2d'),
});



const data = [
  { name: '芳华', percent: 0.4, a: '1' },
  { name: '妖猫传', percent: 0.2, a: '1' },
  { name: '机器之血', percent: 0.18, a: '1' },
  { name: '心理罪', percent: 0.15, a: '1' },
  { name: '寻梦环游记', percent: 0.05, a: '1' },
  { name: '其他', percent: 0.02, a: '1' }
];
const chart = new F2.Chart({
  context: ctx,
  width: 375,
  height: 260,
  animate: false,
  padding: [ 45, 'auto', 'auto' ]
});
chart.source(data, {
  percent: {
    formatter(val) {
      return val * 100 + '%';
    }
  }
});
chart.legend({
  position: 'right'
});
chart.coord('polar', {
  transposed: true,
  radius: 0.85
});
chart.axis(false);
chart.interval()
  .position('a*percent')
  .color('name', [ '#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0' ])
  .adjust('stack')
  .style({
    lineWidth: 1,
    stroke: '#fff',
    lineJoin: 'round',
    lineCap: 'round'
  });

chart.render();

// 获取svg
var mySerializedSVG = ctx.getSerializedSvg(true);
console.log(mySerializedSVG);
