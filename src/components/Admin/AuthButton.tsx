import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import AccountButton from "./AccountButton";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex gap-4 items-center">
      <AccountButton />
      <form action="/dashboard/auth/sign-out" method="post">
        <button className="py-2 px-4 no-underline rounded-md bg-transparent hover:bg-blue-700 text-white font-circularstd">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/dashboard/login"
      className="flex py-2 px-3 no-underline rounded-md bg-orange-500 text-white font-circularstd hover:bg-orange-600"
    >
      Login
    </Link>
  );
}
