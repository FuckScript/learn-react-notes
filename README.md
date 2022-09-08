# 学习 React

用于构建用户界面的 JavaScript 库

## 第一个 React 程序

网页文件需要引入三个 JS 库文件

- react
- react-dom
- babel

如果网站使用了 JSX 语法就必须使用 babel 编译, 否则浏览器报语法错误.

```html
<body>
  <div id="root"></div>

  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>

  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>

  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <script type="text/babel">
    const root = ReactDOM.createRoot(document.querySelector('#root'))
    root.render(<h1>Hello World!</h1>)
  </script>
</body>
```

注意:

1. crossorigin 用于处理网站跨域问题.
2. 主要编写代码的 script 标签必须写上 `type="text/babel"`, 意思是当前 script 标签使用 babel 编译.

## 组件编写方式

#### 类组件

类组件必须继承自 `React.Component`,否则只是一个类, 而不是一个组件.

```jsx
class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return <div>App</div>
  }
}
```

#### 函数式组件

函数式组件不需要继承父类

```jsx
function App() {
  return <div>App</div>
}
```

类组件的 render 函数返回值和函数式组件的返回值可以如下:

- React 元素
- 数组和 fragments
- Portals
- 字符串和数值类型
- ...

## JSX 语法

JSX, 是一个 JavaScript 的语法扩展, 其中可以编写任何的 JS 代码.

#### 使用变量

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = { message: 'Hello Qiyana' }
  }

  render() {
    const { message } = this.state
    return <div>当前计数: {message}</div>
  }
}
```

注意:

1. "状态变量" 必须保存在 this.state 中.
2. 使用变量时需要使用大括号包含`{message}`.

#### 事件绑定

由于 React 源码中给 onClick 接收的函数显示绑定了 undefined, 因此在事件绑定时, 我们不能直接传入一个函数, 避免使用 this 时发生错误.

```jsx
// 绑定方式1: bind绑定
class App extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h4>当前计数: {this.state.count}</h4>
        <button onClick={this.increment}>+1</button>
      </div>
    )
  }
}
```

方式 1 的优势在于多次调用时不需要总是.bind(this), 但并不是最推荐的绑定方式.

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h4>当前计数: {this.state.count}</h4>
        <button onClick={this.increment}>+1</button>
      </div>
    )
  }
}
```

方式 2(class fields)利用不知道 ES 几的新特性, 原理在于箭头函数不能绑定 this, 而使我们在函数体中使用 this 时,回去往上层函数作用域寻找 this.

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h4>当前计数: {this.state.count}</h4>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }
}
```

方式 3 是最推荐的绑定方式, 它的优势在于传递参数特别方便.

#### 参数传递

当我们触发事件时, React 会回调我们传入的函数, 并给函数传入一个 event 参数. 我们可以在传入函数编写时使用形参接收并传递给真正执行的函数.

```jsx
class App extends React.Component {
  btnClick(event) {
    console.log(event)
  }

  render() {
    return (
      <div>
        <button onClick={e => this.btnClick(e)}>点击</button>
      </div>
    )
  }
}
```

当然我们也可以不适用 event 参数. 除了 event 参数之外, 当我们还有其他额外的参数, 可以直接传入真正执行的函数`btnClick`

```jsx
class App extends React.Component {
  btnClick(event, nickname) {
    console.log(event, nickname)
  }

  render() {
    return (
      <div>
        <button onClick={e => this.btnClick(e, 'Qiyana')}>点击</button>
      </div>
    )
  }
}
```

#### 条件渲染

React 中的条件渲染并没有相关的指令(如 vue 中的 v-if/v-else), 但是可以使用 JS 代码实现 v-if 的效果. 实现方式不止三种...(妈呀太灵活了)

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false,
      name: 'Iyunyu'
    }
  }

  render() {
    const { isReady, name } = this.state
    // 方式1: if语句
    // if (isReady) return <div>准备开始比赛</div>
    // return <div>开始比赛</div>

    // 方式2: 三元表达式
    // return <div>{isReady ? <div>准备开始比赛</div> : <div>开始比赛</div>}</div>

    // 方式3: && 逻辑与
    return <div>{name && 'Qiyana'}</div>
  }
}
```

#### 列表渲染

同样的, React 中并没有实现类似 v-for 的指令, 可以使用 for 循环或者`数组高阶函数 map` 实现.

