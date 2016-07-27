##一些问题
**Warnings**
```
 Warning: render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.
```
这是由于服务端渲染时你的ejs中有这样的代码：
```
<div id="appWrapper">
    <%- markup %>
</div>
```
删掉周围的空格
```
<div id="appWrapper"><%- markup %></div>
```

##一些开发工具
**Redux DevTools**
[Chrome Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

**React performance tool**
[Chrome Store](https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm)

**why-do-you-update**
[Github](https://github.com/garbles/why-did-you-update)

```
npm install why-do-you-update --save-dev
```
```
import React from 'react'

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')
  whyDidYouUpdate(React)
}
```

该函数会在出现不必要渲染的时候在console中提醒你