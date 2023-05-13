import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styles from "./Transfer.module.scss";

export function Transfer() {
  return (
    <Container maxWidth={"md"}>
      <ArrowBackIcon />
      <h3>Receive</h3>
      <p className={styles.normal_text}>Receive amount</p>
      <p className={styles.amount_text}>$350.00</p>
      <Divider />
      <p className={styles.normal_text}>Receive from</p>
      <Box sx={{ width: "100%", bgcolor: "#F5F5F5" }}>
        <List disablePadding={true}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="User.name" secondary="0xabcd........xyz" />
          </ListItemButton>
        </List>
      </Box>
    </Container>
  );
}
