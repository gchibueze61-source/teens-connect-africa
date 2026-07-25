import { Navigate, Outlet } from 'react-router-dom';import type { Role } from '../types';import { useAuth } from '../contexts/AuthContext';
export function ProtectedRoute({allow}:{allow:Role[]}){const {role}=useAuth();return allow.includes(role)?<Outlet/>:<Navigate to="/login" replace/>}
