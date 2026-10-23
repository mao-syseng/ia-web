import { Fragment, useEffect, useState } from "react";
import { createRootRoute, Link, Outlet, useMatches, useNavigate } from "@tanstack/react-router";
import { Info, LayoutDashboard, Settings2, SunMoon } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    breadcrumb?: string;
  }
}

function RootLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const breadcrumbs = useMatches({
    select: (matches) =>
      matches.flatMap((match) =>
        match.staticData.breadcrumb
          ? [{ id: match.id, pathname: match.pathname, label: match.staticData.breadcrumb }]
          : [],
      ),
  });
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0">
        <header className="flex h-12 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:self-center data-vertical:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((breadcrumb, index) => (
                <Fragment key={breadcrumb.id}>
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink render={<Link to={breadcrumb.pathname} />}>
                        {breadcrumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <Button
            variant="outline"
            className="ml-auto w-40 min-w-0 shrink justify-start text-muted-foreground"
            aria-haspopup="dialog"
            aria-expanded={searchOpen}
            aria-keyshortcuts="Meta+K Control+K"
            onClick={() => setSearchOpen(true)}
          >
            <span>Search...</span>
            <kbd className="ml-auto rounded border px-1.5 py-0.5 text-[10px] font-medium">⌘ K</kbd>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            aria-keyshortcuts="Meta+D Control+D"
            title="Toggle theme (Cmd+D / Ctrl+D)"
          >
            <SunMoon />
          </Button>
        </header>
        <Outlet />
      </SidebarInset>
      <CommandDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        title="Search"
        description="Search for a page to navigate to."
      >
        <Command>
          <CommandInput placeholder="Search pages..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              <CommandItem
                value="Dashboard"
                keywords={["Home"]}
                onSelect={() => {
                  setSearchOpen(false);
                  void navigate({ to: "/" });
                }}
              >
                <LayoutDashboard />
                Dashboard
              </CommandItem>
              <CommandItem
                value="About"
                onSelect={() => {
                  setSearchOpen(false);
                  void navigate({ to: "/about" });
                }}
              >
                <Info />
                About
              </CommandItem>
              <CommandItem
                value="General settings"
                onSelect={() => {
                  setSearchOpen(false);
                  void navigate({ to: "/settings/general" });
                }}
              >
                <Settings2 />
                General settings
              </CommandItem>
              <CommandItem
                value="Appearance settings"
                onSelect={() => {
                  setSearchOpen(false);
                  void navigate({ to: "/settings/appearance" });
                }}
              >
                <SunMoon />
                Appearance settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </SidebarProvider>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  staticData: { breadcrumb: "Dashboard" },
});
