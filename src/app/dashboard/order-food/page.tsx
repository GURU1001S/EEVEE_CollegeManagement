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
  Clock,
  Filter,
  Flame,
  Heart,
  Info,
  MapPin,
  Search,
  SortAsc,
  Star,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const deliveryPartners = [
  {
    id: 1,
    name: 'Swiggy',
    logo: 'https://picsum.photos/seed/swiggy/100/100',
    available: true,
    deliveryTime: '25-30 min',
    minOrder: 149,
    deliveryFee: 'Free on orders > ₹199',
    offer: '60% OFF',
    category: 'All',
  },
  {
    id: 2,
    name: 'Zomato',
    logo: 'https://picsum.photos/seed/zomato/100/100',
    available: true,
    deliveryTime: '20-25 min',
    minOrder: 99,
    deliveryFee: '₹25',
    offer: 'ZOMATO GOLD',
    category: 'All',
  },
  {
    id: 3,
    name: "Domino's Pizza",
    logo: 'https://picsum.photos/seed/dominos/100/100',
    available: false,
    opensAt: '11:00 AM',
    deliveryTime: '30 min or free',
    minOrder: 250,
    deliveryFee: 'Free',
    offer: 'BOGO Pizza',
    category: 'Quick Bites',
  },
  {
    id: 4,
    name: 'McDonald\'s',
    logo: 'https://picsum.photos/seed/mcd/100/100',
    available: true,
    deliveryTime: '15-20 min',
    minOrder: 199,
    deliveryFee: '₹30',
    offer: 'Free McFlurry',
    category: 'Quick Bites',
  },
  {
    id: 5,
    name: 'Subway',
    logo: 'https://picsum.photos/seed/subway/100/100',
    available: true,
    deliveryTime: '20-25 min',
    minOrder: 159,
    deliveryFee: '₹20',
    offer: 'Buy 2 Get 1 Free',
    category: 'Healthy',
  },
  {
    id: 6,
    name: 'Campus Eats',
    logo: 'https://picsum.photos/seed/campus/100/100',
    available: false,
    opensAt: '6:00 PM',
    deliveryTime: '45-50 min',
    minOrder: 0,
    deliveryFee: 'Free',
    offer: '10% Student Discount',
    category: 'Local',
  },
];

const PartnerCard = ({ partner }: { partner: (typeof deliveryPartners)[0] }) => (
  <Card className="flex flex-col justify-between transition-all hover:shadow-lg hover:-translate-y-1">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={50}
            height={50}
            className="rounded-lg"
          />
          <div>
            <CardTitle className="text-xl">{partner.name}</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              {partner.available ? (
                <Badge className="bg-emerald-500 text-white">Open</Badge>
              ) : (
                <Badge variant="secondary">Closed</Badge>
              )}
               <p className="text-xs text-muted-foreground">
                {partner.available ? `Delivers in ${partner.deliveryTime}` : `Opens at ${partner.opensAt}`}
               </p>
            </div>
          </div>
        </div>
        {partner.offer && (
            <Badge variant="destructive" className="flex items-center gap-1">
                <Flame className="h-3 w-3" /> {partner.offer}
            </Badge>
        )}
      </div>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">
      <div className="flex justify-between border-t border-b py-3">
          <p>Min. Order: <span className="font-bold text-foreground">₹{partner.minOrder}</span></p>
          <p>Delivery Fee: <span className="font-bold text-foreground">{partner.deliveryFee}</span></p>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full" disabled={!partner.available}>
        Order Now
      </Button>
    </CardFooter>
  </Card>
);

export default function OrderFoodPage() {
  const availablePartners = deliveryPartners.filter((p) => p.available);
  const closedPartners = deliveryPartners.filter((p) => !p.available);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Order Food</h1>
        <p className="text-muted-foreground">
          Your favorite food, delivered right to campus.
        </p>
      </div>

       <Card>
        <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search restaurants or cuisines..." className="pl-10"/>
            </div>
            <div className="flex gap-2">
                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
                <Button variant="outline"><SortAsc className="mr-2 h-4 w-4" /> Sort</Button>
            </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
            <div className="space-y-8">
                 <div>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <Zap className="text-primary"/> Available Now ({availablePartners.length})
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {availablePartners.map((partner) => (
                           <PartnerCard key={partner.id} partner={partner} />
                        ))}
                    </div>
                </div>
                 <div>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <Clock className="text-muted-foreground"/> Opening Soon ({closedPartners.length})
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {closedPartners.map((partner) => (
                           <PartnerCard key={partner.id} partner={partner} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Info /> Campus Delivery Info</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                    <p><span className="font-semibold">Allowed Times:</span> 12:00 PM - 11:00 PM</p>
                    <p><span className="font-semibold">Collection Point:</span> Main Gate Security</p>
                    <p className="text-xs text-muted-foreground">Please show your ID card at the gate to collect your order.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg"><Heart /> Campus Favorites</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                   <p className="flex justify-between"><span>1. Zomato</span> <span className="font-bold">25-30 min</span></p>
                   <p className="flex justify-between"><span>2. Swiggy</span> <span className="font-bold">30-35 min</span></p>
                   <p className="flex justify-between"><span>3. McDonald's</span> <span className="font-bold">15-20 min</span></p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
