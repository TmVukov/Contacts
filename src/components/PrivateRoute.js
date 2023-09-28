import { Route, Redirect } from 'react-router-dom';
import { useStateContext } from '../utils/stateProvider';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { state: {currentUser} } = useStateContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
}
