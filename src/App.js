import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/LoginPage";
import HomePage from './pages/HomePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import RegisterPage from './pages/RegisterPage';
import MyListPage from './pages/MyListPage';

function App() {
  return (
    <div className="App">
        <LoginPage/>
          <HomePage/>
          <ForgotPasswordPage/>
          <RegisterPage/>
          <MyListPage/>
    </div>
  );
}

export default App;
