import { getEmployeesByIds } from "../employees"
import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { useCurrentCompany } from "@/hooks/useState"

const BusyEmployeesCard = () => {
  const company = useCurrentCompany()
  const employees = getEmployeesByIds(company.employees)
  const availableEmployees = getEmployeesByIds(company.availableEmployees)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Busy Employees</CardTitle>
        <CardDescription>
          These employees are currently busy and unavailable for new tasks
        </CardDescription>
      </CardHeader>

      <CardContent className="max-h-90 overflow-y-auto">
        <Table>
          <TableCaption>
            {availableEmployees.length} of {employees.length} employees
            available
          </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Role</TableHead>
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
                <TableCell>
                  <Link
                    to="/teams/$teamName"
                    params={{ teamName: employee.team }}
                    className="text-primary underline-offset-4 hover:underline focus-visible:underline"
                  >
                    {employee.team}
                  </Link>
                </TableCell>
                <TableCell>{employee.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total Employees</TableCell>
              <TableCell className="text-right">{employees.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          type="button"
          className="w-full"
          onClick={() => {}}
          disabled={availableEmployees.length === 0}
        >
          Hire Employee
        </Button>
      </CardFooter>
    </Card>
  )
}

export default BusyEmployeesCard
