function Describes({img,heading,description}) {
  return <>
      <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${img})` }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{heading}</h2>
                        <p className="lead mb-0">{description}</p>
                    </div>
                </div>
  </>
}
export default Describes;
