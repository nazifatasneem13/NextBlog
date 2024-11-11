"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ page, hasPrev, hasNext, cat }) => {
  const router = useRouter();

  console.log(hasPrev, hasNext);

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.button}
        onClick={() => router.push(`?page=${+page - 1}&cat=${cat ? cat : ""}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${+page + 1}&cat=${cat ? cat : ""}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
