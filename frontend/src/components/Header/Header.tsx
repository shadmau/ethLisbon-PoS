import styles from "./Header.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface HeaderProps {
  title: string;
}
export function Header(props: HeaderProps) {
  return (
    <div className={styles.header}>
      <ArrowBackIcon style={{ color: "#FFFFFF" }} />
      <span className={styles.title}>{props.title}</span>
      <span>p</span>
    </div>
  );
}
