import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./popup-about.module.css";
// import ButtonPreviews from "../../buttonPreviews/buttonPreviews";
import close from "./assets/image/close.svg";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import building from "./assets/image/icon _building_.svg";
import license from "./assets/image/icon _license_.svg";
import ReadMore from "../../read-more/read-more";
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

const PopupAbout = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div>
      <span
        className={styles["read-more"]}
        onClick={() => setIsModalOpen(true)}
      >
        Read more
      </span>

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
          <div className={styles["about-slide-up"]}>
            <div>
              <h1 className={styles["title"]}>About us</h1>
              <Row className={styles["card"]}>
                <Col
                  className={`d-flex align-items-center gap-3 p-0 justify-content-center ${styles["col-icon"]}`}
                >
                  <Image width={30} height={30} src={building} alt="building" />
                  <div>
                    <p className={styles["title-icon"]}>Established</p>
                    <p className={styles["date"]}>2010</p>
                  </div>
                </Col>
                <Col
                  className={`d-flex align-items-center gap-3 p-0 justify-content-center ${styles["col-icon"]}`}
                >
                  {" "}
                  <Image width={40} height={40} src={license} alt="license" />
                  <div>
                    <p className={styles["title-icon"]}>License Number</p>
                    <p className={styles["date"]}>MOH-274-36970</p>
                  </div>
                </Col>
              </Row>
              {/* <ReadMore /> */}
              <p className={styles["description"]}>
                Clinique de la Belle au Bois Dormant is Dubai’s most prestigious
                beauty parlour. With high skilled Clinique de la Belle au Bois
                Dormant is Dubai’s most prestigious beauty parlour. Clinique de
                la Belle au Bois Dormant is Dubai’s most prestigious beauty
                parlour. With high skilled.
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PopupAbout;
