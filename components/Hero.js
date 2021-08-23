import SlideItem from "./SlideItem";

const Hero = () => {
  const slideItemData = [
    {
      name: "goi cuon",
      desc: "Goi Cuon lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti id laboriosam quia illum dolorem recusandae sit laudantium debitis aspernatur assumenda dolore voluptas deleniti optio porro deserunt, autem, minus ut!",
      img: "/images/goi-cuon.png",
    },

    {
      name: "pho ga",
      desc: "Pho Ga lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nemo aliquid inventore? Rem, ducimus, inventore minima, facere eius vitae laborum accusantium iusto ipsam consequatur debitis doloremque? Tempore non esse alias!",
      img: "/images/pho-ga.png",
    },

    {
      name: "bun bo",
      desc: "Bun Bo lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perferendis sed reprehenderit velit similique, explicabo recusandae eveniet porro. Similique vitae dolorem architecto, perspiciatis placeat nobis velit impedit sunt dolores vel",
      img: "/images/bun-bo.png",
    },

    {
      name: "goi cuon",
      desc: "Goi Cuon lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti id laboriosam quia illum dolorem recusandae sit laudantium debitis aspernatur assumenda dolore voluptas deleniti optio porro deserunt, autem, minus ut!",
      img: "/images/goi-cuon.png",
    },
  ];

  return (
    <div
      className="hero"
      style={{ backgroundImage: "url(/images/pho-ga-bg.jpg)" }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="slider">
          {slideItemData.map(({ name, desc, img }, index) => (
            <SlideItem name={name} desc={desc} img={img} key={index} />
          ))}

          <div className="slider-control">
            <div className="slider-control-item">
              <img src="/images/goi-cuon-2.png" alt="" />
            </div>
            <div className="slider-control-item">
              <img src="/images/pho-ga-2.png" alt="" />
            </div>
            <div className="slider-control-item">
              <img src="/images/bun-bo-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
