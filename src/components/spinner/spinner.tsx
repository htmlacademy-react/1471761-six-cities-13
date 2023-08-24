import TailSpin from 'react-loader-spinner';
import styles from './spinner.module.css';

function Spinner(): JSX.Element {

  return (
    <div>
      <div className={styles['wrapper-spinner']}>
        <TailSpin

          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}

export default Spinner;
