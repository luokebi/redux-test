##一些问题
####server端render时出现Unexpected token... 问题
node(v6.x)现在还不完全支持es6,所以需要babel才能运行
有两种方法：
- **babel-node**  
首先需要安装babel-cli
```
$ npm install --save-dev babel-cli
```
官方推荐非全局安装，所以使用的时候就不能直接使用babel-node,只能新建一个npm script来运行。
package.json中添加：
```
“script”: {
	"start": "./node_modules/babel-cli/bin/babel-node server.js"
}
```
之后执行：
```
$ npm run start
```
*官方不推荐在procuction下面使用babel-node,因为cache被存储在内存中所以会占用很高的内存，你在启动时可能还会遇到性能问题，因为他是实时（即时）编译的*

- **Require Hook**  
第二种方法是使用require hook
```
$ npm install babel-register --save
```
按照官方的[文档](https://babeljs.io/docs/usage/require/)的说法只要将`require ("babel-register");` 加入到server.js的开头就可以直接运行`node server.js`来启动app, 但是我试了不行依旧报同样的错误，后来找到一个方式：
新建一个start.js文件
```
require('babel/register');
module.exports = require('./server.js');
```
然后运行来启动app
```
$ node start.js
```
*注意*  
上面两种方法你都需要先安装babel-presets-2015， babel-presets-react
```
$ npm install --save-dev babel-presets-2015 babel-presets-reat
```
然后创建一个`.babelrc`文件
```
{
  "presets": ["es2015", "react"]
}
```
如果你不想创建`.babelrc`文件那你就需要这样：
- babel-node
```
“script”: {
	"start": "./node_modules/babel-cli/bin/babel-node server.js"
}
```
- Require Hook  
```
require('babel/register')({
  presets: ["es2015", "react"]
});
module.exports = require('./server.js');
```

另外我们在react component中使用了`require('xxx.less')`,在server端render的时候不需要，而且会报错，所以我们需要跳过这些`require`, `start.js`应该改成：
```
require('babel/register')({
  presets: ["es2015", "react"]
});

// skip less files
require.extensions['.less'] = function(){return null};

module.exports = require('./server.js');
```
####Warnings: render() ...
```
 Warning: render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.
```
这是由于服务端渲染时你的ejs中有这样的代码：
```
<div id="appWrapper">
    <%- appHtml %>
</div>
```
删掉周围的空格
```
<div id="appWrapper"><%- appHtml %></div>
```

##一些开发工具
####Redux DevTools
[Chrome Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

####React performance tool
[Chrome Store](https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm)

####why-do-you-update
[Github](https://github.com/garbles/why-did-you-update)

```
$ npm install why-do-you-update --save-dev
```
```
import React from 'react'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}
```

该函数会在出现不必要渲染的时候在console中提醒你

####nodemon, forever, pm2
开发用nodemon
线上用forever, pm2
