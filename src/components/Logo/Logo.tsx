export default function Logo() {
  return (
    <div className="flex flex-row gap-1">
      <h1 className="hidden md:inline font-bold font-spacegrotesk text-xl text-white">
        elemarleonel<em className="text-orange-500">.</em>dev
      </h1>
      <h1 className="inline md:hidden font-bold font-spacegrotesk text-xl text-white">
        el.d
      </h1>
    </div>
  );
}