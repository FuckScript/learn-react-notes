# React 项目

回顾前面 React 所学内容

## webpack 配置

#### 配置别名

- **安装 craco** `npm install @craco/craco@alpha -D`
- **配置 craco.config.js**

```js
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
```

- **配置 package.json**

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```

#### 配置预处理器

略...

#### JS 配置

**jsconfig.json**

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": ["src/*"]
    },
    "jsx": "preserve",
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"]
  }
}
```

## 样式重置

#### normalize.css

安装`npm install normalize.css`, 入口文件引入:`import 'normalize.css'`

#### normalize.css

配置 assets/css/reset.css, 入口文件引入: `import '@/assets/css/reset.css'`

## React 全家桶

#### 路由

安装`npm install react-router-dom`
