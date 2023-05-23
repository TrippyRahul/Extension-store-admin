import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { addStore } from "../Service/api";
import { useNavigate } from "react-router-dom";

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
        margin-top: 20px;
`;

const AddStore = () => {
  const [store, setStore] = useState(initialValue);
  const { storeName, storeUrl, affilatedStore, affilateLink, time } = store;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const addStoreDetails = async () => {
    try {
      const response = await addStore(store);
      if (response.status === 201) {
        alert("store added successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add Store</Typography>
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
        <InputLabel htmlFor="my-input">
          Note:24 hours is 1Day and 0 is not allowed
        </InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="time"
          value={time}
          id="my-input"
          placeholder="Note:24hours is 1D and 0 is not Allowed"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addStoreDetails()}
        >
          Add Store
        </Button>
      </FormControl>
      <h2>Store example</h2>
      <span>storeName: ebay.com,</span>
      <span> storeUrl: https://www.ebay.com/</span>
      <span>
        affilatedStore:
        https://www.ebay.com/?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338973503&customid=&toolid=10001&mkevt=1
      </span>
      <span> affilateLink: https://newzproz.com/</span>
      <span> time: 2 * 60 * 1000 (time should be in millisecond)</span>
    </Container>
  );
};

export default AddStore;
