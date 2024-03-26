import React, { MouseEventHandler } from "react";

import styles from "./dialog.module.scss";

interface IDialog {
  title: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactElement;
}

export default function Dialog({ title, onClose, children }: IDialog) {
  return (
    <>
      <div className={styles.modalForm}>
        <div className={styles.closeButton}>
          <button onClick={onClose}>&times;</button>
        </div>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
}
