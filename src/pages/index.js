import { useRouter } from "next/router";
import DigitalAgency from "./digital-agency";

const Index = () => {
  const router = useRouter();
 
  return <DigitalAgency />;
};

export default Index;
