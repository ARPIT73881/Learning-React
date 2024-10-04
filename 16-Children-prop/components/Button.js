const Button = ({ imageUrl, clickHandler, children }) => {
  // console.log(children);
  return (
    <button onClick={clickHandler} title={children}>
      <img src={imageUrl} alt={children} />
      {children}
    </button>
  );
};

export default Button;
