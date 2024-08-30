// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('token'); // Check if JWT exists

    return (
        <Route
            {...rest}
            element={
                isAuthenticated ? (
                    <Component {...rest} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
