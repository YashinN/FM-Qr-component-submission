import styles from "./QrComponent.module.css";
import qrImage from "../images/image-qr-code.png";

const QrCard = () => {
  return (
    <section className={styles.qrCard}>
      <img src={qrImage} alt="Qr code" className={styles.qrImage} />
      <div className={styles.content}>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </section>
  );
};

export default QrCard;
