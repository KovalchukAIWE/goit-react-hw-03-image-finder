import React from 'react';
import Loader from 'react-loader-spinner';
import styles from '../../styles.module.css';

export function LoaderSpinner() {
  return (
    <div className={styles.BtnWrap}>
      <Loader type="ThreeDots" color="#303f9f" height={50} width={50} />
    </div>
  );
}