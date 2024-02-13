import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from './components/LandingPage';
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser ]=useState(false)
  const currentUser=((state) => state.session.user)
  useEffect(() => {
    if (user) {
      dispatch(authenticate(user?.email)).then(() => setIsLoaded(true));
    }else {
      dispatch(authenticate()).then(() => setIsLoaded(true));
    }

  }, [dispatch, user]);



  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
