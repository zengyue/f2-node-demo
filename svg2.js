const F2 = require('@antv/f2');
const { createHTMLDocument } = require('svgdom');
const SVGEngine = require('f2-svg-engine');

// 注册svg渲染引擎
F2.G.registerEngine('svg', SVGEngine);

const document = createHTMLDocument('');
global.document = document;

const container = document.createElement('div');
document.body.appendChild(container);

const data = [
  { name: '芳华', percent: 0.4, a: '1' },
  { name: '妖猫传', percent: 0.2, a: '1' },
  { name: '机器之血', percent: 0.18, a: '1' },
  { name: '心理罪', percent: 0.15, a: '1' },
  { name: '寻梦环游记', percent: 0.05, a: '1' },
  { name: '其他', percent: 0.02, a: '1' }
];
const chart = new F2.Chart({
  el: container,
  width: 375,
  height: 260,
  animate: false,
  renderer: 'svg'
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

console.log(container.innerHTML);
