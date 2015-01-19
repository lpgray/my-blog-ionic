var articles = [{
        id: 1,
        name: '我的切图方法最佳实践',
        image: 'http://zysmedia.qiniudn.com/license.jpg',
        content: '我的切图方法最佳实践 一个通常的前端开发工作，基本都是这样一个流程： 从产品和设计手中取得设计稿 写静态页面与前端交互，也就是俗称的切图 编写前端的JS交互特效',
        body: '<h1 id="-">我的切图方法最佳实践</h1> \
<p>一个通常的前端开发工作，基本都是这样一个流程：</p> \
<ol> \
<li>从产品和设计手中取得设计稿</li> \
<li>写静态页面与前端交互，也就是俗称的切图</li> \
<li>编写前端的JS交互特效</li> \
<li>将静态页面交给后端人员套模板（最近还流行前后端分离，套模板也交给前端来搞，前端除了处理页面之外，还负责http请求层的开发，后端只负责数据接口开发，不管展现，但这个模式目前普及度还不高，因此咱们不讨论这个）</li><li>联调模板，写ajax交互</li> \
</ol> \
<blockquote> \
<p>还有比较流行的Webapp开发模式，开发、构建全部依赖框架，诸如angularjs、avalon之类的框架就不属于此次讨论的范围。咱们这次就说切图。</p></blockquote> \
<h2 id="-">过去的模式分析</h2> \
<p>我们前端在做静态页面时，经常面对的一个问题就是会有大量重复html代码，比如公共头部、公共页尾部分在每个页面都会包含，而且有的时候需要使用静态页面验证需求，在这种要求下，页面间的跳转也需要你自己写href，此时，如果你负责的项目比较大，页面比较多时，维护起来你会非常痛苦。当然，更可怕的还有巨多的css文件，js文件也需要有条理的维护。</p><h2 id="-">过去的总结</h2> \
<p>其实，对过去的前端开发模式总结一下，就是前端的模板不够“动态”。如果有一个办法可以让我们像后端套模板似的来去做前端静态页面，那前端肯定可以很好的去规划不同的业务模块，那么CSS/JS文件怎么去组织管理的问题，当然也迎刃而解啦。</p> \
<h2 id="-">我的切图方法介绍</h2> \
<p>为了解决html巨多，css、js不好管理的情况，我引入了类似后端开发套模板的include机制，将公共页面部分提取出来，比如：header（整站公共导航）、footer（整站页尾）、styles（样式表）、scripts（脚本），然后在每一个页面中include公共页面，这样就很好维护了。</p><blockquote> \
<p>干货来啦！我将我整个的开发流程总结了一个grunt项目初始模板，大家可以在我的github上下载：<a href="https://github.com/lpgray/ray-grunt-template">https://github.com/lpgray/ray-grunt-template</a></p></blockquote> \
<h3 id="-grunt-includes">使用 grunt-includes</h3> \
<p><a href="http://gruntjs.org">gruntjs</a>想必搞前端的同学都很熟悉，这个我就不多介绍。我是使用的一个grunt插件，名字叫<a href="https://www.npmjs.com/package/grunt-includes">grunt-includes</a>，这个插件可以将带有include的html页面转换成常规的html页面。</p><h3 id="-">开发方式</h3> \
<p>我的切图方式大致如下：</p> \
<ol> \
<li>使用 livereload + watch 插件实现监控代码改变浏览器自动刷新</li> \
<li>使用Less来组织css</li> \
<li>JavaScript还是按常规模式来写（至于你想用coffee或者用commonjs来写，这都随便啦）</li> \
<li>使用watch + includes来实现监控html改变，然后自动调用grunt-includes功能</li> \
<li>让livereload的http server访问grunt-includes转化后的页面 \
至此，你已经可以实现一个功能强大，类似后端动态include的前端切图模式！</li> \
</ol> \
<h3 id="-">代码构建</h3> \
<p>如果需要前端交付压缩后的css和js，你也可以使用process-html来进行css、js的引用替换，让html页面都包含压缩后的代码。</p><p>以上这一套开发流程我github上的项目都已经包含了，大家有兴趣可以自己搞下来体会体会。</p> \
<h2 id="-">提供一些额外的参考资料</h2> \
<blockquote> \
<p><a href="http://www.gruntjs.org/docs/project-scaffolding.html">如何使用gruntjs初始化模板</a></p> \
</blockquote>'
    }, {
        id: 2,
        name: '`__defineGetter__` 引发的思考',
        content: '__defineGetter__ 引发的思考 问题 那天朋友分享了一个面试题，自己当时不会，代码如下： code 很简单，alert的结果是1。 但是题目却是另外一个说法，'
    }];

var tags = [{
        id: 1,
        name: 'HTML5'
    }, {
        id: 2,
        name: 'JavaScript'
    }, {
        id: 3,
        name: 'CSS'
    }, {
        id: 4,
        name: '前端开发'
    }, {
        id: 5,
        name: 'CMD'
    }, {
        id: 1,
        name: 'HTML5'
    }, {
        id: 2,
        name: 'JavaScript'
    }, {
        id: 3,
        name: 'CSS'
    }, {
        id: 4,
        name: '前端开发'
    }, {
        id: 5,
        name: 'CMD'
    }];

angular.module('services', [])

.factory('Articles', function() {
    return {
        all: function() {
            return articles;
        },
        find: function() {
            return articles[0];
        }
    }
})

.factory('Tags', function() {
    return {
        all: function() {
            return tags;
        },
        find: function() {
            return articles;
        }
    }
});