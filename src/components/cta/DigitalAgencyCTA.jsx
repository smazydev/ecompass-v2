import Link from "next/link";

const DigitalAgencyCTA = () => {
  return (
    <>
      <section className="cta__area">
        <div className="container line pb-110">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content">
                <p className="cta__sub-title">Work with us</p>
                <h2 className="cta__title title-anim">
                  We would love to hear more about your project
                </h2>
                <div className="btn_wrapper">
                  <a
                    className="wc-btn-primary btn-hover
                    btn-item"
                    href="https://calendly.com/ecompasse/kyc-kickoff"
                    target="_blank"
                  >
                    <span></span>Lets talk{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyCTA;
