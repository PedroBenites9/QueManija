export default function ImagenesCard({ url }) {
  return (
    <>
      {url.map((url) => (
        <div className="img__card">
          <img src={url} alt="remera" />
        </div>
      ))}
    </>
  );
}
