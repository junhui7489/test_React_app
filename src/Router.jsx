import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import HomePage from './pages/HomePage';
import MyListPage from './pages/MyListPage';
import ErrorBoundary from './pages/ErrorBoundary';
import UserProvider from './GlobalContext';


const Router = () => (
    <ErrorBoundary>
    <UserProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/log_in" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot_password" element={<ForgotPasswordPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="my_list" element={<MyListPage />} />
        </Routes>
    </BrowserRouter>
    </UserProvider>
    </ErrorBoundary>
);

export default Router;