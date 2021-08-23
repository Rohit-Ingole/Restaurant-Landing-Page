const SlideItem = ({ name, desc, img }) => {
  return (
    <div className="slide active">
      <div className="dish-info">
        <div className="dish-name">
          <h2>{name}</h2>
        </div>
        <div className="dish-description">
          <p>{desc}</p>
        </div>
        <a href="#" className="btn">
          order now
        </a>
      </div>

      <div className="dish-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default SlideItem;
