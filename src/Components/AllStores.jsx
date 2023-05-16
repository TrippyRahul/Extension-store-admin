import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@mui/material";
import { getStores, deleteStore } from "../Service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 100%;
  margin: 50px 0 0 0px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
    width: 14.28%; /* set each TableCell's width to 14.28% */
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
    width: 14.28%; /* set each TableCell's width to 14.28% */
  }
`;

const TableContainer = styled(Paper)`
  width: 100%;
  overflow-x: auto; /* add horizontal scroll bar when table width exceeds container width */
`;

const AllStores = () => {
  const [stores, setStores] = useState([]);
  const [isReadMore, setIsReadMore] = useState(false);
  const [storeId, setStoreId] = useState();
  const [storeIdUrl, setStoreIdUrl] = useState();
  const [isReadmoreUrl, setIsReadmoreUrl] = useState(false);
  const toggleReadMore = (id) => {
    setIsReadMore(true);
    setStoreId(id);
  };
  const toggleReadMoreUrl = (id) => {
    setIsReadmoreUrl(true);
    setStoreIdUrl(id);
  };

  useEffect(() => {
    getAllStores();
  }, []);

  const deleteStoreData = async (id) => {
    await deleteStore(id);
    getAllStores();
  };

  const getAllStores = async () => {
    let response = await getStores();
    setStores(response.data);
  };

  console.log(storeId);
  return (
    <TableContainer>
      <div className="total-store">
        {<h1 style={{ paddingLeft: "10px" }}>Total Stores: {stores.length}</h1>}
      </div>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>StoreName</TableCell>
            <TableCell>storeUrl</TableCell>
            <TableCell>affilatedstore</TableCell>
            <TableCell>affilatedLink</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>actions</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {stores.map((store, index) => (
            <TRow key={store._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{store.storeName}</TableCell>
              <TableCell>
                {storeIdUrl !== store._id && (
                  <div>
                    {
                      <p style={{ paddingTop: "25px" }}>
                        {store?.storeUrl.substring(0, 25)}
                      </p>
                    }
                    <span
                      onClick={() => toggleReadMoreUrl(store._id)}
                      style={{
                        fontSize: "12px",
                        color: "#1566C1",
                        cursor: "pointer",
                      }}
                    >
                      see full link
                    </span>
                  </div>
                )}
                {isReadmoreUrl && (
                  <div>
                    {store._id === storeIdUrl && (
                      <div>
                        <p style={{ paddingTop: "25px" }}>{store.storeUrl}</p>
                        <span
                          onClick={() => setStoreIdUrl("")}
                          style={{
                            fontSize: "12px",
                            color: "#1566C1",
                            cursor: "pointer",
                          }}
                        >
                          Hide link
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </TableCell>
              <TableCell>
                {storeId !== store._id && (
                  <div>
                    {
                      <p style={{ paddingTop: "25px" }}>
                        {store?.affilatedStore.substring(0, 25)}
                      </p>
                    }
                    <span
                      onClick={() => toggleReadMore(store._id)}
                      style={{
                        fontSize: "12px",
                        color: "#1566C1",
                        cursor: "pointer",
                      }}
                    >
                      see full link
                    </span>
                  </div>
                )}
                {isReadMore && (
                  <div>
                    {store._id === storeId && (
                      <div>
                        <p style={{ paddingTop: "25px" }}>
                          {store.affilatedStore}
                        </p>
                        <span
                          onClick={() => setStoreId("")}
                          style={{
                            fontSize: "12px",
                            color: "#1566C1",
                            cursor: "pointer",
                          }}
                        >
                          Hide link
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </TableCell>
              <TableCell>{store.affilateLink}</TableCell>
              <TableCell>{store.time}</TableCell>
              <TableCell style={{ lineHeight: "3.5rem" }}>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginRight: 10, padding: "10px 41px 10px 41px" }}
                  component={Link}
                  to={`/edit/${store._id}`}
                >
                  Edit
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteStoreData(store._id)}
                  style={{ padding: "10px 30px 10px 30px" }}
                >
                  Delete
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default AllStores;
