import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export { logout } from './authSlice'
export { login, fetchProfile, updateProfile } from './authActions'
export {
  selectToken,
  selectUser,
  selectAuthStatus,
  selectAuthError,
  selectIsLoggedIn,
} from './authSelectors'
