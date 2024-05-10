import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
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
    },
  },
});

export const expModalState = state => state.experienceModalState.showModal
export const {showModalExp, hideModalExp} = modalExpSlice.actions
export default modalExpSlice.reducer