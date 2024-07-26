
import styles from "../commentadder.module.css";

const ErrorComponent = ( {message} ) => {
  if(message){
    return(<div className ={styles.error}>
        <h1>Error! {message}</h1>
        </div>
    )
}
else{
    return(
        <div className={styles.error}>
            <h1>Error! Page not found.</h1>
        </div>
    )
}

  };

  export default ErrorComponent