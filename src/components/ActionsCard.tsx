import { getEmployeesByIds } from "../employees";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useCurrentCompany } from "@/hooks/useState";

const EmployeeTable = () => {
  const company = useCurrentCompany();
  const availableEmployees = getEmployeesByIds(company.availableEmployees);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Employees</CardTitle>
        <CardDescription>These people are available to put on a task</CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableCaption>{availableEmployees.length} employees available</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {availableEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.team}</TableCell>
                <TableCell>{employee.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          type="button"
          className="w-full"
          onClick={() => {}}
          disabled={availableEmployees.length === 0}
        >
          Employee
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EmployeeTable;
