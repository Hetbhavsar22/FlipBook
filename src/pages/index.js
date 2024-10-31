import HTMLFlipBook from "react-pageflip";
import styles from "../styles/book.module.css";
import { Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";

export default function PageFlipBook() {
  const flipBookRef = useRef();

  const goToNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const goToPreviousPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <>
      <div className={styles.bookContainer}>
        <HTMLFlipBook
          ref={flipBookRef}
          width={500} 
          height={600} 
          size="stretch" 
          minWidth={315} 
          maxShadowOpacity={0.7} 
          showCover={true} 
          useMouseEvents={true} 
          drawShadow={false} 
          flippingTime={1000}
        >
          <div className={styles.page}>
            <h2>Cover Page</h2>
            <p>Welcome to our interactive book.</p>
          </div>
          <div className={styles.page}>
            <img src="/images/01.jpg" alt="Sample 1" className={styles.image} />
          </div>
          <div className={styles.page}>
            <img src="/images/02.jpg" alt="Sample 2" className={styles.image} />
          </div>
          <div className={styles.page}>
            <img src="/images/03.jpg" alt="Sample 3" className={styles.image} />
          </div>
          <div className={styles.page}>
            <img src="/images/04.jpg" alt="Sample 4" className={styles.image} />
          </div>
          <div className={styles.page}>
            <img src="/images/05.jpg" alt="Sample 5" className={styles.image} />
          </div>
          <div className={styles.page}>
            <img src="/images/06.jpg" alt="Sample 6" className={styles.image} />
          </div>
          <div className={styles.page}>
            <h2>Thank You</h2>
            <p>Thank you for viewing.</p>
          </div>
        </HTMLFlipBook>
      </div>
      {/* <Button
        variant="primary"
        onClick={goToPreviousPage}
        className={styles.prevButton}
      >
        &#60;
      </Button>
      <Button
        variant="primary"
        onClick={goToNextPage}
        className={styles.nextButton}
      >
        &#62;
      </Button> */}
      <div className={styles.controlsContainer}>
        <center>
        <Button
          variant="primary"
          onClick={goToPreviousPage}
          className={styles.navButton}
        >
          &#60;
        </Button>
        <Button
          variant="primary"
          onClick={goToNextPage}
          className={styles.navButton}
        >
          &#62;
          </Button>
        </center>
      </div>
    </>
  );
}
