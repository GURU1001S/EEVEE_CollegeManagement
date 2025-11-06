'use client';

import { Book, Clock, Search, Library as LibraryIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LibraryPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Library</h1>
        <p className="text-muted-foreground">
          Explore a world of knowledge.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Search Catalog</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Find books, journals, and other resources.</p>
            <Button variant="outline" size="sm" className="mt-4">
              Search Now
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Borrowed Books</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 Books</div>
            <p className="text-xs text-muted-foreground">Due for return this week.</p>
            <Button variant="outline" size="sm" className="mt-4">
              View Books
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Opening Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">8:00 AM - 10:00 PM</div>
            <p className="text-xs text-muted-foreground">Monday - Saturday</p>
            <Button variant="outline" size="sm" className="mt-4">
              Full Schedule
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Digital Library</CardTitle>
            <LibraryIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Access e-books, articles, and online databases.</p>
            <Button variant="outline" size="sm" className="mt-4">
              Access Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
