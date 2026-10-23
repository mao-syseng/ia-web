import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getEmployeesByIds } from "@/employees";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employees/$employeeId")({
  component: RouteComponent,
  staticData: { breadcrumb: "Employee details" },
});

function RouteComponent() {
  const id = Number(Route.useParams().employeeId);
  const employee = getEmployeesByIds([id])[0];

  if (!employee) {
    return (
      <main className="p-4">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>
              <h1>Employee not found</h1>
            </CardTitle>
            <CardDescription>No employee matches this employee ID.</CardDescription>
          </CardHeader>
        </Card>
      </main>
    );
  }

  const initials = employee.name
    .split(" ")
    .map((part) => part[0])
    .join("");
  const details = [
    { label: "Team", value: employee.team },
    { label: "Level", value: employee.level },
    { label: "Seniority", value: employee.seniority },
    { label: "Employee ID", value: employee.id },
  ];

  return (
    <main className="p-4">
      <Card className="max-w-xl">
        <CardHeader className="border-b">
          <div className="flex items-center gap-3">
            <Avatar size="lg" aria-hidden="true">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <CardTitle>
                <h1 className="text-xl font-semibold wrap-break-word">{employee.name}</h1>
              </CardTitle>
              <CardDescription>{employee.role}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-4 sm:grid-cols-2">
            {details.map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </main>
  );
}
