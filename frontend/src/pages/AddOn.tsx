import styles from "./AddOn.module.scss";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CameraIcon from "@mui/icons-material/Camera";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Divider from "@mui/material/Divider";

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
            secondaryAction={<KeyboardArrowRightIcon />}
            sx={{ bgcolor: "#F5F5F5" }}
          >
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary="Add-on" />
          </ListItem>
          <div className={styles.space_16px}></div>
          <ListItem
            secondaryAction={<KeyboardArrowRightIcon />}
            sx={{ bgcolor: "#F5F5F5" }}
          >
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary="Add-on" />
          </ListItem>
          <div className={styles.space_16px}></div>
          <ListItem
            secondaryAction={<KeyboardArrowRightIcon />}
            sx={{ bgcolor: "#F5F5F5" }}
          >
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary="Add-on" />
          </ListItem>
          <div className={styles.space_16px}></div>
          <ListItem
            secondaryAction={<KeyboardArrowRightIcon />}
            sx={{ bgcolor: "#F5F5F5" }}
          >
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary="Add-on" />
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
              primary="Nike cashback"
              secondary="Valid until・Aug, 2023"
            />
            <span>10%</span>
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText
              primary="Lenster post"
              secondary="Valid until・Aug, 2023"
            />
            <span>Post</span>
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText
              primary="Sponsored transaction"
              secondary="Valid until・Aug, 2023"
            />
            <span></span>
          </ListItem>
        </List>
      </Container>
    </>
  );
}
