import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../slideupModal/subInfo.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./learnMore.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "40px",
  boxShadow: 24,
  p: 4,
  width: "878.967px",
  outline: "none",
};
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat , sans-serif ",
    fontSize: 18,
  },
});

const LearnMore = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography onClick={handleOpen} className={styles.learn}>
          Learn more
        </Typography>
      </ThemeProvider>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className={styles.container}>
            {/* <Image src={back} onClick={() => handleClose()} /> */}
            <div className={styles.title}>{data.name}</div>
            <div className={styles.infoText}>{data.description}</div>

            <div className={styles.container}>
              <div className={styles.stepsTitle}>Before Treatment</div>
              <ul>
                <li className={styles.list}>{data.beforeTreatmentNotes}</li>
              </ul>

              <div className={styles.stepsTitle}>During Treatment</div>

              <ul>
                <li className={styles.list}>{data.duringTreatmentNotes}</li>
              </ul>

              <div className={styles.stepsTitle}>After Treatment</div>

              <ul>
                <li className={styles.list}>{data.afterTreatmentNotes}</li>
              </ul>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default LearnMore;
