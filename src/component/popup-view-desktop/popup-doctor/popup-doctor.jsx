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
import OurTeamPopup from "../../ourTeam/ourteam-popup";
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
  const [practitioner, setPractitioner] = React.useState({});
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div>
      <OurTeamPopup
        setIsModalOpen={setIsModalOpen}
        data={data}
        setPractitioner={setPractitioner}
      />

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
          <div className={styles["container-practitioner"]}>
            <div className={`${styles["container-image"]}`}>
              <Image
                fill
                // priority
                src={practitioner.picture}
                className={styles["image"]}
                alt="Dr. Basel Habayeb" // Alt text for the image
              />
            </div>
            <div className={styles["container-content"]}>
              <h1 className={styles["title"]}>{`${practitioner?.title?.name} ${
                practitioner?.firstName + practitioner?.lastName
              }`}</h1>
              <p className={styles["specialization"]}>
                {`${practitioner?.speciality?.name} - ${practitioner?.experienceYears} years of experience`}
              </p>
              <div className="d-flex align-items-center gap-4">
                <div>
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                </div>
                <Link className={styles["link-review"]} href={`${1}/reviews`}>
                  <p className={styles["text-review"]}>106 reviews</p>
                </Link>
              </div>
            </div>

            {/* Section qualifications */}
            <div className={styles["container-content"]}>
              <h1 className={`${styles["title-section"]} mb-2`}>
                My qualifications
              </h1>

              <ul className={styles["list-qualifications"]}>
                {practitioner.qualifications?.map((qualifications, index) => {
                  return (
                    <li key={index} className={styles["item-list"]}>
                      {qualifications.name}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Section About Me  */}
            <div className={styles["container-content"]}>
              <h1 className={`${styles["title-section"]} mb-2`}>About</h1>
              <ReadMore />
              {/* <p className={styles["description"]}>
                Clinique de la Belle au Bois Dormant is Dubai’s most
                prestigiousbeauty parlour. With high skilled...
              </p>
              <SlideUpAbout /> */}
              <div className={styles["container-content"]}>
                <Row className={styles["card"]}>
                  <Col className="d-flex gap-2">
                    <Image src={global} alt="Languages" />
                    <div>
                      <p className={styles["title-icon"]}>Languages</p>
                      <p className={styles["sub-title-icon"]}>
                        Arabic <br />
                        English
                      </p>
                    </div>
                  </Col>
                  <Col className="d-flex gap-2">
                    <Image src={license} alt="License Number" />
                    <div>
                      <p className={styles["title-icon"]}>License Number</p>
                      <p className={styles["sub-title-icon"]}>
                        {practitioner.medicalLicense}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className={styles["footer-popup"]}>
              <Icon data={data} />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PopupDoctor;
