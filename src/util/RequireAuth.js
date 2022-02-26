import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useUser } from "../context/auth";


export default function RequireAuth({ children }) {
    const { user } = useUser();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />;
    }

    return children;
}