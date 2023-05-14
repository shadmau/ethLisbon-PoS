import styles from "./AddOnDetail.module.scss";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { PopupLayout } from "../components/PopupLayout";

export function AddOnDetail() {
  return (
    <>
      <PopupLayout title={"Add on"}>
        <Container>
          <p className={styles.status}>Active</p>
          <p className={styles.title}>Convert currency</p>
          <p>By WingWallet</p>
          <p className={styles.main_text}>
            Choose the currency for your transactions
          </p>
          <p className={styles.sub_text}>
            Everytime you receive a crypto payment, convert automatically to the
            currency of your choice.
          </p>
          <div className={styles.currency}>
            <span className={styles.sub_text}>Available currencies:</span>
            <span className={styles.sub_text}>・USDC</span>
            <span className={styles.sub_text}>・EUR</span>
          </div>

          <div className={styles.info}>
            <InfoIcon
              style={{
                color: "#9CA3AF",
                paddingTop: "12px",
                paddingRight: "12px",
                paddingLeft: "8px",
              }}
            />
            <p className={styles.info_text}>
              Only available on certain networks
            </p>
          </div>
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              background: "#111827",
              width: "100%",
              borderRadius: "12px",
            }}
            size={"large"}
          >
            Add add-on
          </Button>
        </Container>
      </PopupLayout>
    </>
  );
}
