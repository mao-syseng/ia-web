import { Link } from "@tanstack/react-router";
import { getEmployeesByIds } from "@/employees";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const InitiativeCard = ({ title, employeeIds }: { title: string; employeeIds: number[] }) => {
  const employees = getEmployeesByIds(employeeIds);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Employees assigned to this initiative</CardDescription>
      </CardHeader>
      <CardContent className="max-h-90 overflow-y-auto">
        <Table>
          <TableCaption>
            {employees.length} {employees.length === 1 ? "employee" : "employees"} assigned
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                  No employees assigned yet.
                </TableCell>
              </TableRow>
            ) : (
              employees.map((employee) => (
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
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default InitiativeCard;
