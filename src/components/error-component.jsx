
const ErrorComponent = ( {message} ) => {
  if(message){
    return(<div className = "error">
        <h1>Error! {message}</h1>
        </div>
    )
}
else{
    return(
        <div className = "error">
            <h1>Error! Page not found.</h1>
        </div>
    )
}

  };

  export default ErrorComponent