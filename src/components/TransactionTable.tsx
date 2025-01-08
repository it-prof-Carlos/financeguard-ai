import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: string;
  status: "normal" | "suspicious" | "flagged";
  riskScore: number;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const getRiskColor = (score: number) => {
    if (score >= 80) return "bg-alert-high text-destructive";
    if (score >= 50) return "bg-alert-medium text-destructive";
    return "bg-alert-low text-orange-700";
  };

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "suspicious":
        return <Badge variant="outline" className="bg-alert-medium text-destructive">Suspicious</Badge>;
      case "flagged":
        return <Badge variant="outline" className="bg-alert-high text-destructive">Flagged</Badge>;
      default:
        return <Badge variant="outline" className="bg-muted">Normal</Badge>;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Risk Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>${transaction.amount.toLocaleString()}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{getStatusBadge(transaction.status)}</TableCell>
              <TableCell>
                <span className={cn("px-2 py-1 rounded-full text-sm", getRiskColor(transaction.riskScore))}>
                  {transaction.riskScore}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}