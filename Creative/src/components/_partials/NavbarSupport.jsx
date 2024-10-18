import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { Home, Settings, Menu as MenuIcon, Earth } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import IconLight from "../../../public/icons/IconLight";
import IconDark from "../../../public/icons/IconDark";
import IconNameLight from "../../../public/icons/iconNameLight";
import IconNameDark from "../../../public/icons/IconNameDark";
import SupportDark from "../../../public/icons/SupportDark";
import SupportLight from "../../../public/icons/SupportLight";
import { useTheme } from "../ThemeProvider";

export default function NavbarSupport() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation("global");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage");
    if (savedLanguage) {
      i18next.changeLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang).then(() => {
      localStorage.setItem("userLanguage", lang);
      const path = location.pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
      navigate(path, { replace: true });
    });
  };

  const handleOpenSheet = () => {
    setIsSheetOpen(true);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  if (location.pathname === `/Panel`) return null;

  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6">
      {/* Icono y nombre del sitio */}
      <Link to={`/`} className="hidden md:flex items-center">
        {theme === "dark" ? (
          <IconDark className="h-16 w-16" />
        ) : (
          <IconLight className="h-16 w-16" />
        )}
        <div className="ml-5">
          {theme === "dark" ? <SupportDark /> : <SupportLight />}
        </div>
        <div className="-ml-24">
          {theme === "dark" ? <IconNameDark /> : <IconNameLight />}
        </div>
        <span className="sr-only">Creative</span>
      </Link>

      {/* Menú para pantallas grandes */}
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          to={`/Soporte`}
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          {t("navbar.support")}
        </Link>
        <Link
          to={`/Panel`}
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          {t("support.navbar.panel")}
        </Link>
        {/* Añadir enlaces de IA y Herramientas de IA */}
        <Link
          to={`/IA`}
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          IA
        </Link>
        <Link
          to={`/Herramientas-IA`}
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          Herramientas de IA
        </Link>

        {/* Selector de idiomas */}
        <NavigationMenu className="z-50">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Earth className="h-6 w-6" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* Solo español e inglés */}
                {["en", "es"].map((lang) => (
                  <NavigationMenuLink
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="group inline-flex h-10 w-14 items-center justify-center rounded-md py-2 font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
                  >
                    <Avatar className="w-8 h-8 flex items-center justify-center rounded-full border shadow-lg">
                      <AvatarImage
                        src={`https://flagcdn.com/${lang === "en" ? "us" : "gt"}.svg`}
                        alt={`Flag of ${lang}`}
                        className="w-full h-full object-cover"
                      />
                    </Avatar>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </nav>

      {/* Menú móvil */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={handleOpenSheet}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="lg:hidden">
          <div className="grid gap-2 py-6">
            <Link
              to={`/Soporte`}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              <Home className="h-10 w-10 px-2" />
              {t("navbar.support")}
            </Link>
            {/* Añadir enlaces de IA y Herramientas de IA en el menú móvil */}
            <Link
              to={`/IA`}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              <Home className="h-10 w-10 px-2" />
              IA
            </Link>
            <Link
              to={`/Herramientas-IA`}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              <Home className="h-10 w-10 px-2" />
              Herramientas de IA
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Configuración móvil */}
      <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <SheetTrigger asChild>
          <Button
            onClick={handleOpenSettings}
            variant="light"
            className="ml-auto lg:hidden"
          >
            <Settings />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-xl lg:hidden">
          <div className="flex gap-4 py-4 items-center">
            <div className="flex-1">
              <ModeToggle />
            </div>
            <div className="flex-1 ml-auto">
              <Select onValueChange={(lang) => changeLanguage(lang)}>
                <SelectTrigger className="w-full flex justify-center">
                  <Earth className="h-6 w-6" />
                </SelectTrigger>
                <SelectContent className="w-8">
                  <SelectGroup>
                    {/* Solo español e inglés */}
                    {["en", "es"].map((lang) => (
                      <SelectItem key={lang} value={lang} className="w-full">
                        <Avatar className="w-8 h-8 rounded-full border shadow-md">
                          <AvatarImage
                            src={`https://flagcdn.com/${lang === "en" ? "us" : "gt"}.svg`}
                            alt={`Flag of ${lang}`}
                            className="rounded-full object-cover"
                          />
                        </Avatar>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
