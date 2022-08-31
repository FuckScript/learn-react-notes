# Learn React

**React** 是一个用于构建用户界面的 JavaScript 库。[文档](https://zh-hans.reactjs.org/docs/getting-started.html)

## 学习 React 基础语法

### 一、组件编写方式

react  
react-dom  
babel

1. Hello React!

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello React</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- react -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>

    <!-- react-dom -->
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
      crossorigin
    ></script>

    <!-- babel -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <script type="text/babel">
      const root = ReactDOM.createRoot(document.querySelector('#root'))
      root.render(<h1>Hello World!</h1>)
    </script>
  </body>
</html>
```

2. Class Component

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World!'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Hello React!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>修改文本</button>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)
```

3. Function Hook Component

```jsx
function App() {
  const [message, setMessage] = React.useState('Hello World!')
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage('Hello React!')}>修改文本</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)
```

## JSX

JSX 是一种 JavaScript 的语法扩展, 也在很多地方称之为 JavaScript XML, 因为看起来就是一段 XML 语法; 它用于描述我们的 UI 界面, 并且其完全可以和 JavaScript 融合在一起使用; 它不同于 Vue 中的模块语法,你不需要专门学习模块语法中的一些指令(比如 v-for/v-if 等等)

### 一、注释

```jsx
function App() {
  return <div>{/* <ul></ul> */}</div>
}
```

### 二、插入内容

- 当变量是 Number、String、Array 是可以直接显示
- 当变量是 undefined、null、Boolean 内容为空
  - 如果希望显示，那么需要转换成字符串，如 toString()、String(变量)、变量+''
- (重要) Object 类型不能作为子元素显示
- 表达式
- 调用方法

### 三、属性绑定

```jsx
function App() {
  const title = 'H2 title'
  const isActive = true
  return (
    <div>
      {/* 基本属性的绑定，href、src等等同理 */}
      <div title={title}>这分明不是h2元素！！！</div>
      {/* class属性 */}
      <div className={'el-div' + isActive ? ' active' : ''}></div>
      {/* style属性 */}
      <div style={{ color: 'red', fontSize: '19px' }}></div>
    </div>
  )
}
```

### 四、事件绑定

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.increment1 = this.increment1.bind(this)
  }

  increment1() {
    this.setState({ count: this.state.count + 1 })
  }
  increment2 = () => {
    this.setState({ count: this.state.count + 1 })
  }
  increment3() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <div>当前计数: {this.state.count}</div>
        {/* this绑定方式一, bind绑定 */}
        <button onClick={this.increment1}>+1</button>
        {/* this绑定方式二, class fields */}
        <button onClick={this.increment2}>+1</button>
        {/* this绑定方式二, 箭头函数 */}
        <button onClick={() => this.increment3()}>+1</button>
      </div>
    )
  }
}
```

### 五、传递参数

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello Kiana'
    }
  }

  btnClick(e, name, age) {
    console.log(`event: ${e}, this: ${this}, name: ${name}, age: ${age}`)
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1.event参数的传递 */}
        <button onClick={this.btnClick.bind(this)}>点击</button>
        <button onClick={e => this.btnClick(e)}>点击</button>
        {/* 额外的参数传递 */}`
        <button onClick={this.btnClick.bind(this, 'Iyunyu', 19)}>点击</button>
        <button onClick={e => this.btnClick(e, 'Iyunyu', 19)}>点击</button>
      </div>
    )
  }
}
```

### 六、条件渲染

1. 条件判断语句

```jsx
render() {
  const { isReady } = this.state
  // if (isReady) return <div>准备开始比赛</div>
  // return <div>开始比赛</div>
}
```

2. 三元运算符

```jsx
render() {
  const { isReady } = this.state
  return <div>{isReady ? <div>准备开始比赛</div> : <div>开始比赛</div>}</div>
}
```

3. && 运算符

```jsx
render() {
  const { name } = this.state
  return <div>{!!name && 'Qiyana'}</div>
}
```

### 七、列表遍历

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students: [
        { id: 1, name: 'Zhoucan', score: 99 },
        { id: 2, name: 'Kiana', score: 98 },
        { id: 3, name: 'Qiyana', score: 199 }
      ]
    }
  }

  render() {
    const { students } = this.state

    return (
      <div>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <h4>学号: {student.id}</h4>
              <p>
                姓名: {student.name}, 考试分数: {student.score}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
```

### 八、babel 转换
