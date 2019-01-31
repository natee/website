import Vue from 'vue';
import RainyDay from './rainyday.js';

// if (process.env.NODE_ENV !== 'production') {
//   console.log(process.env.NODE_ENV)
// }

var app = {};

var skills = [{
  name: 'HTML(5)',
  img: require('../img/icon-html.png'),
  intro: '语义性，熟练手写符合w3c标准的HTML页面。'
}, {
  name: 'CSS(3)',
  img: require('../img/icon-css.png'),
  intro: '熟练使用CSS对网页进行（自适应）布局，了解不同浏览器的兼容性。<br /> 这里有一个彩虹样式。'
}, {
  name: 'Javascript',
  img: require('../img/icon-js.png'),
  intro: '你知道这个东西不简单，现在追求能够用优雅的代码实现功能。'
}, {
  name: 'jQuery',
  img: require('../img/icon-jquery.png'),
  intro: 'JS的一个类库，基本上可以熟练使用。'
}, {
  name: 'AngularJS',
  img: require('../img/icon-angular.png'),
  intro: '前端框架，用起来还是比较愉快的，极大减轻了对数据方面的处理，库重水深。'
}, {
  name: 'VueJS',
  img: require('../img/icon-vue.png'),
  intro: '渐进式JavaScript框架，易用、灵活、高效。'
}, {
  name: 'NodeJS',
  img: require('../img/icon-nodejs.png'),
  intro: '以前拿来增删改查，现在用来自动化。'
}, {
  name: 'BootStrap',
  img: require('../img/icon-bootstrap.png'),
  intro: '很强大的一个前端框架，自适应布局，各种组件等。'
}, {
  name: 'webpack',
  img: require('../img/icon-webpack.png'),
  intro: '构建工具'
}, {
  name: 'Gulp',
  img: require('../img/icon-gulp.png'),
  intro: '前端领域的构建工具（任务管理工具），隐隐有超过Grunt的意思。这项技术对于重复性的劳动可谓是雪中送炭，熟练使用创建基本任务。'
}, {
  name: 'Less',
  img: require('../img/icon-less.png'),
  intro: '把CSS赋予动态语言特性，可以写更少的代码达到效果。但是实际编译出来的代码量远远超过手写，所以我建议能不用就别用。'
}, {
  name: 'Phtoshop',
  img: require('../img/icon-ps.png'),
  intro: '熟练使用Photoshop，曾经做过几个网站的UI设计。'
}, {
  name: 'Sketch',
  img: require('../img/icon-sketch.png'),
  intro: '熟练使用Sketch切图，进行一些简单的设计。'
}, {
  name: 'Git',
  img: require('../img/icon-git.png'),
  intro: '现在只用git'
}];

app.skill = new Vue({
  el: '#jSkill',
  data: {
    mName: '职业技能',
    skills: skills,
  }
});

var exps = [{
  company: '海致网络技术（北京）有限公司',
  from: '2013-10',
  to: '2018-01',
  projects: [{
    name: 'BDP商业数据平台',
    intro: '数据分析及可视化软件。<a href="https://me.bdp.cn" target="_blank" class="link">个人版体验</a>',
    tags: ['AngularJS', 'NodeJS', 'Grunt']
  }, {
    name: '其它各种项目略过',
    intro: '......',
    tags: ['jQuery', 'Smarty']
  }],
}, {
  company: '北京艾德思奇科技有限公司',
  from: '2013-06',
  to: '2013-10',
  projects: [{
    name: '艾德聚合平台重构',
    intro: '艾德聚合平台是为移动APP开发者提供的一个信息管理平台，功能是发布应用，展示应用相关数据。',
    tags: ['jQuery']
  }],
}, {
  company: '中国科学院化学工程研究所（实习）',
  from: '2012-04',
  to: '2013-05',
  projects: [{
    name: '中国循环经济技术平台子项目--企业黄页',
    intro: '包括企业黄页项目和公司站点项目，均为门户性质的网站。<br />负责UI设计和前端开发工作。',
    tags: ['jQuery', 'Phtoshop']
  }, {
    name: '化合物搜索引擎ChemDB Portal改版',
    intro: '学术性搜索引擎+门户性质信息网站，化学品电子商务类网站。<br />负责网站新版本UI设计和前端重构工作。',
    tags: ['jQuery', 'Phtoshop']
  }],
}, {
  company: '北京艾迪创想信息科技有限公司',
  from: '2010-10',
  to: '2012-11',
  projects: [{
    name: '开吃吧',
    intro: '餐饮O2O，高校、白领外卖网。<br />自主创业项目，包括PC版、移动html5版，前端独立开发。',
    tags: ['jQuery']
  }]
}];

app.exp = new Vue({
  el: '#jExp',
  data: {
    mName: '项目经验',
    exps: exps,
  }
});

function initRain() {
  var img = new Image();
  img.src = require('../img/bg.jpg');

  img.onload = function () {

    var engine = new RainyDay({
      image: img,
      parentElement: document.querySelector("#rainCanvas"),
      fps: 60
    });
    engine.rain(
      [
        [1, 0, 2],         // add 20 drops of size 1...
        [3, 5, 1]           // ... and 1 drop of size from 3 - 6 ...
      ],
      150);
  }
}

function pureBg() {
  document.querySelector("#mainView").classList.add("bg-green");
}

function adpter() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    initRain();

    // TODO resize这个事情可以不考虑
  } else {
    // 性能原因移动端不调用canvas画水滴，用背景色代替。
    pureBg();
  }
}

// 主app
var vm = new Vue({
  el: '#app',
  data: {
    showCircleItem: false,
    displayContactInfo: false
  },
  mounted() {
    adpter();
  },
  methods: {
    toggleContact() {
      this.displayContactInfo = !this.displayContactInfo;
    }
  }
});
