import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/settings/")({
  component: Settings,
});

function Settings() {
  return (
    <main className="space-y-4 p-4">
      <h1 className="text-xl font-semibold">Settings</h1>
      <p className="text-sm text-muted-foreground">
        Choose a mock settings page to explore.
      </p>
      <div className="flex gap-2">
        <Button variant="outline" render={<Link to="/settings/general" />}>
          General
        </Button>
        <Button variant="outline" render={<Link to="/settings/appearance" />}>
          Appearance
        </Button>
      </div>
    </main>
  );
}
