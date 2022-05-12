import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';
import ErrorBoundary from './pages/ErrorBoundary';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <LoginPage/>
        <HomePage/>
        <ForgotPasswordPage/>
        <RegisterPage/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
