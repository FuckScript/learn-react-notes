import React, {PureComponent} from 'react';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      students: [
        {id: 1, name: 'Qiyana'},
        {id: 2, name: 'yayi'},
        {id: 3, name: 'aili'},
        {id: 4, name: 'fuhua'},
      ],
    };
  }

  insertStudent() {
    const stu = {id: 5, name: 'yaya'};
    // 1. 继承自 PushComponent 中, 以下修改方式并不能顺利重新渲染render函数
    // this.state.students.push(stu);
    // this.setState({students: this.state.students});

    // 2. 原因在于 PushComponent 会对数据进行浅层比较, 当引用一致时不更新
    const newStudents = [...this.state.students];
    newStudents.push(stu);
    this.setState({students: newStudents});
  }

  render() {
    const {students} = this.state;
    return (
      <div>
        <h4>学生列表</h4>
        <ul>
          {students.map((stu) => {
            return (
              <li key={stu.id}>
                <span>学生: {stu.name}</span>
              </li>
            );
          })}
        </ul>
        <button onClick={() => this.insertStudent()}>添加学生</button>
      </div>
    );
  }
}

export default App;
