'use client';

import {
  Book,
  BookCopy,
  BookMarked,
  BookOpenCheck,
  Calendar,
  ChevronDown,
  Clock,
  Download,
  Filter,
  History,
  Library as LibraryIcon,
  Search,
  Sparkles,
  User,
  Wallet,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const books = [
  {
    id: 1,
    title: 'Data Structures and Algorithms',
    author: 'Narasimha Karumanchi',
    isbn: '978-0984782857',
    status: 'Available',
    copies: 3,
    location: 'Shelf A-12',
    coverUrl: 'https://picsum.photos/seed/book1/200/300',
  },
  {
    id: 2,
    title: 'Introduction to the Theory of Computation',
    author: 'Michael Sipser',
    isbn: '978-1133187790',
    status: 'Issued',
    copies: 2,
    location: 'Shelf B-04',
    coverUrl: 'https://picsum.photos/seed/book2/200/300',
    dueDate: '2024-08-10',
  },
  {
    id: 3,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    isbn: '978-0618640157',
    status: 'Available',
    copies: 5,
    location: 'Shelf F-01',
    coverUrl: 'https://picsum.photos/seed/book3/200/300',
  },
  {
    id: 4,
    title: 'Dune',
    author: 'Frank Herbert',
    isbn: '978-0441013593',
    status: 'Reference Only',
    copies: 1,
    location: 'Ref-03',
    coverUrl: 'https://picsum.photos/seed/book4/200/300',
  },
  {
    id: 5,
    title: 'Quantum Physics for Dummies',
    author: 'Steven Holzner',
    isbn: '978-1118460824',
    status: 'Available',
    copies: 4,
    location: 'Shelf P-09',
    coverUrl: 'https://picsum.photos/seed/book5/200/300',
  },
];

const myLoans = [
    { ...books[1], fine: '₹ 12.00', daysOverdue: 6 },
    { ...books[0], dueDate: '2024-08-25', fine: '₹ 0.00', daysOverdue: 0 }
]

const digitalResources = [
    { title: "IEEE Xplore", description: "Technical literature in electrical engineering, computer science, and electronics." },
    { title: "JSTOR", description: "Access to more than 12 million academic journal articles, books, and primary sources." },
    { title: "ScienceDirect", description: "Leading platform of peer-reviewed scholarly literature." },
    { title: "SpringerLink", description: "Scientific documents from journals, books, series, protocols, and reference works." },
]

const SearchCatalog = () => (
  <div className="space-y-6">
    <Card>
      <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by title, author, ISBN..." className="pl-10" />
        </div>
        <div className="flex gap-2">
            <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
            <Button>Search</Button>
        </div>
      </CardContent>
    </Card>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <Card key={book.id} className="flex flex-col">
            <CardHeader className="p-4 flex-row gap-4 items-start">
                <Image src={book.coverUrl} alt={book.title} width={80} height={120} className="rounded-md" data-ai-hint="book cover" />
                <div className="flex-1 space-y-1">
                    <p className="font-bold leading-tight">{book.title}</p>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
            </CardHeader>
          <CardContent className="p-4 pt-0 text-xs text-muted-foreground space-y-2">
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Location:</strong> {book.location}</p>
            <Badge 
              variant={book.status === 'Available' ? 'default' : book.status === 'Issued' ? 'destructive' : 'secondary'}
              className={book.status === 'Available' ? 'bg-emerald-100 text-emerald-800' : ''}
            >
              {book.status}
            </Badge>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" disabled={book.status !== 'Available'}>Reserve</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);

const MyAccount = () => (
    <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Active Loans</CardTitle>
                    <CardDescription>Books you have currently borrowed.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Book</TableHead>
                                <TableHead>Due Date</TableHead>
                                <TableHead>Fine</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {myLoans.map(loan => (
                                <TableRow key={loan.id} className={loan.daysOverdue > 0 ? 'bg-destructive/10' : ''}>
                                    <TableCell className="font-medium">{loan.title}</TableCell>
                                    <TableCell>{loan.dueDate}</TableCell>
                                    <TableCell className={loan.daysOverdue > 0 ? 'text-destructive font-bold' : ''}>{loan.fine}</TableCell>
                                    <TableCell className="text-right">
                                        <Button size="sm" disabled={loan.daysOverdue > 0}>Renew</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
             <Card>
                <CardHeader><CardTitle>Reserved Books</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">You have no books reserved.</p></CardContent>
            </Card>
        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Account Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between"><span>Books Issued</span><span className="font-bold">2 / 5</span></div>
                    <div className="flex justify-between"><span>Pending Fines</span><span className="font-bold text-destructive">₹ 12.00</span></div>
                    <div className="flex justify-between"><span>Reservations</span><span className="font-bold">0</span></div>
                </CardContent>
                <CardFooter><Button className="w-full"><Wallet className="mr-2 h-4 w-4" /> Pay Fines</Button></CardFooter>
            </Card>
            <Card>
                <CardHeader><CardTitle>Borrow History</CardTitle></CardHeader>
                <CardContent><Button variant="outline" className="w-full"><History className="mr-2 h-4 w-4" /> View Full History</Button></CardContent>
            </Card>
        </div>
    </div>
);

const DigitalLibrary = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {digitalResources.map(res => (
            <Card key={res.title}>
                <CardHeader><CardTitle>{res.title}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground text-sm">{res.description}</p></CardContent>
                <CardFooter><Button className="w-full">Access</Button></CardFooter>
            </Card>
        ))}
    </div>
);

const NewArrivals = () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.slice(0,4).map((book) => (
             <Card key={book.id} className="flex flex-col relative">
                 <Badge className="absolute top-2 right-2 bg-primary">NEW</Badge>
                <CardHeader className="p-4 flex-row gap-4 items-start">
                    <Image src={book.coverUrl} alt={book.title} width={80} height={120} className="rounded-md" data-ai-hint="book cover" />
                    <div className="flex-1 space-y-1">
                        <p className="font-bold leading-tight">{book.title}</p>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                    </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                    <p className="text-xs text-muted-foreground">{book.location}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button className="w-full" variant="secondary">View Details</Button>
                </CardFooter>
            </Card>
        ))}
    </div>
);

export default function LibraryPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Library</h1>
        <p className="text-muted-foreground">
          Explore a world of knowledge.
        </p>
      </div>

       <Tabs defaultValue="search">
        <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="search"><Search className="mr-2 h-4 w-4" /> Search Catalog</TabsTrigger>
            <TabsTrigger value="account"><User className="mr-2 h-4 w-4" /> My Account</TabsTrigger>
            <TabsTrigger value="digital"><BookCopy className="mr-2 h-4 w-4" /> Digital Library</TabsTrigger>
            <TabsTrigger value="new"><Sparkles className="mr-2 h-4 w-4" /> New Arrivals</TabsTrigger>
        </TabsList>
        <TabsContent value="search" className="mt-6">
            <SearchCatalog />
        </TabsContent>
         <TabsContent value="account" className="mt-6">
            <MyAccount />
        </TabsContent>
         <TabsContent value="digital" className="mt-6">
            <DigitalLibrary />
        </TabsContent>
         <TabsContent value="new" className="mt-6">
            <NewArrivals />
        </TabsContent>
      </Tabs>
    </div>
  );
}
