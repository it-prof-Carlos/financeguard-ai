import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down";
  className?: string;
}

export function MetricCard({ title, value, description, icon, trend, className }: MetricCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
            {trend && (
              <span className={cn("ml-1", trend === "up" ? "text-chart-red" : "text-chart-green")}>
                {trend === "up" ? "↑" : "↓"}
              </span>
            )}
          </p>
        )}
      </CardContent>
    </Card>
  );
}