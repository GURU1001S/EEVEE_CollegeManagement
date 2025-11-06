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
  ShoppingCart,
  Clock,
  History,
  Plus,
  Minus,
  Star,
} from 'lucide-react';
import Image from 'next/image';

const menuItems = [
  {
    id: 1,
    name: 'Fusion Bowl',
    description: 'A vibrant mix of quinoa, roasted veggies, and avocado.',
    price: 250,
    image: 'https://picsum.photos/seed/101/400/300',
    category: 'Bowls',
  },
  {
    id: 2,
    name: 'Zenith Sandwich',
    description: 'Grilled chicken, pesto, and mozzarella on ciabatta.',
    price: 180,
    image: 'https://picsum.photos/seed/102/400/300',
    category: 'Sandwiches',
  },
  {
    id: 3,
    name: 'Cosmic Pizza',
    description: 'Artichoke, olives, and feta on a crispy crust.',
    price: 350,
    image: 'https://picsum.photos/seed/103/400/300',
    category: 'Main Course',
  },
  {
    id: 4,
    name: 'Galaxy Wrap',
    description: 'Spicy black bean patty with fresh salsa and greens.',
    price: 150,
    image: 'https://picsum.photos/seed/104/400/300',
    category: 'Wraps',
  },
];

export default function OrderFoodPage() {
  // Mock state for cart
  const cartItems = 2;
  const cartTotal = 430;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Canteen Order</h1>
        <p className="text-muted-foreground">
          Browse the menu and place your order.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-headline">Today's Specials</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {menuItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-xl mb-1">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <Star className="w-4 h-4 text-amber-400/50 fill-amber-400/50" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-4 pt-0">
                      <p className="text-lg font-bold">₹{item.price.toFixed(2)}</p>
                      <Button>Add to Cart</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Your Cart
              </CardTitle>
            </CardHeader>
            <CardContent>
                {cartItems > 0 ? (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">Fusion Bowl</p>
                                <p className="text-sm text-muted-foreground">₹250.00</p>
                            </div>
                             <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-7 w-7"><Minus className="h-3 w-3"/></Button>
                                <span className="font-bold">1</span>
                                <Button variant="outline" size="icon" className="h-7 w-7"><Plus className="h-3 w-3"/></Button>
                            </div>
                        </div>
                         <div className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">Zenith Sandwich</p>
                                <p className="text-sm text-muted-foreground">₹180.00</p>
                            </div>
                             <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-7 w-7"><Minus className="h-3 w-3"/></Button>
                                <span className="font-bold">1</span>
                                <Button variant="outline" size="icon" className="h-7 w-7"><Plus className="h-3 w-3"/></Button>
                            </div>
                        </div>
                    </div>
                ): (
                    <p className="text-muted-foreground text-center py-8">Your cart is empty.</p>
                )}
            </CardContent>
            {cartItems > 0 && (
                <CardFooter className="flex flex-col gap-4">
                     <div className="flex justify-between items-center w-full font-bold text-lg">
                        <span>Total</span>
                        <span>₹{cartTotal.toFixed(2)}</span>
                    </div>
                    <Button className="w-full">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Place Order
                    </Button>
                </CardFooter>
            )}
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                Order History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between">
                    <span>Order #1254</span>
                    <span className="text-muted-foreground">₹430.00</span>
                </li>
                 <li className="flex justify-between">
                    <span>Order #1251</span>
                    <span className="text-muted-foreground">₹350.00</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