```jsx
class App extends React.Component {
  constructor() {
    super()
    this.state = { students: ['Qiyana', 'Kiana'] }
  }

  render() {
    const { students } = this.state

    return (
      <ul>
        {students.map(student => (
          <li>{student}</li>
        ))}
      </ul>
    )
  }
}
```

## 脚手架(CLI)的使用

使用脚手架的目的是, 方便前端项目工程化.

1. 全局安装脚手架: create-react-app, `npm i create-react-app -g`.
2. 创建项目: `npx create-react-app project-name`

## 组件化

组件允许你将 UI 拆分为独立可复用的代码片段, 并对每个片段进行独立构思.

#### 类组件与函数式组件

代码请往顶上翻哦亲~

#### 生命周期

- constructor
- render
- componentDidMount
- componentDidUpdate
- componentWillUnmount
- shouldComponentUpdate
- getSnapshotBeforeUpdate

constructor 构造方法在组件创建实例时调用, render 函数在每一个重新渲染时调用

```jsx
class App extends Component {
  constructor() {
    super()
    this.state = { message: 'App Component' }
    console.log('-----constructor')
  }

  render() {
    const { message } = this.state
    return <>{message}</>
  }
}
```

componentDidMount 方法在组件挂载完成时回调, componentDidUpdate 方法在组件状态更新完成时回调,
componentWillUnmount 方法在组件即将卸载时回调.

```jsx
class HelloWorld extends Component {
  // ...
  componentDidMount() {
    console.log('-----componentDidMount')
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log(preProps, preState, snapshot)
    console.log('-----componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('-----componentWillUnmount')
  }
}
```

shouldComponentUpdate 用于 SCU 优化(性能优化), 通过返回一个布尔值来决定组件是否重新渲染

```jsx
class HelloWorld extends Component {
  // ...
  shouldComponentUpdate(newProps, nextState) {
    // true or false
    return true
  }
}
```

getSnapshotBeforeUpdate 用于组件渲染前将 props/state 保存起来, 可以传给 componentDidUpdate 第三个形参

```jsx
class HelloWorld extends Component {
  // ...
  getSnapshotBeforeUpdate() {
    return { nickname: 'Qiyana' }
  }
}
```

#### 组件嵌套

当一个应用程序过大时, 如果将所有的代码都写在一个组件时, 不可避免的此组件会过于臃肿, 因此我们可以将应用划分为一个个子组件, 可以让组件更好的开发与维护.

```jsx
class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Profile />
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return <div>Main Component</div>
  }
}

function Profile() {
  return <div>Profile Component</div>
}
```

#### 组件通信

**父组件给子组件传递数据.** 在创建子组件实例时, 传入的属性会保存在子组件的`this.props`中.

```jsx
class App extends Component {
  constructor() {
    super()
    this.state = { nickname: 'Qiyana' }
  }

  render() {
    const nickname = this.state
    return (
      <div>
        <Hello nickname={nickname} />
      </div>
    )
  }
}

class Hello extends Component {
  render() {
    const { nickname } = this.props
    return <div>昵称: {nickname}</div>
  }
}
```

**子组件给父组件传递数据**, 父组件传递函数给子组件, 子组件发生事件点击时, 可以调用 this.props 中父组件传递过来的函数并传入参数. 这就是子组件给父组件传递数据

注意: 父组件给子组件传递的函数也需要用箭头函数包裹, 不然子组件调用时会隐式绑定的给函数绑定 props 为 this. 从而发生错误.

```jsx
class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  changeCount(count) {
    this.setState({
      count: this.state.count + count
    })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h4>当前计数: {count}</h4>
        <BtnComponent changeCount={count => this.changeCount(count)} />
      </div>
    )
  }
}

class BtnComponent extends Component {
  changeCount(count) {
    this.props.changeCount(count)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeCount(-1)}>-1</button>
        <button onClick={() => this.changeCount(1)}>+1</button>
      </div>
    )
  }
}
```

**非父子组件通信**, 意思是祖孙之间的数据传递.

1. 创建上下文`ThemeContext`
2. 使用 `<ThemeContext.Provider>` 将根组件包裹, 并将需要共享的数据转入 value 属性(必须是 value 属性)
3. 子孙组件使用.

   - 类组件: `HomeInfo.contextType = ThemeContext`
   - 函数式组件: ` <ThemeContext.Consumer>` 包裹并传入一个函数

