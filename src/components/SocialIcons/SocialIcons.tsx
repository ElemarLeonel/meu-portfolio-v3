import { getProfile } from "@/app/_services/notion";

export default async function SocialIcons() {
  const profile = await getProfile();

  const github = profile?.github.rich_text[0]?.text.content;
  const linkedin = profile?.linkedin.rich_text[0]?.text.content;
  const instagram = profile?.instagram.rich_text[0]?.text.content;

  return (
    <div className="flex flex-row gap-4 ml-0">
      <a href={`https://github.com/${github || "elemarleonel"}`}>
        <i className="ri-github-line ri-2x text-orange-500 hover:text-orange-800 hover:animate-pulse cursor-pointer"></i>
      </a>
      <a href={`https://www.linkedin.com/in/${linkedin || "elemarleonel"}`}>
        <i className="ri-linkedin-line ri-2x text-orange-500 hover:text-orange-800 hover:animate-pulse cursor-pointer"></i>
      </a>
      <a href={`https://www.instagram.com/${instagram || "elemarleonel.dev"}`}>
        <i className="ri-instagram-line ri-2x text-orange-500 hover:text-orange-800 hover:animate-pulse cursor-pointer"></i>
      </a>
    </div>
  );
}
