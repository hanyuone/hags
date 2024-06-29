import { House, Cog, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-footer fixed bottom-0 w-full py-4 inset-x-0 text-center justify-center items-center flex flex-row">
      <House className="h-4 w-4 text-white" onClick={() => navigate("/")}/>
      <BarChart className="size-6 text-white mx-10" onClick={() => navigate("/insights")}/>
      <Cog className="h-4 w-4 text-white" onClick={() => navigate("/settings")}/>
    </div>
  )
}

export default Footer;
