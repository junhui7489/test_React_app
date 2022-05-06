import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage'


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/log_in" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot_password" element={<ForgotPasswordPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;