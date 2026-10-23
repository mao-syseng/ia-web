import { createFileRoute } from "@tanstack/react-router";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/settings/general")({
  component: GeneralSettings,
  staticData: { breadcrumb: "General" },
});

function GeneralSettings() {
  return (
    <main className="space-y-4 p-4">
      <h1 className="text-xl font-semibold">General</h1>
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>General settings</CardTitle>
          <CardDescription>
            This is a mock page for profile and account preferences. No settings
            are saved yet.
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
