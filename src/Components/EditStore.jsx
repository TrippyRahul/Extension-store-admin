import { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getStore, editStore } from "../Service/api";

const initialValue = {
  storeName: "",
  storeUrl: "",
  affilatedStore: "",
  affilateLink: "",
  time: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditStore = () => {
  const [store, setStore] = useState(initialValue);
  const { storeName, storeUrl, affilatedStore, affilateLink, time } = store;
  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadStoreDetails();
  }, []);

  const loadStoreDetails = async () => {
    const response = await getStore(id);
    setStore(response.data);
  };

  const editStoreDetails = async () => {
    const response = await editStore(id, store);
    navigate("/all");
  };

  const onValueChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Typography variant="h4">Edit Store</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">storeName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="storeName"
          value={storeName}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">storeUrl</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="storeUrl"
          value={storeUrl}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">affilatedStore</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="affilatedStore"
          value={affilatedStore}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">affilateLink</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="affilateLink"
          value={affilateLink}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">time</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="time"
          value={time}
          id="my-input"
          
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editStoreDetails()}
        >
          Edit Store
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditStore;