4. 类组件在`this.context`中获取, 函数组件在 value 参数中获取

```jsx
import React, { Component } from 'react'
const ThemeContext = React.createContext({
  /* ... */
})

export default class App extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: 'red' }}>
          <Home />
        </ThemeContext.Provider>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <HomeInfo />
        <HomeBanner />
      </div>
    )
  }
}

class HomeInfo extends Component {
  render() {
    const { color } = this.context

    return <div style={{ color: color }}>HomeInfo Component</div>
  }
}

HomeInfo.contextType = ThemeContext

function HomeBanner() {
  return (
    <div>
      <ThemeContext.Consumer>
        {value => <span style={{ color: value.color }}>HomeBanner Component</span>}
      </ThemeContext.Consumer>
    </div>
  )
}
```

#### 类型验证

当项目使用 TS 时, 我们又需要给我们传入子组件的函数添加类型验证, 这样可以避免后人维护时发生不可预知的错误.

```jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
      <div>
        <Main message={123} />
      </div>
    )
  }
}

class Main extends Component {
  render() {
    const { message } = this.props
    return <h4>{message}</h4>
  }
}

// 类型限制
Main.propTypes = {
  // 必传: PropTypes.number.isRequired
  message: PropTypes.number
}

// 默认值
Main.defaultProps = {
  message: 19
}
```

#### 插槽

React 中并没有插槽的概念, 但是却可以实现插槽的效果.

**默认插槽效果**

当在子组件双标签中传入的元素为 1 个时, children 类型是一个 React 元素, 当传入的元素 >=2 时, children 的类型是数组.

```jsx
class App extends Component {
  render() {
    return (
      <div>
        <Hello>
          <h2>你好呀, 琪亚娜!</h2>
          <h4>你好呀, 琪亚娜!</h4>
          <h5>你好呀, 琪亚娜!</h5>
        </Hello>
      </div>
    )
  }
}

class Hello extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        {children[0]}
        {children[1]}
        {children[2]}
      </div>
    )
  }
}
```

**具名插槽效果**

我们不仅可以子组件传递一些数据, 也可以传递元素

```jsx
class App extends Component {
  render() {
    return (
      <div>
        <Hello leftSlot={<button>按钮</button>} />
      </div>
    )
  }
}

class Hello extends Component {
  render() {
    const { leftSlot } = this.props
    return <div>{leftSlot}</div>
  }
}
```

**作用域插槽效果**

当给子组件传递一组数据时, 我们需要由自己决定渲染元素, 但是数据却要通过子组件传递, 作用域插槽可以实现

```jsx
import { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = { titles: ['流行', '新歌', '精选'] }
  }

  render() {
    const { titles } = this.state
    return (
      <div>
        <Hello titles={titles} renderListEl={title => <button>{title}</button>} />
      </div>
    )
  }
}

class Hello extends Component {
  render() {
    const { titles, renderListEl } = this.props

    return (
      <div>
        <ul>
          {titles.map(title => {
            return <li key={title}>{renderListEl(title)}</li>
          })}
        </ul>
      </div>
    )
  }
}
```

#### setState

**写法**

```jsx
class App extends Component {
  constructor() {
    super()
    this.state = { message: 'Qiyana' }
  }

  changeText() {
    // 写法1
    this.setState({ message: 'Kiana' })

    // 写法2
    this.setState((state, props) => ({ message: 'Kiana' }))

    // 写法3: 1 和 2 的基础上多传入一个参数(函数)
    this.setState({ message: 'Kiana' }, () => {
      // 当 前一个 state 的值和 后一个 state 的值合并完成之后会调用这个函数
    })
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <h4>{message}</h4>
        <button onClick={() => this.changeText()}>修改文本</button>
      </div>
    )
  }
}
```

setState 的设计是: **异步执行**, 在 React 18 之前, 当 setState 执行在 setTimeout、promise.then、document 事件等之中的回调, setState 是同步调用的. 而 React 18 之后, setState 默认都是异步调用, 即使是在上面所提到的函数中回调, 依旧是异步的调用.

为什么要设计成异步呢? 有以下优势:

1. setState 设计为异步, 可以显著的提升性能;
   - 如果每次调用 setState 都进行一次更新, 那么意味着 render 函数会被频繁调用, 界面重新渲染, 这样效率是很低的
   - 最好的办法应该是获取到多个更新，之后进行批量更新；
