import Link from "next/link";

export default async function AccountButton() {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href="/dashboard/account"
        className="py-2 px-4 no-underline rounded-md bg-orange-500 text-white font-circularstd hover:bg-orange-600"
      >
        Account
      </Link>
    </div>
  );
}
