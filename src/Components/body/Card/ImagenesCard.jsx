import Slider from "react-slick";

export default function ImagenesCard({ url }) {
  return (
    <>
      <Slider>
        {url.map((url) => (
          <div className="img__card">
            <img src={url} alt="remera" />
          </div>
        ))}
      </Slider>
    </>
  );
}
