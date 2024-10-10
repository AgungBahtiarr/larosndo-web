import {
  Server,
  Database,
  Wifi,
  Cloud,
  Lock,
  Globe,
  Cpu,
  Network,
  Smartphone,
  Laptop,
} from "lucide-react";
import { Boxes } from "./ui/background-boxes";

const HeroSection = (props) => {
  return (
    <div className="h-[50vh] w-full dark:bg-black bg-white relative flex items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 w-full">
        <GoogleGeminiEffect children={props.children} />
      </div>
      <NetworkIcons />
    </div>
  );
};

const NetworkIcons = () => {
  return (
    <>
      {/* Icon-icon untuk desktop */}
      <Server className="absolute z-20 top-[10%] left-[5%] text-[#fb923c] opacity-50 h-12 w-12 animate-pulse hidden md:block" />
      <Database className="absolute z-20 top-[80%] left-[15%] text-[#fb923c] opacity-50 h-12 w-12 animate-pulse hidden md:block" />
      <Network className="absolute z-20 top-[30%] right-[10%] text-[#fb923c] opacity-50 h-12 w-12 animate-pulse hidden md:block" />
      <Wifi className="absolute z-20 bottom-[20%] right-[25%] text-[#fb923c] opacity-50 h-12 w-12 animate-pulse hidden md:block" />
      <Cloud className="absolute z-20 top-[15%] right-[30%] text-[#fb923c] opacity-50 h-10 w-10 animate-pulse hidden md:block" />
      <Lock className="absolute z-20 bottom-[15%] left-[30%] text-[#fb923c] opacity-50 h-8 w-8 animate-pulse hidden md:block" />
      <Globe className="absolute z-20 top-[5%] right-[5%] text-[#fb923c] opacity-50 h-14 w-14 animate-pulse hidden md:block" />
      <Cpu className="absolute z-20 bottom-[10%] left-[10%] text-[#fb923c] opacity-50 h-10 w-10 animate-pulse hidden md:block" />
      <Smartphone className="absolute z-20 top-[40%] left-[20%] text-[#fb923c] opacity-50 h-9 w-9 animate-pulse hidden md:block" />
      <Laptop className="absolute z-20 bottom-[30%] right-[15%] text-[#fb923c] opacity-50 h-11 w-11 animate-pulse hidden md:block" />
    </>
  );
};

const GoogleGeminiEffect = (props) => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const containerRef = useRef<HTMLDivElement>(null);

  // const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (containerRef.current) {
  //     const rect = containerRef.current.getBoundingClientRect();
  //     setMousePosition({
  //       x: event.clientX - rect.left,
  //       y: event.clientY - rect.top,
  //     });
  //   }
  // };

  return (
    // <div
    //   ref={containerRef}
    //   onMouseMove={handleMouseMove}
    //   className="h-[90vh] relative overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center"
    // >
    <div className="h-[50vh] relative overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
      <Boxes />
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {/* <Gradient mousePosition={mousePosition} /> */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center">
        <div className="mb-8 mx-8 md:mx-0">{props.children}</div>
        <div className="text-lg sm:text-xl md:text-2xl dark:text-slate-200 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          Connected to a better future
        </div>
        <a
          href="#pricing"
          className="bg-[#fb923c] text-white hover:bg-[#f97316] font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block"
        >
          Jelajahi Lebih Lanjut
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
