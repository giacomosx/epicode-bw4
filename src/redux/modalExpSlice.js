import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  type: 'experiences'
};

const modalExpSlice = createSlice({
  name: "modalExperience",
  initialState,
  reducers: {
    showModalExp: (state) => {
      state.showModal = true;
    },
    hideModalExp: (state) => {
      state.showModal = false;
      state.type = 'experiences'
    },
    setProfileState: (state) => {
      state.type = 'profile'
    }
  },
});

export const expModalState = state => state.experienceModalState.showModal
export const expModalType = state => state.experienceModalState.type
export const {showModalExp, hideModalExp, setProfileState} = modalExpSlice.actions
export default modalExpSlice.reducer