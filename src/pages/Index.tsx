import { AlertTriangle, ArrowUpRight, DollarSign, Shield } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { TransactionTable } from "@/components/TransactionTable";
import { RiskChart } from "@/components/RiskChart";

// Mock data - in a real app, this would come from an API
const mockTransactions = [
  { id: "1", date: "2024-02-20", amount: 50000, type: "Wire Transfer", status: "suspicious" as const, riskScore: 75 },
  { id: "2", date: "2024-02-20", amount: 1200, type: "Card Payment", status: "normal" as const, riskScore: 20 },
  { id: "3", date: "2024-02-19", amount: 25000, type: "ACH Transfer", status: "flagged" as const, riskScore: 90 },
  { id: "4", date: "2024-02-19", amount: 3500, type: "Wire Transfer", status: "normal" as const, riskScore: 30 },
  { id: "5", date: "2024-02-18", amount: 15000, type: "International", status: "suspicious" as const, riskScore: 65 },
];

const mockChartData = [
  { timestamp: "00:00", riskScore: 20, transactions: 150 },
  { timestamp: "04:00", riskScore: 35, transactions: 200 },
  { timestamp: "08:00", riskScore: 45, transactions: 350 },
  { timestamp: "12:00", riskScore: 30, transactions: 400 },
  { timestamp: "16:00", riskScore: 60, transactions: 300 },
  { timestamp: "20:00", riskScore: 40, transactions: 250 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Crime Dashboard</h1>
          <p className="text-muted-foreground mt-2">Monitor and analyze financial transactions in real-time.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Alerts"
            value="24"
            description="12% increase from yesterday"
            icon={<AlertTriangle className="text-destructive" />}
            trend="up"
          />
          <MetricCard
            title="Monitored Transactions"
            value="$2.4M"
            description="Last 24 hours"
            icon={<DollarSign />}
          />
          <MetricCard
            title="Average Risk Score"
            value="45.8"
            description="5% decrease from yesterday"
            icon={<Shield />}
            trend="down"
          />
          <MetricCard
            title="Active Investigations"
            value="8"
            description="3 high priority"
            icon={<ArrowUpRight />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <RiskChart data={mockChartData} />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Recent Transactions</h2>
          <TransactionTable transactions={mockTransactions} />
        </div>
      </div>
    </div>
  );
};

export default Index;