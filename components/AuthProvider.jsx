'use client'; // making this the client component, so the layout can be SSR
import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>{ children }</SessionProvider>
  )
}
export default AuthProvider
