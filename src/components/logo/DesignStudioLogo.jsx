import Link from "next/link";
import LogoWhite2 from "../../../public/assets/imgs/logo/e1-2.png";
import Image from "next/image";

const DesignStudioLogo = () => {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/digital-agency"}>
          <Image
            priority
            style={{ width: 60, height: 60 }}
            src={LogoWhite2}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
};

export default DesignStudioLogo;
