import { BarChart, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { RiskChart } from "@/components/RiskChart";

const mockChartData = [
  { timestamp: "Week 1", riskScore: 45, transactions: 280 },
  { timestamp: "Week 2", riskScore: 52, transactions: 320 },
  { timestamp: "Week 3", riskScore: 48, transactions: 350 },
  { timestamp: "Week 4", riskScore: 60, transactions: 290 },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Reports</h1>
          <p className="text-muted-foreground mt-2">Monthly analysis and compliance reporting dashboard.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            title="Generated Reports"
            value="24"
            description="This month"
            icon={<FileText />}
          />
          <MetricCard
            title="Risk Trend"
            value="+12%"
            description="Month over month"
            icon={<TrendingUp />}
            trend="up"
          />
          <MetricCard
            title="Compliance Score"
            value="94%"
            description="Above target"
            icon={<BarChart />}
          />
        </div>

        <div className="grid gap-4">
          <RiskChart data={mockChartData} />
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Monthly Risk Assessment", "Suspicious Activity Report", "Compliance Review"].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <span>{report}</span>
                    </div>
                    <button className="text-primary hover:underline">View</button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;