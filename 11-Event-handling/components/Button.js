const Button = ({ imageUrl, title, clickHandler }) => {
  return (
    <button onClick={clickHandler} className="btn">
      <img src={imageUrl} alt="arrow image" title={title} />
    </button>
  );
};

export default Button;
