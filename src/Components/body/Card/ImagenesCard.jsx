export default function ImagenesCard({ url }) {
  return (
    <>
      {/* colocar carousel en la imagenes */}
      {url.map((url) => (
        <div className="img__card">
          <img src={url} alt="remera" />
        </div>
      ))}
    </>
  );
}
