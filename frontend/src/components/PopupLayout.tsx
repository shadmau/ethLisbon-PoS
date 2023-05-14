import React, { ReactNode } from "react";
import styles from "./PopupLayout.module.scss";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export function PopupLayout({ children, title, ...props }: LayoutProps) {
  return (
    <div className={styles.popup} {...props}>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
