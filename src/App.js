import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProtectedRoute from './components/UI/ProtectedRoute';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>

        <ProtectedRoute path='/add'>
          <AddPage />
        </ProtectedRoute>

        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
