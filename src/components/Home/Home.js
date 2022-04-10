import React from 'react';
import clsx from 'clsx';
import styles from './Home.module.css';
import settingImg from '../../../static/img/settings.png';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  const handleClickButton = () => {
    history.push('/blog');
  };

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <img
          className={styles.settingImg}
          src={settingImg}
          alt="Oops! 지금은 공사중이에요!"
        />
        <h1 className={styles.settingTitle}>Oops! 지금은 공사중이에요!</h1>
        <button className={styles.button} onClick={handleClickButton}>
          블로그 보러가기
        </button>
      </div>
    </section>
  );
}
