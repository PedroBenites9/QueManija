import Slider from "react-slick/lib/slider";
import "./remera.css";
export default function ImagenesCard({ url }) {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "10px" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "10px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {url.map((url, index) => (
          <div className="img__card-container" key={index}>
            <img src={url} alt="remera" />
          </div>
        ))}
      </Slider>
    </>
  );
}
