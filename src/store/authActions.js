import { createAsyncThunk } from '@reduxjs/toolkit'

const API_BASE = import.meta.env.VITE_API_BASE_URL

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if (!response.ok) {
      return rejectWithValue(data.message)
    }
    const token = data.body.token
    if (rememberMe) {
      localStorage.setItem('token', token)
    }
    return token
  }
)

export const fetchProfile = createAsyncThunk(
  'auth/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    const response = await fetch(`${API_BASE}/user/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    if (!response.ok) {
      return rejectWithValue(data.message)
    }
    return data.body
  }
)
