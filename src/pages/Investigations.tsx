import { Shield } from "lucide-react";
import { TransactionTable } from "@/components/TransactionTable";
import { MetricCard } from "@/components/MetricCard";

// Mock data for investigations
const mockInvestigations = [
  { id: "1", date: "2024-02-20", amount: 150000, type: "Wire Transfer", status: "flagged" as const, riskScore: 95 },
  { id: "2", date: "2024-02-19", amount: 75000, type: "International", status: "suspicious" as const, riskScore: 85 },
  { id: "3", date: "2024-02-18", amount: 250000, type: "ACH Transfer", status: "flagged" as const, riskScore: 92 },
];

const Investigations = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Active Investigations</h1>
          <p className="text-muted-foreground mt-2">Review and manage high-risk cases requiring immediate attention.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            title="High Risk Cases"
            value="12"
            description="4 require immediate action"
            icon={<Shield className="text-destructive" />}
            trend="up"
          />
          <MetricCard
            title="Average Risk Score"
            value="87.5"
            description="15% higher than usual"
            trend="up"
          />
          <MetricCard
            title="Total Value at Risk"
            value="$475,000"
            description="Across all cases"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">High Priority Cases</h2>
          <TransactionTable transactions={mockInvestigations} />
        </div>
      </div>
    </div>
  );
};

export default Investigations;