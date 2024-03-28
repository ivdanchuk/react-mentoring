import { SortOptionsType } from "../../constants";

import styles from "./sort-control.module.scss";

export interface ISortControlProps {
  sortedBy: SortOptionsType;

  onSelectChange(sortedBy: SortOptionsType): void;
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
        onChange={(event) =>
          onSelectChange(event.target.value as "Release Date" | "Title")
        }
      >
        <option value="Release Date">Release Date</option>
        <option value="Title">Title</option>
      </select>
    </div>
  );
};
