import axios from "axios";
import { Navigate } from "react-router-dom";
import { GET_CV } from "../types/cvTypes";

export const get_cv = () => async (dispatch) => {
  try {
    const res = await axios.get("/cv/getcv");

    dispatch({ type: GET_CV, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const add_cv = (data,navigate) => async (dispatch) => {
  try {
    await axios.post("/cv/addcv", data);
    dispatch(get_cv());
    navigate("/CVList")
  } catch (error) {
    console.log(error);
  }
};
export const delete_cv = (id) => async (dispatch) => {
  try {
    await axios.delete(`/cv/delcv/${id}`);
    dispatch(get_cv());
  } catch (error) {
    console.log(error);
  }
};
export const edit_cv = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/cv/editcv/${id}`, data);
    dispatch(get_cv());
  } catch (error) {
    console.log(error);
  }
};