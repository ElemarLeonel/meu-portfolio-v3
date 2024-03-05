import SocialIcons from "../SocialIcons/SocialIcons";

export default function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-900 py-20 px-10">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto gap-8 md:gap-0">
        <p className="font-circularstd font-bold text-ivory-white text-2xl text-center md:text-start">
          Copyright © {getYear}{" "}
          <span className="text-orange-500">elemarleonel.dev</span> - Todos os
          direitos reservados.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
