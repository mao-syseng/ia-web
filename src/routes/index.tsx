import { useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { z } from "zod";
import { getAllEmployees } from "@/employees";
import { shuffle } from "remeda";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ActionsCard, { type InitiativeKey } from "@/components/ActionsCard";
import BusyEmployeesCard from "@/components/BusyEmployeesCard";
import InitiativeCard from "@/components/InitiativeCard";

const companySchema = z.object({
  // Only 2 actions per turn
  actionsUsed: z.number().int().min(0).max(2).default(0),
  // Your "deck"
  employees: z
    .number()
    .array()
    .max(52)
    .default(shuffle(getAllEmployees().map((e) => e.id))),
  // Your "hand"
  availableEmployees: z.number().array().max(5).default([]),
  // Initiatives work like level ups.
  // When an initiative is reached, it is finished on the roadmap.
  // Progress to lvl1
  initiativeOneEmployees: z.number().array().max(25).default([]),
  // Progress to lv2
  initiativeTwoEmployees: z.number().array().max(35).default([]),
  // Progress to lv3
  initiativeThreeEmployees: z.number().array().max(45).default([]),
});

const currentProjectSchema = z.object({
  projectStarted: z.boolean().default(false),
  turnCount: z.number().default(0),
  // Indicates whose turn it is
  currentTurn: z.enum(["company", "competitor"]).default("company"),
  // Player 1 state
  company: companySchema.prefault({}),
  // Player 2 state
  competitor: companySchema.prefault({}),
});

function startTurn(company: z.infer<typeof companySchema>): z.infer<typeof companySchema> {
  const availableIds = shuffle(company.employees).slice(
    0,
    Math.max(0, 5 - company.availableEmployees.length),
  );

  return {
    ...company,
    actionsUsed: 0,
    employees: company.employees.filter((id) => !availableIds.includes(id)),
    availableEmployees: [...company.availableEmployees, ...availableIds],
  };
}

function takeAction(
  project: z.infer<typeof currentProjectSchema>,
): z.infer<typeof currentProjectSchema> {
  const company = project[project.currentTurn];
  return {
    ...project,
    [project.currentTurn]: { ...company, actionsUsed: Math.min(2, company.actionsUsed + 1) },
  };
}

export const Route = createFileRoute("/")({
  validateSearch: currentProjectSchema,
  component: RouteComponent,
});

const mockCards = [
  {
    title: "Company balance",
    description: "Mock financial overview",
    items: ["Available funds: $124,500", "Monthly expenses: $18,200"],
  },
  {
    title: "Product roadmap",
    description: "Mock initiatives for your next few turns",
    items: [
      "Launch the first prototype",
      "Interview five potential customers",
      "Build the onboarding flow",
      "Run a private beta",
      "Review customer feedback",
      "Prepare for launch",
    ],
  },
  {
    title: "Next milestone",
    description: "Mock company objective",
    items: ["Reach your first 100 customers."],
  },
  {
    title: "Recent activity",
    description: "Mock updates from your team",
    items: [
      "Engineering shipped a new prototype.",
      "Design finished the customer journey map.",
      "Sales booked three discovery calls.",
      "Marketing published the launch announcement.",
    ],
  },
  {
    title: "Team morale",
    description: "Mock team pulse",
    items: ["Your team is feeling optimistic.", "Keep workloads balanced to maintain momentum."],
  },
  {
    title: "Market insights",
    description: "Mock research notes",
    items: [
      "Customers want a faster way to get started without a lengthy setup process.",
      "Small teams value clear pricing and tools that fit into their existing workflow.",
      "The next research round will focus on which features help customers return each week.",
    ],
  },
  {
    title: "Weekly revenue",
    description: "Mock sales snapshot",
    items: ["$8,420 earned this week."],
  },
  {
    title: "Hiring pipeline",
    description: "Mock recruiting progress",
    items: [
      "12 applications received",
      "6 candidates shortlisted",
      "4 introductory calls scheduled",
      "3 technical interviews completed",
      "2 references requested",
      "1 offer ready for review",
      "Next hiring round opens Monday.",
    ],
  },
  {
    title: "Customer feedback",
    description: "Mock notes from recent conversations",
    items: [
      "“Our team finished setup in one afternoon. The guided onboarding made it easy to bring everyone along.”",
      "“A shared view of upcoming tasks would help us plan our week without jumping between tools.”",
      "“We would love a weekly email with our progress and the next actions to take.”",
    ],
  },
  {
    title: "Runway",
    description: "Mock funding estimate",
    items: ["6.8 months at the current spending rate.", "Budget review due next turn."],
  },
  {
    title: "Sprint backlog",
    description: "Mock tasks for the engineering team",
    items: [
      "Improve the welcome screen",
      "Add workspace invitations",
      "Polish empty states",
      "Review keyboard navigation",
      "Optimize the employee directory",
      "Add project notifications",
      "Prepare release notes",
      "Run the launch checklist",
      "Share the demo with the team",
    ],
  },
  {
    title: "Office update",
    description: "Mock team announcement",
    items: ["The next team demo is Friday at 14:00."],
  },
  {
    title: "Competitor watch",
    description: "Mock market movements",
    items: [
      "A competitor has introduced a new starter plan aimed at small teams.",
      "Two new companies entered the market this month, both focusing on automated reporting.",
      "Your customer support response time remains a strong advantage.",
      "Review positioning after the next customer research session.",
    ],
  },
  {
    title: "Upcoming expenses",
    description: "Mock payments for this month",
    items: [
      "Cloud hosting: $420",
      "Software subscriptions: $680",
      "Office rent: $2,400",
      "Research incentives: $300",
      "Team learning budget: $500",
    ],
  },
  {
    title: "Customer retention",
    description: "Mock engagement metric",
    items: ["92% of customers returned this month.", "Up 4 percentage points from last month."],
  },
  {
    title: "Launch checklist",
    description: "Mock preparation for the public release",
    items: [
      "Confirm the release date",
      "Approve landing page copy",
      "Record a product walkthrough",
      "Prepare help center articles",
      "Test the signup flow",
      "Schedule the announcement",
      "Assign launch day support",
      "Set up customer feedback sessions",
    ],
  },
  {
    title: "Team spotlight",
    description: "Mock recognition",
    items: [
      "The design team turned this week's customer interviews into a clearer onboarding experience.",
      "Next week they will share the prototype and collect feedback from the rest of the company.",
    ],
  },
  {
    title: "Partnership opportunities",
    description: "Mock business development notes",
    items: [
      "Local startup hub: discuss a joint workshop.",
      "Analytics provider: explore an integration.",
      "Founder community: arrange a product demo.",
      "Industry newsletter: share the launch story.",
      "University incubator: plan a mentoring session.",
      "Follow up on open conversations next turn.",
    ],
  },
];

function MockCards({ cards }: { cards: typeof mockCards }) {
  return cards.map((card) => (
    <Card key={card.title}>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {card.items.map((item) => (
            <li key={item} className="border-b pb-3 last:border-0 last:pb-0">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  ));
}

export function RouteComponent() {
  const router = useRouter();
  const navigate = Route.useNavigate();
  const project = Route.useSearch();
  const { currentTurn, projectStarted, company, competitor } = project;
  const currentCompany = currentTurn === "company" ? company : competitor;
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const copyTurnUrl = async () => {
    if (currentCompany.actionsUsed < 2) return;

    const nextTurn = currentTurn === "company" ? "competitor" : "company";
    const location = router.buildLocation({
      to: "/",
      hash: window.location.hash.slice(1),
      search: {
        ...project,
        currentTurn: nextTurn,
        projectStarted: true,
        turnCount: project.turnCount + 1,
        [nextTurn]: startTurn(project[nextTurn]),
      },
    });

    try {
      await navigator.clipboard.writeText(new URL(location.href, window.location.href).href);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  };

  const waitUntilNextQuarter = async () => {
    await navigate({
      search: (previous) => {
        if (previous.projectStarted || previous.currentTurn !== currentTurn) return previous;

        return {
          ...previous,
          projectStarted: true,
          turnCount: previous.turnCount + 1,
          [previous.currentTurn]: startTurn(previous[previous.currentTurn]),
        };
      },
    });
    setCopyStatus("idle");
  };

  const assignEmployees = (initiative: InitiativeKey, employeeIds: number[]) =>
    navigate({
      search: (previous) => {
        if (!previous.projectStarted || previous.currentTurn !== currentTurn) return previous;

        const company = previous[previous.currentTurn];
        if (company.actionsUsed >= 2) return previous;
        const assignedIds = company.availableEmployees.filter((id) => employeeIds.includes(id));
        const capacity = {
          initiativeOneEmployees: 25,
          initiativeTwoEmployees: 35,
          initiativeThreeEmployees: 45,
        }[initiative];

        if (
          assignedIds.length === 0 ||
          company[initiative].length + assignedIds.length > capacity
        ) {
          return previous;
        }

        return takeAction({
          ...previous,
          [currentTurn]: {
            ...company,
            availableEmployees: company.availableEmployees.filter(
              (id) => !assignedIds.includes(id),
            ),
            [initiative]: [...company[initiative], ...assignedIds],
          },
        });
      },
    });

  return (
    <div className="px-6 py-2">
      {/* Each column stacks independently. JSX order controls the card order. */}
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex min-w-0 flex-col gap-6">
          <BusyEmployeesCard />
          <MockCards cards={mockCards.slice(0, 3)} />
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <ActionsCard
            key={`${currentTurn}-${project.turnCount}`}
            currentTurn={currentTurn}
            projectStarted={projectStarted}
            copyStatus={copyStatus}
            onCopyTurnUrl={copyTurnUrl}
            onWaitUntilNextQuarter={waitUntilNextQuarter}
            onAssign={assignEmployees}
          />
          <MockCards cards={mockCards.slice(3, 8)} />
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <InitiativeCard
            title="Initiative 1"
            employeeIds={currentCompany.initiativeOneEmployees}
          />
          <InitiativeCard
            title="Initiative 2"
            employeeIds={currentCompany.initiativeTwoEmployees}
          />
          <InitiativeCard
            title="Initiative 3"
            employeeIds={currentCompany.initiativeThreeEmployees}
          />
          <MockCards cards={mockCards.slice(8, 13)} />
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <MockCards cards={mockCards.slice(13)} />
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
