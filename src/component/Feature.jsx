function Features({classes,heading,description}) {
  let icon=`${classes} m-auto text-primary`;
  return (
    <>
      <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex">
            <i className={icon}></i>
          </div>
          <h3>{heading}</h3>
          <p className="lead mb-0">
           {description}
          </p>
        </div>
      </div>
    </>
  );
}
export default Features;
