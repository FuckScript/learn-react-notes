import React, {PureComponent} from 'react';
import {Route, Routes, NavLink, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import HomeBanner from './pages/HomeBanner';
import HomeProduce from './pages/HomeProduce';

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>Header-----</span>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/login">登录</NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}>
              <Route
                path="/home"
                element={<Navigate to="/home/banner" />}></Route>
              <Route path="/home/banner" element={<HomeBanner />}></Route>
              <Route path="/home/produce" element={<HomeProduce />}></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <div className="footer">Hooter-----</div>
      </div>
    );
  }
}

export default App;
