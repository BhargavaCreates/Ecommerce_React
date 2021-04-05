import { createSelector } from "reselect";

// Select User from  whole State
const selectUser = (state) => state.user;

// Create Selector for selecting Current User
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
