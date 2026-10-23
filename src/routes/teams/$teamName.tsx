import { createFileRoute, Link } from "@tanstack/react-router"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getAllEmployees, teams } from "@/employees"

export const Route = createFileRoute("/teams/$teamName")({
  component: TeamDetails,
  staticData: { breadcrumb: "Team details" },
})

function TeamDetails() {
  const { teamName } = Route.useParams()
  const team = teams.find((team) => team === teamName)

  if (!team) {
    return (
      <main className="p-4">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle>
              <h1>Team not found</h1>
            </CardTitle>
            <CardDescription>No team matches this team name.</CardDescription>
          </CardHeader>
        </Card>
      </main>
    )
  }

  const employees = getAllEmployees().filter(
    (employee) => employee.team === team
  )

  return (
    <main className="p-4">
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl font-semibold">{team}</h1>
          </CardTitle>
          <CardDescription>{employees.length} employees</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>All employees in the {team} team.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="text-right">Seniority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <Link
                      to="/employees/$employeeId"
                      params={{ employeeId: String(employee.id) }}
                      className="font-medium text-primary underline-offset-4 hover:underline focus-visible:underline"
                    >
                      {employee.name}
                    </Link>
                  </TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>{employee.level}</TableCell>
                  <TableCell className="text-right">
                    {employee.seniority}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  )
}
