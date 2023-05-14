import styles from "./AddOn.module.scss";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CameraIcon from "@mui/icons-material/Camera";

export function AddOn() {
  return (
    <>
      <Container>
        <div className={styles.header}>
          <span className={styles.normal_text}>Available add-ons</span>
          <span className={styles.view_all}>View all</span>
        </div>
        <List>
          <ListItem
            sx={{
              bgcolor: "#F5F5F5",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItemText primary="Two-factor authentication" />
            <ListItemText secondary="By WingWallet" />
          </ListItem>
          <div className={styles.space_16px}></div>
          <ListItem
            sx={{
              bgcolor: "#F5F5F5",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItemText primary="Automatic conversion and staking on AAVE" />
            <ListItemText secondary="By WingWallet" />
          </ListItem>
          <div className={styles.space_16px}></div>
          <ListItem
            sx={{
              bgcolor: "#F5F5F5",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItemText primary="Push messaging" />
            <ListItemText secondary="By Push Protocol" />
          </ListItem>
          <div className={styles.space_16px}></div>
          <ListItem
            sx={{
              bgcolor: "#F5F5F5",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ListItemText primary="Schedule a transaction" />
            <ListItemText secondary="By WingWallet" />
          </ListItem>
        </List>

        <div className={styles.header}>
          <span className={styles.normal_text}>Active add-ons</span>
          <span className={styles.view_all}>View all</span>
        </div>

        <List>
          <ListItem>
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText
              primary="Convert currency"
              secondary="By Wing Wallet"
            />
            <span>USDC</span>
          </ListItem>
        </List>
      </Container>
    </>
  );
}
