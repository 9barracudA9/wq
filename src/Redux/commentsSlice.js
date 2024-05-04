import { createSlice } from '@reduxjs/toolkit';

 const commentsSlice = createSlice({
		name: 'toolkit',
		initialState: {
			isLoaded: false,
			comments: [],
			selected: [],
			modalActive: false,
		},
		reducers: {
			pushComments(state, action) {
				state.comments = action.payload;
			},
			loadedToggler(state) {
				state.isLoaded = true;
			},
			selectComments(state, action) {
				const isCommentExist = state.selected.find(comment => comment.id === action.payload.id);
				if (isCommentExist) {
					state.selected = state.selected.filter(comment => comment.id !== action.payload.id);
				} else {
					state.selected = [...state.selected, action.payload];
				}
			},
			openModal(state) {
				state.modalActive = !state.modalActive
			},
		},
 });

export default commentsSlice.reducer;
export const { pushComments, loadedToggler, selectComments,openModal } = commentsSlice.actions;
