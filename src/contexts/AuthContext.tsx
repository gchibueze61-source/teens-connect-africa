import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';import type { Role, UserProfile } from '../types';
type AuthState={user:UserProfile|null; role:Role; loginDemo:(role:Role)=>void; logout:()=>void};
const AuthContext=createContext<AuthState|null>(null);
export function AuthProvider({children}:{children:ReactNode}){const [user,setUser]=useState<UserProfile|null>(null);const value=useMemo(()=>({user,role:user?.role??'public',loginDemo:(role:Role)=>setUser({uid:'demo',email:`${role}@teensconnect.africa`,displayName:`Demo ${role}`,role,approved:role==='volunteer'||role==='founder',createdAt:new Date().toISOString()}),logout:()=>setUser(null)}),[user]);return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>}
export function useAuth(){const ctx=useContext(AuthContext);if(!ctx)throw new Error('useAuth must be used within AuthProvider');return ctx}
