export default function Logo({ color, size }: { color: string; size: string }) {
  return (
    <div className="flex flex-row gap-1">
      <h1
        className={`hidden md:inline font-bold font-spacegrotesk text-${size} text-${color}`}
      >
        elemarleonel<em className="text-orange-500">.</em>dev
      </h1>
      <h1
        className={`inline md:hidden font-bold font-spacegrotesk text-${size} text-${color}`}
      >
        el.d
      </h1>
    </div>
  );
}
