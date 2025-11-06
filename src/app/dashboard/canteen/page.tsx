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
  GlassWater,
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
    { id: 1, name: 'Masala Dosa', price: 60, category: 'South Indian', isVeg: true, rating: 4.5 },
    { id: 2, name: 'Idli Sambar', price: 40, category: 'South Indian', isVeg: true, rating: 4.2 },
    { id: 3, name: 'Poori Sabji', price: 55, category: 'North Indian', isVeg: true, rating: 4.4 },
    { id: 4, name: 'Aloo Paratha', price: 50, category: 'North Indian', isVeg: true, rating: 4.6 },
    { id: 5, name: 'Poha', price: 35, category: 'Maharashtrian', isVeg: true, rating: 4.3 },
    { id: 6, name: 'Chole Bhature', price: 70, category: 'North Indian', isVeg: true, rating: 4.7 },
    { id: 7, name: 'Upma', price: 40, category: 'South Indian', isVeg: true, rating: 4.1 },
    { id: 8, name: 'Bread Omelette', price: 45, category: 'Continental', isVeg: false, rating: 4.5 },
  ],
  lunch: [
    { id: 9, name: 'North Indian Thali', price: 120, category: 'North Indian', isVeg: true, rating: 4.6 },
    { id: 10, name: 'Chicken Biryani', price: 150, category: 'North Indian', isVeg: false, rating: 4.8 },
    { id: 11, name: 'South Indian Thali', price: 110, category: 'South Indian', isVeg: true, rating: 4.5 },
    { id: 12, name: 'Paneer Butter Masala', price: 130, category: 'North Indian', isVeg: true, rating: 4.7 },
    { id: 13, name: 'Dal Makhani', price: 110, category: 'North Indian', isVeg: true, rating: 4.6 },
    { id: 14, name: 'Fish Curry Rice', price: 160, category: 'Coastal', isVeg: false, rating: 4.7 },
    { id: 15, name: 'Rajma Chawal', price: 90, category: 'North Indian', isVeg: true, rating: 4.4 },
    { id: 16, name: 'Egg Curry', price: 110, category: 'North Indian', isVeg: false, rating: 4.4 },
  ],
  dinner: [
    { id: 17, name: 'Veg Fried Rice', price: 100, category: 'Chinese', isVeg: true, rating: 4.3 },
    { id: 18, name: 'Chicken Hakka Noodles', price: 120, category: 'Chinese', isVeg: false, rating: 4.5 },
    { id: 19, name: 'Kadhai Paneer', price: 135, category: 'North Indian', isVeg: true, rating: 4.6 },
    { id: 20, name: 'Butter Chicken', price: 160, category: 'North Indian', isVeg: false, rating: 4.8 },
    { id: 21, name: 'Tandoori Roti', price: 15, category: 'Breads', isVeg: true, rating: 4.2 },
    { id: 22, name: 'Garlic Naan', price: 30, category: 'Breads', isVeg: true, rating: 4.5 },
    { id: 23, name: 'Dal Fry', price: 90, category: 'North Indian', isVeg: true, rating: 4.4 },
    { id: 24, name: 'Jeera Rice', price: 70, category: 'Rice', isVeg: true, rating: 4.1 },
  ],
  snacks: [
    { id: 25, name: 'Samosa', price: 15, category: 'Snacks', isVeg: true, rating: 4.3 },
    { id: 26, name: 'Veg Sandwich', price: 50, category: 'Snacks', isVeg: true, rating: 4.1 },
    { id: 27, name: 'Paneer Tikka', price: 90, category: 'Tandoor', isVeg: true, rating: 4.6 },
    { id: 28, name: 'French Fries', price: 60, category: 'Snacks', isVeg: true, rating: 4.2 },
    { id: 29, name: 'Vada Pav', price: 25, category: 'Maharashtrian', isVeg: true, rating: 4.7 },
    { id: 30, name: 'Kachori', price: 20, category: 'Snacks', isVeg: true, rating: 4.3 },
    { id: 31, name: 'Bhel Puri', price: 40, category: 'Chaat', isVeg: true, rating: 4.5 },
    { id: 32, name: 'Chicken 65', price: 120, category: 'Snacks', isVeg: false, rating: 4.6 },
    { id: 33, name: 'Chilli Paneer Dry', price: 110, category: 'Chinese', isVeg: true, rating: 4.4 },
    { id: 34, name: 'Veg Momos', price: 70, category: 'Tibetan', isVeg: true, rating: 4.5 },
  ],
  drinks: [
    { id: 35, name: 'Masala Chai', price: 20, category: 'Beverages', isVeg: true, rating: 4.8 },
    { id: 36, name: 'Filter Coffee', price: 25, category: 'Beverages', isVeg: true, rating: 4.7 },
    { id: 37, name: 'Fresh Lime Soda', price: 30, category: 'Beverages', isVeg: true, rating: 4.5 },
    { id: 38, name: 'Lassi', price: 40, category: 'Beverages', isVeg: true, rating: 4.6 },
    { id: 39, name: 'Cold Drink', price: 25, category: 'Beverages', isVeg: true, rating: 4.2 },
  ],
};


type MenuItem = (typeof menu.breakfast)[0];
type CartItem = {
  item: MenuItem;
  quantity: number;
};

const MenuSection = ({ title, items, onAddToCart }: { title: string, items: MenuItem[], onAddToCart: (item: MenuItem) => void }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold font-headline">{title}</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="flex flex-col">
          <CardContent className="p-4 flex-1">
             <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{item.name}</h3>
                <Badge variant={item.isVeg ? "default" : "destructive"} className={`text-xs ${item.isVeg ? "bg-emerald-500 text-white" : ""}`}>
                    {item.isVeg ? 'Veg' : 'Non-Veg'}
                </Badge>
             </div>
            <p className="text-muted-foreground text-xs">{item.category}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4 pt-0">
            <div className="flex flex-col">
              <p className="text-sm font-bold">₹{item.price}</p>
              <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-3 w-3" />
                  <span className="text-xs font-semibold">{item.rating}</span>
              </div>
            </div>
            <Button size="sm" onClick={() => onAddToCart(item)}>
                <Plus className="mr-2 h-4 w-4" /> Add
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
            <Separator/>
            <MenuSection title="Drinks" items={menu.drinks} onAddToCart={addToCart} />
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
                        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                            {cart.map(({ item, quantity }) => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-sm">{item.name}</p>
                                        <p className="text-xs text-muted-foreground">₹{item.price}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => updateQuantity(item.id, quantity - 1)}><Minus className="h-3 w-3"/></Button>
                                        <span className="text-sm">{quantity}</span>
                                        <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => updateQuantity(item.id, quantity + 1)}><Plus className="h-3 w-3"/></Button>
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

    