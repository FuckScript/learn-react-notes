import React, {PureComponent} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './style.css';

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        {
          name: '你不知道的JavaScript',
          price: 99,
        },
        {
          name: 'JS语言精粹',
          price: 88,
        },
        {
          name: 'JavaScript高级程序设计',
          price: 88,
        },
      ],
    };
  }

  addBook() {
    const newBooks = [...this.state.books];
    newBooks.push({name: 'React高级程序设计', price: 99});
    this.setState({books: newBooks});
  }

  removeBook(index) {
    const newBooks = [...this.state.books];
    newBooks.splice(index, 1);
    this.setState({books: newBooks});
  }

  render() {
    const {books} = this.state;
    return (
      <div>
        <button onClick={() => this.addBook()}>添加书籍</button>
        <TransitionGroup component="ul">
          {books.map((book, index) => (
            <CSSTransition key={book.name} classNames="book" timeout={500}>
              <li>
                <span>
                  {book.name} -{book.price}
                </span>
                <button onClick={() => this.removeBook(index)}>删除书籍</button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
