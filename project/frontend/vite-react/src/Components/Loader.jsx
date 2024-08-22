import {Blocks} from 'react-loader-spinner';

import styles from "./Loader.module.css"
function Loader() {
  return (
    <div className={styles.loader}>
    <Blocks
    visible={true}
    height="150"
    width="150"
    color="#c4dce0"
    ariaLabel="grid-loading"
    radius="12.5"
    strokeWidth="3"
  />
  </div>
  )
}

export default Loader