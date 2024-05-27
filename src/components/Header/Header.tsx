import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  ListItem,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import Logo from "@/components/Logo/Logo";
import AuthButton from "../Admin/AuthButton";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between gap-2.5 lg:gap-5 container h-16">
      <Logo color="white" size="xl" />
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem className="text-white hover:bg-blue-600 transitions font-circularstd font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-md cursor-pointer">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="text-sm md:text-md">
                Início
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-white hover:bg-blue-600 transitions font-circularstd font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-md cursor-pointer">
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink className="text-sm md:text-md text-center">
                Sobre Mim
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-white hover:bg-blue-600 transitions font-circularstd font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-md cursor-pointer">
            <Link href="#techs" legacyBehavior passHref>
              <NavigationMenuLink className="text-sm md:text-md">
                Tecnologias
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-white hover:bg-blue-600 transitions font-circularstd font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-md cursor-pointer">
            <Link href="#projects" legacyBehavior passHref>
              <NavigationMenuLink className="text-sm md:text-md">
                Projetos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-white hover:bg-blue-600 transitions font-circularstd font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-md cursor-pointer">
            <Link href="#blog" legacyBehavior passHref>
              <NavigationMenuLink className="text-sm md:text-md">
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <AuthButton />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Menu Mobile */}

      <NavigationMenu className="block md:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gradient-to-r from-orange-300 to-orange-600 font-circularstd font-medium text-sm">
              Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                <ListItem
                  href="/"
                  className="font-circularstd font-medium text-sm hover:bg-gray-300 hover:font-bold"
                >
                  Início
                </ListItem>
                <ListItem
                  href="#about"
                  className="font-circularstd font-medium text-sm hover:bg-gray-300 hover:font-bold"
                >
                  Sobre Mim
                </ListItem>
                <ListItem
                  href="#techs"
                  className="font-circularstd font-medium text-sm hover:bg-gray-300 hover:font-bold"
                >
                  Tecnologias
                </ListItem>
                <ListItem
                  href="#projects"
                  className="font-circularstd font-medium text-sm hover:bg-gray-300 hover:font-bold"
                >
                  Projetos
                </ListItem>
                {/* <ListItem
                  href="#formandevs"
                  className="font-circularstd font-medium text-sm hover:bg-gray-300 hover:font-bold"
                >
                  FormanDevs
                </ListItem> */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* <Button
        variant="default"
        className="hidden md:block font-circularstd font-bold uppercase text-sm"
      >
        FormanDevs
      </Button> */}
    </header>
  );
}
