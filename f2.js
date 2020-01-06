const F2 = require('@antv/f2/lib/core'); // 引入核心包

require('@antv/f2/lib/geom/'); // 几何标记对象
require('@antv/f2/lib/geom/adjust/'); // 数据调整

require('@antv/f2/lib/coord/polar'); // 极坐标系
require('@antv/f2/lib/component/axis/circle'); // 极坐标系下的弧长坐标轴

require('@antv/f2/lib/scale/time-cat'); // timeCat 类型的度量

require('@antv/f2/lib/component/guide'); // 加载 guide 组件

const Tooltip = require('@antv/f2/lib/plugin/tooltip');
const Guide = require('@antv/f2/lib/plugin/guide');
const Legend = require('@antv/f2/lib/plugin/legend');

// register plugins
F2.Chart.plugins.register([ Tooltip, Legend, Guide ]);

module.exports = F2;
