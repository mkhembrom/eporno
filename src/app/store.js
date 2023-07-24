import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { epornApi } from './(features)/epornSlice'
import pageReducer from './(features)/pageSlice'

export const store = configureStore({
    reducer: {
        currentPage: pageReducer,
        [epornApi.reducerPath]: epornApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epornApi.middleware),
})

setupListeners(store.dispatch)

