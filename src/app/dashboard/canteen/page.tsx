'use client';

import {
  Apple,
  ChevronDown,
  ChevronUp,
  CreditCard,
  History,
  Minus,
  Plus,
  Receipt,
  Search,
  ShoppingCart,
  Star,
  Ticket,
  Utensils,
  Wallet as WalletIcon,
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const menu = {
  breakfast: [
    {
      id: 1,
      name: 'Masala Dosa',
      price: 60,
      image: 'https://picsum.photos/seed/dosa/400/300',
      category: 'South Indian',
      isVeg: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Idli Sambar',
      price: 40,
      image: 'https://picsum.photos/seed/idli/400/300',
      category: 'South Indian',
      isVeg: true,
      rating: 4.2,
    },
  ],
  lunch: [
    {
      id: 3,
      name: 'North Indian Thali',
      price: 120,
      image: 'https://picsum.photos/seed/thali/400/300',
      category: 'North Indian',
      isVeg: true,
      rating: 4.6,
    },
    {
      id: 4,
      name: 'Chicken Biryani',
      price: 150,
      image: 'https://picsum.photos/seed/biryani/400/300',
      category: 'North Indian',
      isVeg: false,
      rating: 4.8,
    },
  ],
  snacks: [
    {
      id: 5,
      name: 'Samosa',
      price: 15,
      image: 'https://picsum.photos/seed/samosa/400/300',
      category: 'Snacks',
      isVeg: true,
      rating: 4.3,
    },
     {
      id: 6,
      name: 'Veg Sandwich',
      price: 50,
      image: 'https://picsum.photos/seed/sandwich/400/300',
      category: 'Snacks',
      isVeg: true,
      rating: 4.1,
    },
  ],
  dinner: [
     {
      id: 7,
      name: 'Paneer Butter Masala',
      price: 130,
      image: 'https://picsum.photos/seed/paneer/400/300',
      category: 'North Indian',
      isVeg: true,
      rating: 4.7,
    },
     {
      id: 8,
      name: 'Egg Curry',
      price: 110,
      image: 'https://picsum.photos/seed/eggcurry/400/300',
      category: 'North Indian',
      isVeg: false,
      rating: 4.4,
    },
  ]
};

type MenuItem = (typeof menu.breakfast)[0];
type CartItem = {
  item: MenuItem;
  quantity: number;
};

const MenuSection = ({ title, items, onAddToCart }: { title: string, items: MenuItem[], onAddToCart: (item: MenuItem) => void }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold font-headline">{title}</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id}>
          <CardContent className="p-0">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="rounded-t-lg object-cover w-full aspect-[4/3]"
              data-ai-hint="food item"
            />
             <div className="p-4">
                 <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <Badge variant={item.isVeg ? "default" : "destructive"} className={item.isVeg ? "bg-emerald-500 text-white" : ""}>
                        {item.isVeg ? 'Veg' : 'Non-Veg'}
                    </Badge>
                 </div>
                <p className="text-muted-foreground text-sm">{item.category}</p>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold">₹{item.price}</p>
                    <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-4 w-4" />
                        <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                </div>
             </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => onAddToCart(item)}>
                <Plus className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);

const OrderFood = ({ cart, setCart }: { cart: CartItem[], setCart: React.Dispatch<React.SetStateAction<CartItem[]>>}) => {

  const { toast } = useToast();

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
    toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
    })
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity === 0) {
      setCart((prev) => prev.filter((cartItem) => cartItem.item.id !== itemId));
    } else {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
        )
      );
    }
  };

  const total = cart.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.quantity, 0);

  return (
    <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
            <MenuSection title="Breakfast" items={menu.breakfast} onAddToCart={addToCart} />
            <Separator/>
            <MenuSection title="Lunch" items={menu.lunch} onAddToCart={addToCart} />
            <Separator/>
            <MenuSection title="Snacks" items={menu.snacks} onAddToCart={addToCart} />
            <Separator/>
            <MenuSection title="Dinner" items={menu.dinner} onAddToCart={addToCart} />
        </div>
        <div className="lg:col-span-1">
             <Card className="sticky top-8">
                <CardHeader>
                    <CardTitle>My Cart</CardTitle>
                    <CardDescription>Items you have added.</CardDescription>
                </CardHeader>
                <CardContent>
                    {cart.length === 0 ? (
                        <p className="text-muted-foreground text-center">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map(({ item, quantity }) => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-muted-foreground">₹{item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => updateQuantity(item.id, quantity - 1)}><Minus className="h-4 w-4"/></Button>
                                        <span>{quantity}</span>
                                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => updateQuantity(item.id, quantity + 1)}><Plus className="h-4 w-4"/></Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
                {cart.length > 0 && (
                    <CardFooter className="flex-col gap-4 items-stretch">
                        <Separator/>
                        <div className="flex justify-between font-bold text-lg">
                            <p>Total</p>
                            <p>₹{total.toFixed(2)}</p>
                        </div>
                        <Button>
                            <ShoppingCart className="mr-2 h-4 w-4"/>
                            Place Order
                        </Button>
                    </CardFooter>
                )}
             </Card>
        </div>
    </div>
  )
};

const WalletSection = () => {
    const transactions = [
        { type: "credit", amount: 500, date: "2024-07-20", description: "Added from UPI" },
        { type: "debit", amount: 120, date: "2024-07-19", description: "Lunch Order #123" },
        { type: "debit", amount: 60, date: "2024-07-19", description: "Breakfast Order #119" },
    ];
    return (
       <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Canteen Wallet</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <p className="text-sm text-muted-foreground">Current Balance</p>
                        <p className="text-4xl font-bold">₹2,550.00</p>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="amount">Add Money</Label>
                        <div className="flex gap-2">
                            <Input id="amount" type="number" placeholder="Enter amount" />
                            <Button><CreditCard className="mr-2 h-4 w-4" /> Add Funds</Button>
                        </div>
                     </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-4">
                        {transactions.map((tx, i) => (
                            <li key={i} className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{tx.description}</p>
                                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                                </div>
                                <p className={`font-semibold ${tx.type === 'credit' ? 'text-emerald-500' : 'text-destructive'}`}>
                                    {tx.type === 'credit' ? '+' : '-'}₹{tx.amount}
                                </p>
                            </li>
                        ))}
                     </ul>
                </CardContent>
            </Card>
       </div>
    );
};

export default function CanteenPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Canteen Portal</h1>
        <p className="text-muted-foreground">
          Order food, check menus, and manage your account.
        </p>
      </div>
      <Tabs defaultValue="order">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="order"><Utensils className="mr-2 h-4 w-4" /> Order Food</TabsTrigger>
          <TabsTrigger value="history"><History className="mr-2 h-4 w-4" /> My Orders</TabsTrigger>
          <TabsTrigger value="wallet"><WalletIcon className="mr-2 h-4 w-4" /> Wallet</TabsTrigger>
        </TabsList>
        <TabsContent value="order" className="mt-6">
          <OrderFood cart={cart} setCart={setCart} />
        </TabsContent>
        <TabsContent value="history" className="mt-6">
            <Card>
                <CardHeader>
                    <CardTitle>Order History</CardTitle>
                    <CardDescription>Your past orders from the canteen.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-center">No past orders found.</p>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="wallet" className="mt-6">
            <WalletSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
