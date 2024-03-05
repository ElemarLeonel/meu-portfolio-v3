import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function Hero() {
  return (
    <section className="flex flex-col gap-14 items-center justify-center h-full container py-48">
      <div className="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-8">
        <Badge variant="default">UI/UX DESIGN</Badge>
        <Badge variant="outline">FRONTEND</Badge>
        <Badge variant="outline">BACKEND</Badge>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold font-spacegrotesk text-xl md:text-3xl lg:text-5xl text-white text-center">
          Olá, me chamo
          <span className="text-orange-500"> Elemar Leonel </span>
          e <br /> atuo como
          <span className="text-orange-500"> Desenvolvedor Fullstack </span>
        </h1>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-16">
        <Button
          variant={"default"}
          className="drop-shadow-button inline-flex items-center justify-center gap-3 px-8 py-8 
            text-lg md:text-2xl text-blue-500 font-circularstd font-bold uppercase rounded-sm"
        >
          Currículo
          <i className="ri-file-download-line text-blue-500 hover:text-blue-800 hover:animate-bounce cursor-pointer" />
        </Button>
        <SocialIcons />
      </div>
    </section>
  );
}
