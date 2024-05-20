import React from "react";
import Headers from "./component/Header";
import Footers from "./component/Footer";
import Sliders from "./component/Slider";
import Features from "./component/Feature";
import Describes from "./component/Describe";
import Testimonials from "./component/Testimonial";
import dataFeature from "./feature.json";
import datadescribe from "./description.json"
import datatestimonial from "./testimonial.json"
import Forms from "./component/Form"
function App() {
  // console.log(dataFeature);
  let feature=dataFeature;
  let describe=datadescribe;
  return (
    <>
      <Headers />
      <Sliders />
      {/* <!-- Icons Grid--> */}
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {feature.map((e,i)=>{
              return<Features classes={e.class}heading={e.heading} description={e.description} key={i}/>
            })}
          </div>
        </div>
      </section>
        {/* <!-- Image Showcases--> */}
        <section className="showcase">
          <div className="container-fluid p-0">
            {describe.map((e,i)=>{
              return<Describes img={e.bgimg} heading={e.heading} description={e.description} key={i}/>
            })}
          </div>
        </section>
        {/* <!-- Testimonials--> */}
        <section className="testimonials text-center bg-light">
            <div className="container">
              <h2 className="mb-5">What people are saying...</h2>
              <div className="row">
                  {
                    datatestimonial.map((e,i)=>{
                      return<Testimonials img={e.bgimg} name={e.name} description={e.description} key={i}/>
                    })
                  }
              </div>
            </div>
        </section>
        {/* <!-- Call to Action--> */}
        <section className="call-to-action text-white text-center" id="signup">
            <div className="container position-relative">
                <div className="row justify-content-center">
                  <Forms heading="Ready to get started? Sign up now!"/>
                </div>
            </div>
        </section>
      <Footers />
    </>
  );
}

export default App;
