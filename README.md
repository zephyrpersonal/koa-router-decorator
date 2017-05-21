# INSTALL
```bash
  npm i koa-routermap-decorator -S
``` 
For decorator is still in ES7 proposal. 
So you should use this package with compilers such as Babel

# USAGE

```js
  // ES6 module
  import {router,Route,RouteMethods} from 'koa-routermap-decorator'

  // CommonJS
  const {router,Route,RouteMethods} = require('koa-routermap-decorator')

  // setup router on app's initialization
  await router(app,options)

  // you may map controller to route like this

  class User {

    @Router('/user',RouteMethods.GET)
    async getUser(ctx){
      ctx.body = {name:'zephyr'}
    }
  }

```  
  
