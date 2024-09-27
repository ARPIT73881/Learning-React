const Button = ({ imageUrl, title }) => {
  return (
    <button className="btn">
      <img src={imageUrl} alt="arrow image" title={title} />
    </button>
  );
};

export default Button;
