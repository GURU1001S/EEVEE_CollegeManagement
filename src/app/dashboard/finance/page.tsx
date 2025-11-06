'use client';

import {
  Banknote,
  Calendar,
  CheckCircle,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Home,
  Book,
  File,
  XCircle,
  Clock,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const feeBreakdown = [
  { item: 'Tuition Fee', amount: 75000, paid: 75000, status: 'Paid' },
  { item: 'Hostel Fee', amount: 20000, paid: 10000, status: 'Partial' },
  { item: 'Examination Fee', amount: 5000, paid: 0, status: 'Unpaid' },
  { item: 'Miscellaneous', amount: 2500, paid: 0, status: 'Unpaid' },
];

const totalFee = feeBreakdown.reduce((sum, item) => sum + item.amount, 0);
const totalPaid = feeBreakdown.reduce((sum, item) => sum + item.paid, 0);
const totalDue = totalFee - totalPaid;

const paymentHistory = [
  { id: 'INV001', date: '2024-07-20', amount: 75000, status: 'Paid', method: 'UPI' },
  { id: 'INV002', date: '2024-07-22', amount: 10000, status: 'Paid', method: 'Credit Card'},
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Paid':
      return <Badge className="bg-emerald-100 text-emerald-800"><CheckCircle className="mr-1 h-3 w-3" />Paid</Badge>;
    case 'Partial':
      return <Badge className="bg-amber-100 text-amber-800"><Clock className="mr-1 h-3 w-3" />Partial</Badge>;
    case 'Unpaid':
      return <Badge variant="destructive"><XCircle className="mr-1 h-3 w-3" />Unpaid</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};


export default function FinancePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Fee Payment</h1>
        <p className="text-muted-foreground">
          Manage your payments, view history, and download receipts.
        </p>
      </div>

       <Alert variant="destructive">
          <DollarSign className="h-4 w-4" />
          <AlertTitle>Payment Overdue!</AlertTitle>
          <AlertDescription>
            You have an outstanding balance of ₹{totalDue.toLocaleString()}. The due date was 5 days ago.
          </AlertDescription>
        </Alert>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle>Current Semester Fees</CardTitle>
                    <CardDescription>Due by: August 15, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Fee Type</TableHead>
                                <TableHead>Total Amount</TableHead>
                                <TableHead>Amount Paid</TableHead>
                                <TableHead>Pending</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {feeBreakdown.map((item) => (
                                <TableRow key={item.item}>
                                    <TableCell className="font-medium">{item.item}</TableCell>
                                    <TableCell>₹{item.amount.toLocaleString()}</TableCell>
                                    <TableCell>₹{item.paid.toLocaleString()}</TableCell>
                                    <TableCell className="font-semibold text-destructive">₹{(item.amount - item.paid).toLocaleString()}</TableCell>
                                    <TableCell className="text-right">{getStatusBadge(item.status)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
             </Card>

             <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>
                    Review your past fee payments and download receipts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Receipt ID</TableHead>
                        <TableHead>Payment Date</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paymentHistory.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell className="font-medium">{payment.id}</TableCell>
                          <TableCell>{payment.date}</TableCell>
                           <TableCell>{payment.method}</TableCell>
                          <TableCell>₹{payment.amount.toFixed(2)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">
                              <Download className="mr-2 h-3 w-3" />
                              Receipt
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
            <Card className="sticky top-8">
                <CardHeader>
                    <CardTitle>Fee Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="text-muted-foreground">Amount Pending</span>
                            <span className="text-3xl font-bold text-destructive">₹{totalDue.toLocaleString()}</span>
                        </div>
                         <Progress value={(totalPaid / totalFee) * 100} className="h-2" />
                    </div>
                     <Separator />
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Semester Fee</span>
                            <span className="font-medium">₹{totalFee.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Paid</span>
                            <span className="font-medium text-emerald-600">₹{totalPaid.toLocaleString()}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-stretch gap-2">
                    <Button size="lg" className="w-full">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Pay Total Due (₹{totalDue.toLocaleString()})
                    </Button>
                    <Button variant="outline" className="w-full">Pay Custom Amount</Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
