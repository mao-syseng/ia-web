import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getEmployeesByIds } from "../employees";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

const initiatives = [
  { key: "initiativeOneEmployees", label: "Initiative 1", capacity: 25 },
  { key: "initiativeTwoEmployees", label: "Initiative 2", capacity: 35 },
  { key: "initiativeThreeEmployees", label: "Initiative 3", capacity: 45 },
] as const;

export type InitiativeKey = (typeof initiatives)[number]["key"];

const EmployeeTable = ({
  currentTurn,
  projectStarted,
  copyStatus,
  onCopyTurnUrl,
  onWaitUntilNextQuarter,
  onAssign,
}: {
  currentTurn: "company" | "competitor";
  projectStarted: boolean;
  copyStatus: "idle" | "copied" | "error";
  onCopyTurnUrl: () => Promise<void>;
  onWaitUntilNextQuarter: () => Promise<void>;
  onAssign: (initiative: InitiativeKey, employeeIds: number[]) => Promise<void>;
}) => {
  const company = useCurrentCompany();
  const actionsRemaining = 2 - company.actionsUsed;
  const turnFinished = actionsRemaining === 0;
  const turnDescription = `${currentTurn === "company" ? "Company" : "Competitor"} turn · ${actionsRemaining} ${actionsRemaining === 1 ? "action" : "actions"} remaining`;
  const availableEmployees = getEmployeesByIds(company.availableEmployees);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<number[]>([]);
  const selectedIds = availableEmployees
    .filter((employee) => selectedEmployeeIds.includes(employee.id))
    .map((employee) => employee.id);

  if (!projectStarted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Available Employees</CardTitle>
          <CardDescription>
            {turnDescription}.{" "}
            Your employees are busy. Wait until next quarter for employees to become available.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button type="button" className="w-full" onClick={onWaitUntilNextQuarter}>
            Wait until next quarter
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Employees</CardTitle>
        <CardDescription>
          {turnDescription}. Assigning selected employees uses one action.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Table>
          <TableCaption>{availableEmployees.length} employees available</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <span className="sr-only">Select employees</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {availableEmployees.map((employee) => (
              <TableRow
                key={employee.id}
                data-state={selectedIds.includes(employee.id) ? "selected" : undefined}
              >
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${employee.name}`}
                    checked={selectedIds.includes(employee.id)}
                    disabled={turnFinished}
                    onCheckedChange={(checked) => {
                      setSelectedEmployeeIds((ids) =>
                        checked ? [...ids, employee.id] : ids.filter((id) => id !== employee.id),
                      );
                    }}
                  />
                </TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.team}</TableCell>
                <TableCell>{employee.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        {turnFinished && (
          <>
            <Button type="button" className="w-full" onClick={onCopyTurnUrl}>
              {copyStatus === "copied" ? "Link copied" : "Copy URL for competitor"}
            </Button>
            {copyStatus === "error" && (
              <p role="alert" className="text-sm text-destructive">
                Could not copy the link. Please try again.
              </p>
            )}
          </>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button type="button" className="w-full" />}
            disabled={turnFinished || selectedIds.length === 0}
          >
            Assign selected employees
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {initiatives.map((initiative) => (
              <DropdownMenuItem
                key={initiative.key}
                disabled={company[initiative.key].length + selectedIds.length > initiative.capacity}
                onClick={async () => {
                  await onAssign(initiative.key, selectedIds);
                  setSelectedEmployeeIds([]);
                }}
              >
                {initiative.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
};

export default EmployeeTable;
