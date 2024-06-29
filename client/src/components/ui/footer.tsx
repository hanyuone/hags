import { House, Cog, BarChart } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-footer fixed bottom-0 w-full py-4 inset-x-0 text-center justify-center items-center flex flex-row">
      <House className="h-4 w-4 text-white"/>
      <BarChart className="size-6 text-white mx-10"/>
      <Cog className="h-4 w-4 text-white"/>
    </div>
  )
}

export default Footer;
