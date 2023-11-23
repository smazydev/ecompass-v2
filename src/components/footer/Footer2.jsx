import Link from "next/link";
import ArrowBlack from "../../../public/assets/imgs/icon/arrow-black.png";
import logoWhite2 from "../../../public/assets/imgs/logo/e2.png";
import logoBlack from "../../../public/assets/imgs/logo/e2.png";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Footer2() {
  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };
  return (
    <>
      <footer className="footer__area-2 pt-130">
        <div className="container">
          <div className="footer__top-2 text-anim">
            <div className="row">
              <div className="col-xxl-12">
                <h2 className="sec-title-33 title-anim">
                  Get started <br /> now
                </h2>
                <p className="footer__sub-title">
                  If you would like to work with us or just want to get in
                  touch, we’d love to hear from you!
                </p>
              </div>
            </div>
          </div>

          <div className="footer__middle-2">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="footer__logo logo-light"
                  src={logoWhite2}
                  alt="Footer Logo"
                />
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  className="footer__logo logo-dark"
                  src={logoBlack}
                  alt="Footer Logo"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="footer__subscribe-2">
                  <div className="footer__location-2">
                    <div className="location">
                      <h3>United Kingdom</h3>
                      <p>
                        124, City Road, <br />
                        London
                      </p>
                      <br/>
                      <p>
                        (+44) 747 947 4146
                      </p>
                    </div>
                    <div className="location">
                      <h3>Pakistan</h3>
                      <p>
                        Hina Homes Street <br />
                        Karachi,Pakistan
                      </p>
                      <br/>
                      <p>
                        (+92) 334 205 6691
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__btm-2">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                <div className="footer__copyright-2">
                  <p>
                    © 2023 - 2025 | All rights reserved by{" "}
                    <a href="https://ecompasse.com/" target="_blank">
                      Ecompasse
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                <div className="footer__nav">
                  <ul className="footer-menu menu-anim" ref={menuAnim}>
                    <li>
                      <Link href="/">home</Link>
                    </li>
                    <li>
                      <Link href="/about">about us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
