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
      <div className={styles.modal}>
        {title}
        <button onClick={onClose}>&times;</button>
        {children}
      </div>
    </>
  );
}
