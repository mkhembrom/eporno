import { createSlice } from "@reduxjs/toolkit"

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        currentPage: 1,
        currentKeyword: "mom"
    },
    reducers: {
        nextPage(state) {
            if (state.currentPage >= 1) {
                state.currentPage += 1;
            }
        },
        prevPage(state) {
            if (state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        pageJump(state, action) {
            state.currentPage = parseInt(action.payload);
        },
        querySearch(state, action) {
            state.currentPage = 1;
            state.currentKeyword = action.payload.toLowerCase();
        }
    },
})

export const { nextPage, prevPage, querySearch, pageJump } = pageSlice.actions
export default pageSlice.reducer

