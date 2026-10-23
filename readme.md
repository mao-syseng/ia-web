# React + TypeScript + Vite + shadcn/ui

This is a template for a new Vite project with React, TypeScript, and shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `src/components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## Navigation

The root route uses shadcn/ui's `SidebarProvider`, `SidebarInset`, and
`SidebarTrigger`, with a Dashboard link to `/` in `src/components/app-sidebar.tsx`.
An About link to `/about` appears last in the Discover group.
The current page is highlighted. The trigger collapses the desktop sidebar to
icons with tooltips or opens the mobile sheet, which closes when a navigation
link is selected.

The header shows shadcn breadcrumbs after the sidebar trigger, using TanStack
Router matches and each route's `staticData.breadcrumb` label. The root label is
Dashboard; nested pages add their own label, with parent breadcrumbs rendered as
TanStack Router links.

Settings has simple mock General and Appearance pages at `/settings/general` and
`/settings/appearance`, linked from the sidebar and search dialog. Both are nested
under `/settings`, so their breadcrumbs show Dashboard > Settings > General (or
Appearance). Clicking the Settings breadcrumb opens a page linking to both mocks.
The active settings link is highlighted, and the settings group starts expanded
when loading a settings URL. Notifications remains a placeholder.

The page header's Search button opens a shadcn command dialog for navigating to
Dashboard, About, or either settings mock. The SunMoon button toggles light and dark mode, as do Cmd+D
(macOS), Ctrl+D, and the existing plain D shortcut when not editing a field.
Theme choices are persisted by the theme provider.

The sidebar header opens a mock save menu, showing the current save and three
example slots plus a New save item. Save switching and creation are disabled
placeholders until persistence is implemented.

Its footer opens a mock user menu with
an initials avatar, name, email, and Upgrade to Pro, Account, Billing,
Notifications, and Log out items. These items are disabled placeholders until
their pages and actions are implemented.

## Idea

Pretend it is normal website with pages for ressources, different views, standard UI elements, but business logic is a card game. Like 52 Duels for example.

Could have a Home page for going to different pages that gives overview of the levels, the cards, abilities, opponent, items.

Need multiple cards that show stats and the deck table should be empty, you need to press button to load the cards, to shuffle and so on.

The deck's "Use symbols" switch toggles between suit and rank names (for example, "spades" and "ace") and Unicode suit symbols with compact ranks (A, 2-10, J, Q, K). Text mode is the default.

### UI

Add logout, billing, upgrade to pro and all those kind of pages, look at shadcn sidebar for reference. And then just goes to a page that shows stuff and all of it is free and on current plan.

Logout can just reset your url and give a warning first.
