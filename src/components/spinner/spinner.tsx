import { Blocks } from 'react-loader-spinner';
import styles from './spinner.module.css';

function Spinner(): JSX.Element {

  return (
    <div>
      <div className={styles['wrapper-spinner']}>
        <Blocks
          visibl={true}
          height={80}
          width={80}
          ariaLabel='blocks-loading'
          wrapperStyle={{}}
          wrapperClass='blocks/wrapper'
        />
      </div>
    </div>
  );
}

export default Spinner;
