import Slider from "react-slick/lib/slider";

export default function ImagenesCard({ url }) {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "red" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: true,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {/* colocar carousel en la imagenes */}
        {url.map((url, index) => (
          <div className="img__card" key={index}>
            <img src={url} alt="remera" />
          </div>
        ))}
      </Slider>
    </>
  );
}
