import { combineReducers } from "redux";
import mascotasReducer from "./mascotasReducer";

export default combineReducers({
     mascotas: mascotasReducer
});