import styles from "./AddOnDetail.module.scss";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CameraIcon from "@mui/icons-material/Camera";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { PopupLayout } from "../components/PopupLayout";

export function AddOnDetail() {
  return (
    <>
      <PopupLayout title={"Add on"}>
        <Container>
          <div className={styles.header}>
            <ArrowBackIcon style={{ color: "#FFFFFF" }} />
            <span className={styles.title_text}>Add-ons</span>
          </div>
          <div className={styles.title}>
            <span className={styles.normal_text}>10% cashback</span>
            <span className={styles.view_all}>View all</span>
          </div>
          <List>
            <ListItem>
              <ListItemIcon>
                <CameraIcon />
              </ListItemIcon>
              <ListItemText
                primary="Nike cashback"
                secondary="Valid until・Aug, 2023"
              />
            </ListItem>
          </List>
          <p className={styles.main_text}>
            Effortless cashback sent straight to your account
          </p>
          <p className={styles.sub_text}>
            Everytime you spend on Nike items, you earn 10% cashback. Simple as
            that!
          </p>
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
            Remove add-on
          </Button>

          <div className={styles.title}>
            <span className={styles.normal_text}>Featured items</span>
            <span className={styles.view_all}>View all</span>
          </div>
        </Container>
      </PopupLayout>
    </>
  );
}
