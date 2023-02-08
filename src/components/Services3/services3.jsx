import React from "react";

const Services3 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      var featuresitems = document.querySelectorAll(".feat .items");
      if (featuresitems) {
        featuresitems.forEach((item) => {
          item.onmouseover = function (event) {
            item.classList.add("active");
            let siblings = getSiblings(item),
              siblingEl = siblings.map((e) => e.classList.remove("active"));
          };
        });
      }
    }, 1000);
  }, [])
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Services
              </h6>
              <h3 className="wow color-font">
                We help to create strategies, design &amp; development.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Interface Design</h5>
              <p>
                Implementation and rollout of new network infrastructure,
                including consolidation.
              </p>
              <a href="#0" className="more-stroke">
                <span></span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Creative Always</h5>
              <p>
                Implementation and rollout of new network infrastructure,
                including consolidation.
              </p>
              <a href="#0" className="more-stroke">
                <span></span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Real-time Editing</h5>
              <p>
                Implementation and rollout of new network infrastructure,
                including consolidation.
              </p>
              <a href="#0" className="more-stroke">
                <span></span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>Art Concept</h5>
              <p>
                Implementation and rollout of new network infrastructure,
                including consolidation.
              </p>
              <a href="#0" className="more-stroke">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
