import { ReactNode } from "react";
import styles from "./TicketLayout.module.scss";

interface LayoutProps {
  children: ReactNode;
  icon: ReactNode;
}

export function TicketLayout({ children, icon, ...props }: LayoutProps) {
  return (
    <>
      <div className={styles.space_32px}></div>
      <div className={styles.ticket} {...props}>
        <div className={styles.circle}>
          <div className={styles.icon_circle}>{icon}</div>
        </div>
        {children}
      </div>
    </>
  );
}
