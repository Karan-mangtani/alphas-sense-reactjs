import React, { Suspense, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import { getLogin } from "../../helpers";
const Login = React.lazy(() => import('../login'));
const Home = React.lazy(() => import('../home'));

export default function Layout(props) {
  let history = useHistory();
  const isLogin = getLogin();

  useEffect(() => {
    isLogin ? history.push('/home') : history.push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin])

  return (<div className="root">
    <Switch>
      <Route exact path='/login' render={() => <Suspense fallback="" ><Login /></Suspense>} />
      <Route exact path='/home' render={() => <Suspense fallback="" ><Home /></Suspense>} />
    </Switch>
  </div>)
}