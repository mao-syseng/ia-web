import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  component: About,
  staticData: { breadcrumb: "About" },
});

function About() {
  return (
    <div className="p-4 md:p-6">
      <Card className="max-w-sm">
        <CardContent className="flex items-center justify-center ">
          <svg viewBox="0 0 21 21" fill="none">
            <rect x="20" y="9" width="1" height="1" fill="#171717" />
            <rect x="17" y="8" width="1" height="2" fill="#171717" />
            <rect x="16" y="9" width="1" height="1" fill="#171717" />
            <rect x="14" y="9" width="1" height="2" fill="#171717" />
            <rect x="17" y="15" width="1" height="2" fill="#171717" />
            <rect x="13" y="14" width="1" height="2" fill="#171717" />
            <rect x="13" y="14" width="1" height="2" transform="rotate(90 13 14)" fill="#171717" />
            <rect x="6" y="14" width="1" height="5" transform="rotate(90 6 14)" fill="#171717" />
            <rect x="6" y="20" width="1" height="5" transform="rotate(90 6 20)" fill="#171717" />
            <rect x="10" y="12" width="1" height="4" fill="#171717" />
            <rect x="8" y="13" width="1" height="2" fill="#171717" />
            <rect x="9" y="13" width="1" height="1" fill="#171717" />
            <rect x="9" y="11" width="1" height="1" fill="#171717" />
            <rect x="9" y="8" width="1" height="2" fill="#171717" />
            <rect x="11" y="7" width="1" height="1" fill="#171717" />
            <rect x="9" y="5" width="1" height="1" fill="#171717" />
            <rect x="8" y="5" width="1" height="2" fill="#171717" />
            <rect x="6" y="8" width="2" height="1" fill="#171717" />
            <rect y="8" width="5" height="1" fill="#171717" />
            <rect y="10" width="1" height="1" fill="#171717" />
            <rect x="4" y="9" width="1" height="1" fill="#171717" />
            <rect x="6" y="10" width="1" height="1" fill="#171717" />
            <rect x="8" y="3" width="1" height="1" fill="#171717" />
            <rect x="4" y="12" width="4" height="1" fill="#171717" />
            <rect x="2" y="16" width="3" height="3" fill="#171717" />
            <rect x="2" y="2" width="3" height="3" fill="#171717" />
            <rect x="16" y="2" width="3" height="3" fill="#171717" />
            <rect x="2" y="11" width="1" height="2" fill="#171717" />
            <rect x="1" y="12" width="1" height="1" fill="#171717" />
            <rect x="9" y="15" width="1" height="1" fill="#171717" />
            <rect x="10" y="17" width="1" height="1" fill="#171717" />
            <rect x="11" y="16" width="1" height="1" fill="#171717" />
            <rect x="10" y="19" width="1" height="1" fill="#171717" />
            <rect x="13" y="18" width="1" height="1" fill="#171717" />
            <rect x="15" y="18" width="1" height="1" fill="#171717" />
            <rect x="15" y="20" width="1" height="1" fill="#171717" />
            <rect x="14" y="15" width="1" height="1" fill="#171717" />
            <rect x="19" y="16" width="1" height="1" fill="#EF243A" />
            <rect x="19" y="14" width="1" height="1" fill="#171717" />
            <rect x="14" y="13" width="1" height="1" fill="#171717" />
            <rect x="14" y="12" width="1" height="1" fill="#171717" />
            <rect x="11" y="12" width="1" height="1" fill="#171717" />
            <rect x="11" y="10" width="1" height="1" fill="#171717" />
            <rect x="10" y="9" width="1" height="2" fill="#171717" />
            <rect x="8" y="8" width="1" height="4" fill="#171717" />
            <rect x="18" y="13" width="1" height="3" fill="#171717" />
            <rect x="16" y="15" width="1" height="2" fill="#171717" />
            <rect x="16" y="11" width="1" height="3" fill="#171717" />
            <rect x="17" y="11" width="1" height="3" fill="#171717" />
            <rect x="15" y="13" width="1" height="4" fill="#171717" />
            <rect x="20" y="15" width="1" height="2" fill="#171717" />
            <rect x="20" y="12" width="1" height="2" fill="#171717" />
            <rect x="19" y="8" width="1" height="3" fill="#171717" />
            <rect x="15" y="8" width="1" height="3" fill="#171717" />
            <rect x="13" y="8" width="1" height="4" fill="#171717" />
            <rect x="10" y="4" width="1" height="4" fill="#171717" />
            <rect x="12" y="4" width="1" height="3" fill="#171717" />
            <rect x="11" y="3" width="1" height="1" fill="#171717" />
            <rect x="11" y="1" width="1" height="1" fill="#171717" />
            <rect x="12" width="1" height="1" fill="#171717" />
            <rect x="9" width="1" height="1" fill="#171717" />
            <rect x="8" y="1" width="1" height="1" fill="#171717" />
            <rect x="9" y="2" width="1" height="1" fill="#171717" />
            <rect x="1" y="6" width="5" height="1" fill="#171717" />
            <rect x="1" width="5" height="1" fill="#171717" />
            <rect x="15" width="5" height="1" fill="#171717" />
            <rect x="15" y="6" width="5" height="1" fill="#171717" />
            <rect x="6" width="1" height="7" fill="#171717" />
            <rect width="1" height="7" fill="#171717" />
            <rect x="14" width="1" height="7" fill="#171717" />
            <rect x="20" width="1" height="7" fill="#171717" />
            <rect x="12" y="10" width="1" height="3" fill="#171717" />
            <rect x="18" y="9" width="1" height="3" fill="#171717" />
            <rect x="14" y="18" width="1" height="3" fill="#171717" />
            <rect x="12" y="18" width="1" height="3" fill="#171717" />
            <rect x="11" y="19" width="1" height="2" fill="#171717" />
            <rect x="9" y="19" width="1" height="2" fill="#171717" />
            <rect x="8" y="16" width="1" height="5" fill="#171717" />
            <rect x="6" y="14" width="1" height="7" fill="#171717" />
            <rect y="14" width="1" height="7" fill="#171717" />
            <rect x="16" y="17" width="1" height="1" fill="#EF243A" />
            <rect x="19" y="20" width="1" height="1" fill="#EF243A" />
            <rect x="20" y="18" width="1" height="3" fill="#EF243A" />
            <rect x="18" y="19" width="1" height="2" fill="#EF243A" />
            <rect x="16" y="19" width="1" height="2" fill="#EF243A" />
            <rect x="19" y="18" width="1" height="1" fill="#EF243A" />
          </svg>
        </CardContent>
      </Card>
    </div>
  );
}
