function Button(props){
  function handleClick(e) {
    e.preventDefault();
    props.fun;
  }
  return(
    <div className="Button">
      <p>{props.text}</p>
    </div>
  );
}
export default Button;
