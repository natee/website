(function() {
    var app = {};

    var skills = [{
        name: 'HTML(5)',
        img: 'img/icon-html.jpg',
        intro: '语义性，熟练手写符合w3c标准的HTML页面。'
    }, {
        name: 'CSS(3)',
        img: 'img/icon-css.jpg',
        intro: '熟练使用CSS对网页进行（自适应）布局，了解不同浏览器的兼容性。<br /> 这里有一个彩虹样式。'
    }, {
        name: 'Javascript',
        img: 'img/icon-js.jpg',
        intro: '你知道这个东西不简单，现在追求能够用优雅的代码实现功能。'
    }, {
        name: 'jQuery',
        img: 'img/icon-jquery.jpg',
        intro: 'JS的一个类库，基本上可以熟练使用。'
    }, {
        name: 'AngularJS',
        img: 'img/icon-angular.jpg',
        intro: '前端框架，用起来还是比较愉快的，极大减轻了对数据方面的处理，库重水深。'
    }, {
        name: 'NodeJS',
        img: 'img/icon-nodejs.jpg',
        intro: '以前拿来增删改查，现在用来自动化。'
    }, {
        name: 'BootStrap',
        img: 'img/icon-bootstrap.jpg',
        intro: '很强大的一个前端框架，自适应布局，各种组件等。'
    }, {
        name: 'Gulp',
        img: 'img/icon-gulp.png',
        intro: '前端领域的构建工具（任务管理工具），隐隐有超过Grunt的意思。这项技术对于重复性的劳动可谓是雪中送炭，熟练使用创建基本任务。'
    }, {
        name: 'Less',
        img: 'img/icon-less.jpg',
        intro: '把CSS赋予动态语言特性，可以写更少的代码达到效果。但是实际编译出来的代码量远远超过手写，所以我建议能不用就别用。'
    }, {
        name: 'Phtoshop',
        img: 'img/icon-ps.jpg',
        intro: '熟练使用Photoshop，曾经做过几个网站的UI设计。'
    }, {
        name: 'Git',
        img: 'img/icon-git.jpg',
        intro: '版本管理工具，不用说太多。'
    }, {
        name: 'SVN',
        img: 'img/icon-svn.jpeg',
        intro: '版本管理工具，不用说太多。'
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
        tags: ['AngularJS','NodeJS','Grunt']
      },{
        name: '其它各种项目略过',
        intro: '......',
        tags: ['jQuery','Smarty']
      }],
    },{
      company: '北京艾德思奇科技有限公司',
      from: '2013-06',
      to: '2013-10',
      projects: [{
        name: '艾德聚合平台重构',
        intro: '艾德聚合平台是为移动APP开发者提供的一个信息管理平台，功能是发布应用，展示应用相关数据。',
        tags: ['jQuery']
      }],
    },{
      company: '中国科学院化学工程研究所',
      from: '2012-04',
      to: '2013-05',
      projects: [{
        name: '中国循环经济技术平台子项目--企业黄页',
        intro: '包括企业黄页项目和公司站点项目，均为门户性质的网站。<br />负责UI设计和前端开发工作。',
        tags: ['jQuery','Phtoshop']
      },{
        name: '化合物搜索引擎ChemDB Portal改版',
        intro: '学术性搜索引擎+门户性质信息网站，化学品电子商务类网站。<br />负责网站新版本UI设计和前端重构工作。',
        tags: ['jQuery','Phtoshop']
      }],
    },{
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
})();
