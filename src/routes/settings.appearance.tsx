import { createFileRoute } from "@tanstack/react-router";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/settings/appearance")({
  component: AppearanceSettings,
  staticData: { breadcrumb: "Appearance" },
});

function AppearanceSettings() {
  return (
    <main className="space-y-4 p-4">
      <h1 className="text-xl font-semibold">Appearance</h1>
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Appearance settings</CardTitle>
          <CardDescription>
            This is a mock page for theme and display preferences. You can still
            switch themes using the header button.
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
