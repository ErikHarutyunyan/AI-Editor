import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import TokenService from "../../../services/token.service";
import axiosInstance from "../../../services/axiosInstance";
import { API_ENDPOINT, auth } from "../../../api";

export const userLogin = createAsyncThunk(
  "user/login",

  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${API_ENDPOINT}${auth.login}`,
        { email, password },
        config
      );
      // store user's token in local storage
      // localStorage.setItem("userToken", data.tokens);
      // TokenService.setUser(data);

      return data;
    } catch (error) {
      console.log("error :", error);
      debugger;
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",

  async ({ first_name, last_name, email, password }, { rejectWithValue }) => {
    debugger;
    console.log("firstName :", first_name);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `${API_ENDPOINT}${auth.register}`,
        { first_name, last_name, email, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState();

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };

      const { data } = await axiosInstance.get(`/api/user/profile`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
