<<<<<<< HEAD
import Slider from "react-slick";
=======
import Slider from "react-slick/lib/slider";
>>>>>>> pc

export default function ImagenesCard({ url }) {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  };
  const settings = {
    dots: true,
    nextArrow: <NextArrow />,
  };

  return (
    <>
<<<<<<< HEAD
      <Slider>
        {url.map((url) => (
          <div className="img__card">
=======
      <Slider {...settings}>
        {/* colocar carousel en la imagenes */}
        {url.map((url, index) => (
          <div className="img__card" key={index}>
>>>>>>> pc
            <img src={url} alt="remera" />
          </div>
        ))}
      </Slider>
    </>
  );
}
