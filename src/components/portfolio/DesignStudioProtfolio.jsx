import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Portfilio21 from "../../../public/assets/imgs/portfolio/2/grotabyte.png";
import Portfilio22 from "../../../public/assets/imgs/portfolio/2/workw.png";
import Portfilio23 from "../../../public/assets/imgs/portfolio/2/schoolyup3.png";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const DesignStudioProtfolio = () => {
  return (
    <>
      <section className="portfolio__area-2">
        <div className="container g-0 line pt-100 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <div>
                  <h2 className="title-anim sec-title-33">
                    Project <span>Showcase</span>
                  </h2>
                </div>
                <p className="sec-text">
                  Worked with companies and brands at the intersection of flat
                  design and digital technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__slider-2">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            spaceBetween={0}
            effect={"fade"}
            slidesPerView={1}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (i, className) {
                return `
                <button class="${className}">
                  <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
                </button>
              `;
              },
            }}
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio21}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        Grotabyte <span>Archive</span>
                      </Link>
                    </h2>
                    <p>
                      Grotabyte provides cost-effective eDiscovery solutions
                      with a tech stack including React, Node.js, Microsoft SQL
                      Server, and Elasticsearch.
                      <br></br>
                      <br></br>
                      Empowering IT teams, it offers lightning-fast search,
                      information archiving, and compliance across diverse data
                      sources, supporting On-Premises, Cloud, and Hybrid
                      Deployments.
                    </p>
                
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio22}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      <Link href="/portfolio-details">
                        Workwise <span>Webapp</span>
                      </Link>
                    </h2>
                    <p>
                      Workwise is a corporate social solution crafted on .NET C#
                      and React, fostering collaboration and engagement.
                      <br></br>
                      <br></br>
                      Internal products, developed using Node.js, React,
                      MongoDB, and SQL Server, enhance productivity and
                      connectivity within your organization.
                    </p>
                  
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="portfolio__slide-2">
                  <div className="slide-img">
                    <Link href="/portfolio-details">
                      <Image
                        priority
                        style={{ width: "100%", height: "auto" }}
                        src={Portfilio23}
                        alt="Portfolio Image"
                      />
                    </Link>
                  </div>
                  <div className="slide-content">
                    <h2 className="sec-title">
                      {" "}
                      <Link href="/portfolio-details">
                        SchoolYup
                        <span>Edu Solution</span>
                      </Link>
                    </h2>
                    <p>
                      SchoolYup aims at solving problems in managing students,
                      coursework and everything related to university. <br />
                      <br />
                      Built using the MERN Stack.
                    </p>
                  
                  </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="swiper-pagination circle-pagination right"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesignStudioProtfolio;
