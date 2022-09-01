/**
 * 2. 函数式组件
 *  函数式组件特点:
 *   没有生命周期, 会被更新并挂载, 但是没有生命周期函数
 *   this 关键字不能只想组件实例(因为没有组件实例)
 *   没有内部状态
 * 
 * @returns 返回值和类组件的render方法返回值是一致的
 */
export default function App() {
  return <div>App Component</div>;
}
