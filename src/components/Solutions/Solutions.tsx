import Image from "next/image";
import IconPage from "/public/images/icon-page.svg";

export default function Solutions(){
  return (
    <section className="px-20 py-32 md:py-48 relative flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-[30px]">
        <div className="max-w-full lg:max-w-sm">
          <h2 className="font-bold font-spacegrotesk text-3xl md:text-4xl text-white text-center lg:text-start">
            Ofereço serviços de<span className="text-orange-500"> qualidade </span> 
            por um preço <span className="text-orange-500"> acessível</span>
            </h2>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-[68px]">
          <div className="flex flex-col items-start justify-center space-y-5 bg-transparent hover:bg-blue-600 py-6 px-4 rounded-md transitions max-w-full md:max-w-[270px] border-2 border-blue-600">
              <Image src={IconPage.src} alt="Solução 1" width={36} height={32} />
              <h3 className="font-bold font-circularstd text-ivory-white text-base leading-7 tracking-[7%] uppercase">Landing Pages</h3>
              <p className="font-circularstd text-ivory-white/60 text-base">
                Desenvolvo landing pages de alta taxa de conversão com foco em retenção e geração de leads qualificados.
              </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-5 bg-transparent hover:bg-blue-600 py-6 px-4 rounded-md transitions max-w-full md:max-w-[270px] border-2 border-blue-600">
              <Image src={IconPage.src} alt="Solução 1" width={36} height={32} />
              <h3 className="font-bold font-circularstd text-ivory-white text-base leading-7 tracking-[7%] uppercase">Sistemas</h3>
              <p className="font-circularstd text-ivory-white/60 text-base">
              Também desenvolvo sistemas personalizados para atender as demandas específicas do fluxo de trabalho da sua empresa.
              </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-5 bg-transparent hover:bg-blue-600 py-6 px-4 rounded-md transitions max-w-full md:max-w-[270px] border-2 border-blue-600">
              <Image src={IconPage.src} alt="Solução 1" width={36} height={32} />
              <h3 className="font-bold font-circularstd text-ivory-white text-base leading-7 tracking-[7%] uppercase">Lojas Virtuais</h3>
              <p className="font-circularstd text-ivory-white/60 text-base">
              Trabalho com lojas virtuais para quem quer expandir sua marca, seja um negócio físico já estabelecido ou um novo negócio 100% online.
              </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-5 bg-transparent hover:bg-blue-600 py-6 px-4 rounded-md transitions max-w-full md:max-w-[270px] border-2 border-blue-600">
              <Image src={IconPage.src} alt="Solução 1" width={36} height={32} />
              <h3 className="font-bold font-circularstd text-ivory-white text-base leading-7 tracking-[7%] uppercase">Institucionais</h3>
              <p className="font-circularstd text-ivory-white/60 text-base">
              As marcas que querem reforçar seu branding através do posicionamento na internet e também estamos aqui para te ajudar no que for preciso.
              </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-[150px] lg:absolute lg:top-0 lg:bottom-0 lg:right-0 xl:right-20 2xl:right-32 m-auto">
        <span className="font-spacegrotesk font-bold text-4xl md:text-6xl lg:-rotate-90 border-text opacity-40">elemarleonel.dev</span>
      </div>
    </section>
  )
}