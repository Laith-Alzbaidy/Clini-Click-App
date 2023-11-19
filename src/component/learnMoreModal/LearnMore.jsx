import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles2 from "../slideupModal/subInfo.module.css";
import Image from "next/image";
import closebtn from "./assets/image/close.svg";
import styles from "../slideupModal/slideUpDoctor/styles/slideUpDoctor.module.css";
import "../slideupModal/slideUpPage";
import global from "./assets/image/global.svg";
import license from "./assets/image/license-number.svg";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import ReadMore from "@/src/component/read-more/read-more";
import StarsRate from "@/src/component/stars-rate/stars-rate";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "background.paper", // Corrected property name
  border: "none",
  borderRadius: "40px",
  boxShadow: 24,
  maxWidth: "768px",
  p: 4,
  height: "90vh",
<<<<<<< HEAD
  width: "720px",
=======
>>>>>>> 0f413fba68f66b1b99280b46021641793ae65906
  outline: "none",
};
const style2 = {
overflowY:"auto",
position: "absolute",
border: "none",
paddingLeft: 4,
height: "80vh",
outline: "none",
maxWidth:"720px",
};

const learn = {
  color: "#A75CFF",
  fontFamily: "Montserrat, sans-serif !important",
  fontSize: "18px",
  fontWeight: 600,
};

const practitionerStyle = {
  color: "#A75CFF",
  fontFamily: "Montserrat, sans-serif !important",
  fontSize: "12px",
  fontWeight: 600,
  paddingTop: "6px",
};

const LearnMore = ({ data, learnMore, practitionerData, close }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const practitioner = practitionerData;

  const renderGeneralInfo = () => (
    <Box sx={style} >


    
      <div onClick={handleClose} className="close" style={{ marginLeft: 660 }}>
        <Image src={closebtn} alt="close" className="image-close" />
      </div>
    <Box sx={style2}>
      <div className={styles2.container}>
        <div className={styles2.title}>{data.name}</div>
        <div className={styles2.infoText}>{data.description}</div>

        <div className={styles2.container}>
          <div className={styles2.stepsTitle}>Before Treatment</div>
          <ul>
            <li className={styles2.list}>{data.beforeTreatmentNotes}</li>
          </ul>

          <div className={styles2.stepsTitle}>During Treatment</div>
          <ul>
            <li className={styles2.list}>{data.duringTreatmentNotes}</li>
          </ul>

          <div className={styles2.stepsTitle}>After Treatment</div>
          <ul>
            <li className={styles2.list}>{data.afterTreatmentNotes}</li>
          </ul>
        </div>
        <div className={styles2.title}>{data.name}</div>
        <div className={styles2.infoText}>{data.description}</div>
      </div>
      </Box>
    </Box>

  );

  const renderPractitionerInfo = () => (
    <Box sx={style}>
      <div onClick={handleClose} className="close">
        <Image src={closebtn} alt="close" className="image-close" />
      </div>
      <div className={styles["container-practitioner"]}>
        <div className={`${styles["container-image"]}`}>
          <Image
            width={400}
            height={220}
            priority
            src={practitioner.picture}
            className={styles["image"]}
            alt="Dr."
          />
        </div>
        <div className={styles["container-content"]}>
          <h1 className={styles["title"]}>{`${practitioner.title.name} ${
            practitioner.firstName + "  " + practitioner.lastName
          }`}</h1>
          <p className={styles["specialization"]}>
            {`${practitioner.speciality.name} - ${practitioner.experienceYears} years of experience`}
          </p>
          <div className="d-flex align-items-center gap-4">
            <div>
              <StarsRate rate={practitioner?.rating} />
            </div>
            <Link className={styles["link-review"]} href={`${1}/reviews`}>
              <p className={styles["text-review"]}>
                {practitioner?.practitionerReviews} reviews
              </p>
            </Link>
          </div>
        </div>
        {/* Section qualifications */}
        <div className={styles["container-content"]}>
          <h1 className={`${styles["title"]} mb-2`}>My qualifications</h1>

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
          <h1 className={`${styles["title"]} mb-2`}>About</h1>
          {/* <ReadMore /> */}
          <ReadMore />
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
      </div>
    </Box>
  );

  return (
    <div className="learn">
      <p onClick={handleOpen} style={learnMore ? learn : practitionerStyle}>
        {learnMore ? "Learn more" : "View profile"}
      </p>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {learnMore ? renderGeneralInfo() : renderPractitionerInfo()}
      </Modal>
    </div>
  );
};

export default LearnMore;