2. 如果同步更新了 state, 但是还没有执行 render 函数, 那么 state 和 props 不能保持同步;

#### SCU 优化

当我们调用组件中的 this.setState 方法时, 其组件的 render 方法和其子组件的 render 方法都会重新调用, 会造成性能浪费.

我们可以手动的使用 shouldComponentUpdate, 简称 SCU, 进行组件 render 方法是否需要重新执行的优化.

```jsx
class App extends Component {
  constructor() {
    super()
    this.state = { message: 'Qiyana' }
  }

  changeText() {
    this.setState({ message: 'Qiyana' })
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <h4>{message}</h4>
        <button onClick={() => this.changeText()}>修改文本</button>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState || this.props !== nextProps) {
      return true
    } else {
      return false
    }
  }
}
```

但是每一个组件我都需要自己来写 SCU 优化, 那我开发效率岂不是慢下来了, 而且也会有很多重复的代码.

不用的, 我们只需要让类组件继承自 `PureComponent`, 函数式组件使用 `memo` 函数包裹就好.

```jsx
import { PureComponent, memo } from 'react'

class App extends PureComponent {
  // ...
}

const Hello = memo(function () {
  // ...
})
```

PureComponent 和 memo 内部会对两个 state/props 做浅层比较, 如果对象引用不同直接返回 true, 也就是重新渲染.

建议每一个类组件都继承自 PureComponent, 每一个函数式组件都是用 memo 包裹.

#### 数据不可变

当我们要修改 this.state 中的复杂类型数据时, 不能直接对这个对象作修改. 原因在于我们类组件继承自 PureComponent 时, 数据改变调用 setState 时, 通过浅层比较发现前一个 state 和后一个 state 是用一个对象引用时, render 函数将不重新执行.

```jsx
class App extends PureComponent {
  constructor() {
    super()
    this.state = { students: [{ id: 1, name: 'Qiyana' }] }
  }

  insertStudent() {
    const stu = { id: 5, name: 'yaya' }
    // 不能重新执行render方法
    // this.state.students.push(stu);
    // this.setState({students: this.state.students});

    // 需要换一个对象引用
    const newStudents = [...this.state.students]
    newStudents.push(stu)
    this.setState({ students: newStudents })
  }

  render() {
    const { students } = this.state
    return (
      <div>
        {/* ul>li */}
        <button onClick={() => this.insertStudent()}>添加学生</button>
      </div>
    )
  }
}
```

#### ref

React 中不推荐我们直接使用 document 获取 DOM 元素, 某些特殊场景我们需要获取元素, 可以使用`createRef`函数创建一个对象并绑定在那个元素上.

**获取 DOM 元素**

```jsx
import { PureComponent, createRef } from 'react'

class App extends PureComponent {
  constructor() {
    super()
    this.elRef = createRef()
  }

  componentDidMount() {
    console.log(this.elRef.current)
  }

  render() {
    return <div ref={this.elRef}>App Component</div>
  }
}
```

**获取类组件实例对象**

```jsx
import { PureComponent, createRef } from 'react'

class App extends PureComponent {
  constructor() {
    super()
    this.componentRef = createRef()
  }

  componentDidMount() {
    this.logMessage()
  }

  render() {
    return (
      <div>
        <Hello ref={this.componentRef} />
      </div>
    )
  }
}

class Hello extends PureComponent {
  logMessage() {
    console.log('Hello Qiyana')
  }

  render() {
    return <div>Hello</div>
  }
}
```

**获取函数式组件**

普通的函数式组件并不能接收到 ref, 我们只能通过 forwardRef 函数转发 ref 给这个函数式组件上的某一个元素.

```jsx
import { PureComponent, createRef, forwardRef } from 'react'

class App extends PureComponent {
  constructor() {
    super()
    this.componentRef = createRef()
  }

  render() {
    return (
      <div>
        <Hello ref={this.componentRef} />
      </div>
    )
  }
}

const Hello = forwardRef(function (props, ref) {
  return <div ref={ref}>Hello</div>
})
```

#### 受控组件与非受控组件

- 一个表单, 数据是由 React 管理的就是: 受控组件
- 当表单数据是 DOM 节点管理的, 就是: 非受控组件

