import {/* Route, Routes,  */ NavLink, useRoutes} from 'react-router-dom';
import {withRouter} from './hoc';
import routes from './router';

// function qiyana(routes) {
//   return routes.map((route) => {
//     return (
//       <Route key={route.path} path={route.path} element={route.element}>
//         {route.children?.length && qiyana(route.children)}
//       </Route>
//     );
//   });
// }

function App(props) {
  const {navigate} = props.router;

  return (
    <div className="app">
      <div className="header">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/login">登录</NavLink>
        <NavLink to="/detail">商品</NavLink>
        <button onClick={() => navigate('/profile')}>个人</button>
      </div>
      <div className="content">
        {/* <Routes>{qiyana(routes)}</Routes> */}
        {useRoutes(routes)}
      </div>
    </div>
  );
}

export default withRouter(App);
