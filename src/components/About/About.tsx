import { Button } from "@/components/ui/button";
import Image from "next/image";
import Elemar from "/public/elemar.webp";
import { breakText } from "@/app/_utils/functions";
import Link from "next/link";
import { getProfile } from "@/app/_services/notion";

export default async function About() {
  const profile = await getProfile();

  const history = profile?.history.rich_text[0].plain_text;
  const phone = profile?.phone.rich_text[0].plain_text;

  return (
    <section className="bg-gradient-to-tr from-blue-700 to-blue-800 flex flex-col-reverse md:flex-row items-start py-32 md:py-48 justify-center relative">
      <div className="flex flex-col justify-center items-center md:items-start container gap-6 px-5 md:px-10 mb-[40rem] md:mb-0">
        <div className="max-w-md lg:max-w-lg flex flex-col gap-8">
          <h2 className="font-bold font-spacegrotesk text-3xl md:text-5xl text-orange-500 text-center lg:text-start">
            Minha história
          </h2>

          {breakText(history).map((paragraph, index) => (
            <p
              key={index}
              className="font-normal text-base font-circularstd text-ivory-white/60 text-center md:text-start"
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-row flex-wrap lg:flex-nowrap items-start justify-center gap-10 py-8 px-5">
            <div className="flex flex-col items-center justify-center">
              <span
                className="bg-gradient-to-t from-orange-500 to-orange-300 
          inline-block text-transparent bg-clip-text font-spacegrotesk font-bold text-3xl md:text-5xl text-center"
              >
                +{profile?.years_of_experience.number || 0}
              </span>
              <p className="font-circularstd font-normal text-ivory-white/60 text-sm text-center whitespace-nowrap">
                anos de experiência
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span
                className="bg-gradient-to-t from-orange-500 to-orange-300 
          inline-block text-transparent bg-clip-text font-spacegrotesk font-bold text-3xl md:text-5xl text-center"
              >
                +{profile?.projects_developed.number || 0}
              </span>
              <p className="font-circularstd font-normal text-ivory-white/60 text-sm text-center whitespace-nowrap">
                projetos desenvolvidos
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span
                className="bg-gradient-to-t from-orange-500 to-orange-300 
          inline-block text-transparent bg-clip-text font-spacegrotesk font-bold text-3xl md:text-5xl text-center"
              >
                +{profile?.certifications_carried_out.number || 0}
              </span>
              <p className="font-circularstd font-normal text-ivory-white/60 text-sm text-center whitespace-nowrap">
                certificações realizadas
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-6 gap-8 sm:gap-3 items-center justify-center">
            <Button
              variant="default"
              size={"md"}
              className="font-spacegrotesk text-base"
            >
              <Link href={`https://api.whatsapp.com/send?phone=${phone}`}>
                Entre em contato
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={profile?.image_history.files[0]?.file.url ||  Elemar.src}
        width={0}
        height={0}
        sizes="100vw"
        alt="Foto do Elemar Leonel"
        className="h-fit w-full max-w-lg xl:max-w-xl 
        object-cover absolute transform right-0 bottom-0 
        -translate-x-0 sm:-translate-x-20 md:-translate-x-0 lg:translate-x-0 
        drop-shadow-primary"
      />
    </section>
  );
}
