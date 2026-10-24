import { getEmployeesByIds } from "../employees";
import { Link } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { useCurrentCompany } from "@/hooks/useState";

const BusyEmployeesCard = () => {
  const company = useCurrentCompany();
  const employees = getEmployeesByIds(company.employees);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Busy Employees</CardTitle>
        <CardDescription>
          These employees are currently busy and unavailable for new tasks. New employees will be
          available next quarter.
        </CardDescription>
      </CardHeader>

      <CardContent className="max-h-90 overflow-y-auto">
        <Table>
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
        </Table>
      </CardContent>
    </Card>
  );
};

export default BusyEmployeesCard;
