export const selectToken = (state) => state.auth.token
export const selectUser = (state) => state.auth.user
export const selectAuthStatus = (state) => state.auth.status
export const selectAuthError = (state) => state.auth.error
export const selectIsLoggedIn = (state) => Boolean(state.auth.token)
