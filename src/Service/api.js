import axios from "axios";

const URL = "https://extensions-stores-admin.onrender.com";

/////////////////////// Admin /////////////////////////
export const regsiterUser = async (data) => {
  try {
    return await axios.post(`${URL}/register`, data);
  } catch (error) {
    console.log("Error while calling regsiter user api", error);
  }
};

export const loginUser = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login user api", error);
    alert(error.response.data.message);
  }
};

///////////////////////////Stores/////////////////////

//Add new Store
export const addStore = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while call add sotre api", error);
    alert(error.response.data.message);
  }
};

// Get all stores
export const getStores = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log(`Error while calling getStore API`, error);
  }
};

// Get store
export const getStore = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling getStore api`, error);
  }
};

//Edit Store
export const editStore = async (id, store) => {
  try {
    return await axios.put(`${URL}/${id}`, store);
  } catch (error) {
    console.log(`Error while  calling EditStore `, error);
  }
};

//Delete store
export const deleteStore = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(`Error while calling Delete store`, error);
  }
};

///////////////////////Switches////////////////////

// get all switches
export const getAddSwitches = async () => {
  try {
    return await axios.get(`${URL}/allSwitches`);
  } catch (error) {
    console.log(error.message);
  }
};

// Toggle switchOne
export const TgswitchOne = async () => {
  try {
    return await axios.put(`${URL}/switchOne`);
  } catch (error) {
    console.log(error);
  }
};
// toggle switch two
export const TgswitchTwo = async () => {
  try {
    return await axios.put(`${URL}/switchTwo`);
  } catch (error) {
    console.log(error);
  }
};
//Toggle switch three
export const TgswitchThree = async () => {
  try {
    return await axios.put(`${URL}/switchThree`);
  } catch (error) {
    console.log(error);
  }
};
//Toggle switch four
export const TgswitchFour = async () => {
  try {
    return await axios.put(`${URL}/switchFour`);
  } catch (error) {
    console.log(error);
  }
};
