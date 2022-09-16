import {useNavigate, useParams} from 'react-router-dom';

function withRouter(Component) {
  return function (props) {
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{navigate, params}} />;
  };
}

export default withRouter;