```jsx
class App extends PureComponent {
  constructor() {
    super()
    this.state = { inputValue: '' }
  }

  changeValue(event) {
    this.setState({ inputValue: event.target.vlaue })
  }

  render() {
    const { inputValue } = this.state

    return (
      <div>
        {/* 受控组件 */}
        <h4>受控组件的值: {inputValue}</h4>
        <input type="text" value={inputValue} onChange={e => this.changeValue(e)} />

        {/* 非受控组件 */}
        <input type="text" />
      </div>
    )
  }
}
```

**表单控件**

chenkbox

```jsx
class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isAgree: false,
      hobbies: [
        { value: 'sing', text: '唱', isChecked: false },
        { value: 'dance', text: '跳', isChecked: false },
        { value: 'rap', text: 'rap', isChecked: false }
      ]
    }
  }

  handleSubmitClick(event) {
    event.preventDefault()
  }

  handleAgreeChange(event) {
    this.setState({ isAgree: event.target.checked })
  }

  handleHobbiesChange(event, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({ hobbies })
  }

  render() {
    const { isAgree, hobbies } = this.state

    return (
      <form onSubmit={e => this.handleSubmitClick(e)}>
        {/* 单选 */}
        <label htmlFor="agree">
          <input
            id="agree"
            type="checkbox"
            checked={isAgree}
            onChange={e => this.handleAgreeChange(e)}
          />
          同意协议
        </label>
        {/* 多选 */}
        {hobbies.map((item, index) => (
          <label htmlFor={item.value} key={item.value}>
            <input
              type="checkbox"
              id={item.value}
              checked={item.isChecked}
              onChange={e => this.handleHobbiesChange(e, index)}
            />
            <span>{item.text}</span>
          </label>
        ))}
        <button type="submit">注册</button>
      </form>
    )
  }
}
```

select

```jsx
class App extends PureComponent {
  constructor() {
    super()
    this.state = { fruit: ['orange'] }
  }

  handleSubmitClick(event) {
    event.preventDefault()
  }

  handleFruitChange(event) {
    const options = Array.from(event.target.selectedOptions)
    const values = options.map(item => item.value)
    this.setState({ fruit: values })
  }

  render() {
    const { fruit } = this.state

    return (
      <form onSubmit={e => this.handleSubmitClick(e)}>
        <select value={fruit} onChange={e => this.handleFruitChange(e)} multiple>
          <option value="apple">苹果</option>
          <option value="orange">橘子</option>
          <option value="banana">香蕉</option>
        </select>

        <button type="submit">注册</button>
      </form>
    )
  }
}
```

**非受控组件应用**

```jsx
class App extends PureComponent {
  constructor() {
    super()
    this.state = { intro: 'Qiyana' }

    this.inputRef = createRef()
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.inputRef.current.value)
  }

  render() {
    const { intro } = this.state

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={this.inputRef} defaultValue={intro} />
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}
```

#### 高阶组件

高阶组件的作用类似中间件, 用于扩展组件以及减少重复的代码

- 高阶组件本身不是一个组件, 而是一个函数
- 特点:
  - 接收一个组件作为它的参数
  - 返回一个新的组件

**props 增强**

```jsx
function enhancedUserInfo(OriginComponent) {
  return class extends PureComponent {
    constructor() {
      super()
      this.state = {
        userInfo: { name: 'Qiyana', level: 99 }
      }
    }

    render() {
      return <OriginComponent {...this.props} {...this.state.userInfo} />
    }
  }
}

const Hello = enhancedUserInfo(function (props) {
  return <h4>Hello: {props.name}</h4>
})

class App extends PureComponent {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}
```

Context 共享

```jsx
import React, { PureComponent, createContext } from 'react'
const ThemeContext = createContext()

function withTheme(OriginComponent) {
  return function (props) {
    return (
      <ThemeContext.Consumer>
        {value => <OriginComponent {...value} {...props} />}
      </ThemeContext.Consumer>
    )
  }
}

const Hello = withTheme(function (props) {
  return <h4 style={{ color: props.color }}>Hello Qiyana</h4>
})

class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: 'red' }}>
          <Hello />
        </ThemeContext.Provider>
      </div>
    )
  }
}
```

生命周期应用

