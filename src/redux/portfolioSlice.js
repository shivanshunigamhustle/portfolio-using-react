import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'cyberpunk', // 'cyberpunk' | 'cosmos' | 'minimal'
  soundEnabled: false,
  activeSection: 'home',
  selectedProject: null, // Holds project details when a modal is open
  formStatus: 'idle', // 'idle' | 'submitting' | 'success' | 'error'
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleSound: (state) => {
      state.soundEnabled = !state.soundEnabled;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    setFormStatus: (state, action) => {
      state.formStatus = action.payload;
    },
  },
});

export const {
  setTheme,
  toggleSound,
  setActiveSection,
  setSelectedProject,
  setFormStatus,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
