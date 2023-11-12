import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OurTeam from "../../ourTeam/ourteam";
import styles from "./popup-doctor.module.css";
// import ButtonPreviews from "../../buttonPreviews/buttonPreviews";
import close from "./assets/image/close.svg";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import star from "./assets/image/Star.svg";
import global from "./assets/image/global.svg";
import license from "./assets/image/license-number.svg";
import SlideUpAbout from "../../slideupModal/slideUpAbout/slideUpAbout";
import Icon from "../../icon/icon";
import ReadMore from "../../read-more/read-more";
SlideUpAbout;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "40px",
  boxShadow: 24,
  p: 4,
  height: "90vh",
  width: "878.967px",
  outline: "none",
  overflowY: "auto", // Corrected property name
};

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat , sans-serif ",
    fontSize: 18,
  },
});

const PopupDoctor = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <Typography onClick={handleOpen}>Learn more</Typography> */}
      </ThemeProvider>

      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex align-items-center justify-content-end">
            <Image
              className={styles["close-btn"]}
              onClick={handleClose}
              src={close}
              alt="close"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PopupDoctor;
