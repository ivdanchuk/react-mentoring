import React, { MouseEventHandler } from "react";

import styles from "./dialog.module.scss";

export interface IDialogProps {
  title: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactElement;
}

export const Dialog = ({ title, onClose, children }: IDialogProps) => {
  return (
    <>
      <div className={styles.modalForm}>
        <div className={styles.closeButton}>
          <button onClick={onClose}>X</button>
        </div>
        <div className={styles.title}>{title}</div>
        {children}
      </div>
    </>
  );
};
