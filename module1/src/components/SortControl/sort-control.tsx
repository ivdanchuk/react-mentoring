import { SortOptionsType } from "../../constants";

import styles from "./sort-control.module.scss";

export interface ISortControlProps {
  sortedBy: SortOptionsType;
  onSelectChange: Function;
}

export const SortControl = ({
  sortedBy,
  onSelectChange,
}: ISortControlProps) => {
  return (
    <div className={styles.sortContainer}>
      <label className={styles.sortByLabel}>SORT BY</label>

      <select
        className={styles.selectInputBox}
        value={sortedBy}
        onChange={(event) => onSelectChange(event.target.value)}
      >
        <option value="RELEASE DATE">Release Date</option>
        <option value="TITLE">Title</option>
      </select>
    </div>
  );
};