```jsx
function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime()
    }

    componentDidMount() {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime
      console.log(`当前${OriginComponent.name}页面花费了${interval}ms渲染完成!`)
    }

    render() {
      return <OriginComponent {...this.props} />
    }
  }
}

const Detail = logRenderTime(function Detail() {
  return <div>Detail Component</div>
})

class App extends PureComponent {
  render() {
    return (
      <div>
        <Detail />
      </div>
    )
  }
}
```

当然, HOC 也有一些缺点

- 需要在原组件上进行包裹或者嵌套, 如果大量使用 HOC, 将会产生非常多的嵌套, 这让调试变得非常困难
- HOC 可以劫持 props, 在不遵守约定的情况下也可能造成冲突

#### Portals 的应用

Portals 的作用是将 React 元素挂载到其他的根元素上.

```jsx
import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App Component</h2>
        <Modal>
          <h4>我是标题</h4>
          <p>我是文本!</p>
        </Modal>
      </div>
    )
  }
}

class Modal extends PureComponent {
  render() {
    return createPortal(this.props.children, document.querySelector('#modal'))
  }
}
```

#### Fragment 的使用

当我们元素多的时候需要给它们包裹一个根元素, 但有时候并不想要多一重包裹, 可以使用 Fragment 标签包裹

```jsx
import React, { PureComponent, Fragment } from 'react'

class App extends PureComponent {
  render() {
    return (
      // <Fragment>
      //   <h4>App Component</h4>
      //   <p>我是组件</p>
      // </Fragment>

      <>
        <h4>App Component</h4>
        <p>我是组件</p>
      </>
    )
  }
}
```

#### 严格模式

StrictMode 是一个用来突出显示应用程序中潜在的问题的工具. 仅在开发模式下运行, 它们不会影响生产构建.

```jsx
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

严格模式, 检测什么?

- 识别不安全的生命周期
- 使用过时的 refAPI
- 检查意外的副作用

#### 动画

在开发中, 我们想要给一个组件的显示和隐藏某种过渡动画, 可以很好的增加用户体验

- 安装: `npm install react-transition-group --save`

```css
/* style.css */
.qiyana-appear,
.qiyana-enter {
  transform: translateX(-150px);
}

.qiyana-appear-active,
.qiyana-enter-active {
  transform: translateX(0);
  transition: transform 1s ease;
}

.qiyana-exit {
  transform: translateX(0);
}

.qiyana-exit-active {
  transform: translateX(-150px);
  transition: transform 1s ease;
}
```

**CSSTransition**

```jsx
import { CSSTransition } from 'react-transition-group'
import './style.css'

class App extends PureComponent {
  constructor() {
    super()
    this.state = { isShow: true }
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <button onClick={() => this.setState({ isShow: !isShow })}>显示/隐藏</button>
        <CSSTransition in={isShow} unmountOnExit={true} classNames="qiyana" timeout={1000} appear>
          <h4>Hello, Mengjiang</h4>
        </CSSTransition>
      </div>
    )
  }
}
```

**SwitchTransition**

```jsx
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './style.css'

class App extends PureComponent {
  constructor() {
    super()
    this.state = { isLogin: true }
  }

  render() {
    const { isLogin } = this.state
    return (
      <SwitchTransition mode="out-in">
        <CSSTransition key={isLogin ? 'exit' : 'login'} classNames="login" timeout={500}>
          <button onClick={() => this.setState({ isLogin: !isLogin })}>
            {isLogin ? '退出' : '登录'}
          </button>
        </CSSTransition>
      </SwitchTransition>
    )
  }
}
```

**TransitionGroup**

```jsx
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './style.css'

class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        {
          id: 111,
          name: '你不知道的JavaScript',
          price: 99
        }
        // ...
      ]
    }
  }

  addBook() {
    const newBooks = [...this.state.books]
    newBooks.push({ id: new Date().getTime(), name: 'React高级程序设计', price: 99 })
    this.setState({ books: newBooks })
  }

  removeBook(index) {
    const newBooks = [...this.state.books]
    newBooks.splice(index, 1)
    this.setState({ books: newBooks })
  }

  render() {
    const { books } = this.state
    return (
      <div>
        <button onClick={() => this.addBook()}>添加书籍</button>
        <TransitionGroup component="ul">
          {books.map((book, index) => (
            <CSSTransition key={book.id} classNames="book" timeout={500}>
              <li>
                <span>{book.name} -{book.price}</span>
                <button onClick={() => this.removeBook(index)}>删除书籍</button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }
}
```
