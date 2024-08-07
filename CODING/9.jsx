//9. Create a React component that handles authentication and authorization.

import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

// Create a context for the authentication state
const AuthContext = createContext();

// Provide the authentication context to components
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
const useAuth = () => useContext(AuthContext);

// Protected route component
const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

// Login component
const Login = ({ location }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication
    if (username === 'user' && password === 'password') {
      login();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Home component (public)
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page.</p>
  </div>
);

// Dashboard component (protected)
const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard. You are logged in.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
