import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import oshaikh from "../../../public/assets/imgs/testimonial/4/oshaikh.jpeg";
import ahmed from "../../../public/assets/imgs/testimonial/4/ahmednigga.png";
import bilal from "../../../public/assets/imgs/testimonial/4/bilal.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const StartupAgencyTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-4 ">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="testimonial__sec-title text-anim">
                <h2 className="sec-subtile-6">Testimonials</h2>
                <h3 className="sec-title-6 title-anim">Clients feedback</h3>
              </div>
            </div>
            <div className="testimonial__slider-4">
              <Swiper
                modules={[FreeMode, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                loop={true}
                speed={2000}
                navigation={{
                  prevEl: ".prev-button",
                  nextEl: ".next-button",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                pagination={{
                  el: ".pagination",
                  type: "fraction",
                }}
                className="swiper testimonial__slider-4"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={oshaikh}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">Clean Code</h4>
                        <p>
                          Delighted to commend Ecompasse for exemplary digital
                          transformation. Led by Ali, the Engineering Manager,
                          their adept team delivered innovative prototypes for
                          Miletap, akin to G-Suite. A top-tier partner.
                        </p>
                        <h5 className="testimonial__name-4">Owais Shaikh</h5>
                        <h6 className="testimonial__role-4">
                          CEO, Miletap, Workwise
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={ahmed}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Instant Support
                        </h4>
                        <p>
                          Commending Ecompasse for the timely delivery of
                          Schoolyup, a revolutionary school management
                          dashboard. Their commitment to best practices, client
                          satisfaction, and innovation positions them as a
                          trusted and exceptional partner.
                        </p>
                        <h5 className="testimonial__name-4">Ahmed Asaad</h5>
                        <h6 className="testimonial__role-4">CEO, Schoolyup</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={bilal}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Performance Optimization
                        </h4>
                        <p>
                          I wholeheartedly recommend Ecompasse for their
                          exceptional work in optimizing user experience and
                          code for Grotabyte Archive. Their expertise and
                          commitment greatly improved our email archiving
                          solution's performance
                        </p>
                        <h5 className="testimonial__name-4">Bilal Ahmed</h5>
                        <h6 className="testimonial__role-4">CEO, Grotabyte </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="testimonial__btn-4">
                  <div
                    style={{ cursor: "pointer" }}
                    className="next-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="prev-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div className="pagination testimonial__pagination-4">
                    <div className="pag"></div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyTestimonial;
