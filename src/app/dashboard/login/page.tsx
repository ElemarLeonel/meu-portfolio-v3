import Logo from "@/components/Logo/Logo";
import Messages from "../login/messages";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-orange-900 to-blue-900 w-full h-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col flex-1 gap-8 items-center justify-center py-8 px-8 w-full sm:max-w-md mx-auto bg-white border border-gray-300">
        <Logo size="3xl" color="blue-500" />
        <form
          className="flex flex-col gap-2 justify-center w-full"
          action="/dashboard/auth/sign-in"
          method="post"
        >
          <label
            className="text-md text-blue-900 font-circularstd"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="py-2 px-4 mb-6 rounded-md border border-gray-300"
            name="email"
            placeholder="Digite seu email"
            required
          />
          <label
            className="text-md text-blue-900 font-circularstd"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className="py-2 px-4 mb-6 rounded-md border border-gray-300"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <Button size={"md"}>Entrar</Button>
          <Button
            formAction={"/dashboard/auth/sign-up"}
            size={"md"}
            variant={"outline"}
          >
            Cadastrar
          </Button>
          <Messages />
        </form>
      </div>
    </div>
  );
}
