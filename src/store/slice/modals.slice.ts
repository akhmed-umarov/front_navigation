import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    navbar: false,
    filterMob: false, 
    searchMob: false, 
}

const ModalsSlice = createSlice({ 
    name: 'modals', 
    initialState, 
    reducers: { 
    toggleNavbar: (state)=> {state.navbar = !state.navbar ; state.filterMob = false ; state.searchMob = false}, 
    toggleFilterMob: (state)=> {state.filterMob = !state.filterMob ; state.navbar = false ; state.searchMob = false}, 
    toggleSearchMob: (state)=> {state.searchMob = !state.searchMob ; state.navbar = false ; state.filterMob = false}, 
    closeEvery: (state)=> {state.searchMob = false ; state.navbar = false ; state.filterMob = false}
    }
})


export default ModalsSlice.reducer

export const {toggleNavbar , toggleFilterMob , toggleSearchMob , closeEvery} = ModalsSlice.actions;