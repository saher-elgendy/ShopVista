'use client';

import { ShoppingCart } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'


const cart = () => {

    const itemsCart = 0;
    return (
        <Sheet>
            <SheetTrigger>
                <ShoppingCart aria-hidden="true">

                </ShoppingCart>
            </SheetTrigger>
            <SheetContent>
                {itemsCart} items
                
            </SheetContent>
        </Sheet>
    )
}

export default cart