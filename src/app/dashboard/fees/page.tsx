'use client';

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
  Download,
  CreditCard,
  DollarSign,
  FileText,
  Book,
  Home,
  File,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';

const feeBreakdown = [
  { item: 'Tuition Fee', amount: 75000, icon: Book },
  { item: 'Hostel Fee', amount: 20000, icon: Home },
  { item: 'Examination Fee', amount: 5000, icon: File },
  { item: 'Miscellaneous', amount: 2500, icon: DollarSign },
];

const paymentHistory = [
  { id: 'INV001', date: '2023-10-15', amount: 102500, status: 'Paid' },
  { id: 'INV002', date: '2023-04-15', amount: 102500, status: 'Paid' },
  { id: 'INV003', date: '2022-10-15', amount: 98000, status: 'Paid' },
];

const totalFee = feeBreakdown.reduce((sum, item) => sum + item.amount, 0);

export default function FeesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Fee Payment</h1>
        <p className="text-muted-foreground">
          Manage your payments and view fee details.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Current Semester Fees</CardTitle>
              <CardDescription>Due by: August 15, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {feeBreakdown.map((item) => (
                  <li key={item.item} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span>{item.item}</span>
                    </div>
                    <span className="font-medium">₹{item.amount.toFixed(2)}</span>
                  </li>
                ))}
                <Separator />
                <li className="flex justify-between items-center font-bold text-lg">
                  <span>Total Amount</span>
                  <span>₹{totalFee.toFixed(2)}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <CreditCard className="mr-2 h-4 w-4" />
                Pay Now
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2">
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
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Payment Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>₹{payment.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                          {payment.status}
                        </span>
                      </TableCell>
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
      </div>
    </div>
  );
}
