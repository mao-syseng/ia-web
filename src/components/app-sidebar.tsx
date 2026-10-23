import { Link, useRouterState } from "@tanstack/react-router";
import {
  BadgeCheck,
  Bell,
  BookOpen,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  Check,
  GalleryVerticalEnd,
  Info,
  LayoutDashboard,
  LogOut,
  Plus,
  Sparkles,
  Settings2,
  UsersRound,
  Building2,
  Keyboard,
} from "lucide-react";
import { Collapsible } from "@base-ui/react/collapsible";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [{ title: "Dashboard", url: "/", icon: LayoutDashboard }] as const;

const workspaceItems = ["Talent Pool", "Competitor Actions", "The Roadmap"] as const;

const settingsItems = [
  { title: "Company Settings", url: "/settings/general" },
  { title: "Office Vibes", url: "/settings/appearance" },
] as const;

const discoverItems = [
  { title: "The Playbook", icon: BookOpen },
  { title: "Networking", icon: UsersRound },
  { title: "Shortcuts", icon: Keyboard },
] as const;

const user = {
  name: "John Doe",
  email: "john@iå.dk",
  initials: "JD",
};

const projects = [
  {
    name: "Series A",
    description: "Current venture",
  },
  {
    name: "Series B",
    description: "Scaling up",
  },
  {
    name: "Pivot Again",
    description: "Fresh start",
  },
] as const;

const currentSave = projects[0];

export function AppSidebar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-popup-open:bg-sidebar-accent data-popup-open:text-sidebar-accent-foreground"
                    aria-label={`Save menu: ${currentSave.name}`}
                  />
                }
              >
                <div className="flex aspect-square size-8 items-center justify-center bg-sidebar-primary text-sidebar-primary-foreground">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                    <rect y="1.8" width="1.8" height="1.8" fill="#fafafa" />
                    <rect x="5.3999" y="7.2" width="1.8" height="1.8" fill="#fafafa" />
                    <rect x="7.19995" y="3.6" width="1.8" height="5.4" fill="#fafafa" />
                    <rect x="3.6001" y="5.4" width="1.8" height="3.6" fill="#fafafa" />
                    <rect y="5.4" width="1.8" height="3.6" fill="#fafafa" />
                    <rect x="5.3999" y="3.6" width="1.8" height="1.8" fill="#fafafa" />
                    <rect x="5.3999" width="1.8" height="1.8" fill="#fafafa" />
                  </svg>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{currentSave.name}</span>
                  <span className="truncate text-xs">{currentSave.description}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-56"
                side={isMobile ? "bottom" : "right"}
                align="start"
                sideOffset={4}
              >
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Current Projects</DropdownMenuLabel>
                  {projects.map((project) => (
                    <DropdownMenuItem key={project.name}>
                      <GalleryVerticalEnd />
                      <div className="grid flex-1">
                        <span>{project.name}</span>
                        <span className="text-xs text-muted-foreground">{project.description}</span>
                      </div>
                      {project === currentSave && <Check className="ml-auto" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus />
                  New project
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <nav aria-label="Main navigation">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      isActive={pathname === item.url}
                      tooltip={item.title}
                      render={
                        <Link
                          to={item.url}
                          activeOptions={{ exact: true }}
                          onClick={() => setOpenMobile(false)}
                        />
                      }
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <Collapsible.Root
                  defaultOpen
                  render={<SidebarMenuItem className="group/collapsible" />}
                >
                  <Collapsible.Trigger render={<SidebarMenuButton tooltip="Workspaces" />}>
                    <Building2 />
                    <span>Workspaces</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
                  </Collapsible.Trigger>
                  <Collapsible.Panel>
                    <SidebarMenuSub>
                      {workspaceItems.map((item) => (
                        <SidebarMenuSubItem key={item}>
                          <SidebarMenuSubButton render={<button type="button" />}>
                            <span>{item}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </Collapsible.Panel>
                </Collapsible.Root>
                <Collapsible.Root
                  defaultOpen={pathname.startsWith("/settings")}
                  render={<SidebarMenuItem className="group/collapsible" />}
                >
                  <Collapsible.Trigger render={<SidebarMenuButton tooltip="Settings" />}>
                    <Settings2 />
                    <span>Settings</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
                  </Collapsible.Trigger>
                  <Collapsible.Panel>
                    <SidebarMenuSub>
                      {settingsItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton
                            isActive={pathname === item.url}
                            render={
                              <Link
                                to={item.url}
                                activeOptions={{ exact: true }}
                                onClick={() => setOpenMobile(false)}
                              />
                            }
                          >
                            <span>{item.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton render={<button type="button" />}>
                          <span>Notifications</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </Collapsible.Panel>
                </Collapsible.Root>
              </SidebarMenu>
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Discover</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {discoverItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={pathname === "/about"}
                  tooltip="About"
                  render={
                    <Link
                      to="/about"
                      activeOptions={{ exact: true }}
                      onClick={() => setOpenMobile(false)}
                    />
                  }
                >
                  <Info />
                  <span>About</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-popup-open:bg-sidebar-accent data-popup-open:text-sidebar-accent-foreground"
                    aria-label={`User menu for ${user.name}`}
                  />
                }
              >
                <Avatar>
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-56"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm">
                      <Avatar>
                        <AvatarFallback>{user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{user.name}</span>
                        <span className="truncate text-xs">{user.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Demo account - links coming soon</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
