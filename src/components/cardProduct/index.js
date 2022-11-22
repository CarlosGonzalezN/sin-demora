import React, { useState, useRef } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
  Modal,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ModalProduct from "../modalProduct/index";

export default function Index({ products }) {
  const ref = useRef();
  const data = products;
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState();

  const handleOpen = (id) => {
    setSelected(id);
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
    setSelected([]);
  };
  return (
    <>
      <>
        {" "}
        {data.map((data) => (
          <Card sx={{ display: "flex", marginTop: 3 }} key={data.id}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {data.Nombre}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {data.DescripcionCategoria}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <Typography component="div" variant="h4">
                  ${data.Precio}
                </Typography>
                <CardActions>
                  <Button size="small" onClick={() => handleOpen(data.Id)}>
                    <AddShoppingCartIcon />
                  </Button>
                </CardActions>
              </Box>
            </Box>

            <CardMedia
              component="img"
              sx={{ width: 129, height: 97, marginTop: 4 }}
              image="/empanada.png"
              alt="imagen del producto"
            />
          </Card>
        ))}
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <ModalProduct onClose={handleClose} id={selected} ref={ref} />
        </Modal>
      </>
    </>
  );
}
