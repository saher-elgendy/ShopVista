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
import Image from 'next/image';



const cart = () => {

    const itemsCount = 0;

    return (
        <Sheet>
            <SheetTrigger className='group'>
                <ShoppingCart
                    aria-hidden="true"
                    className='flex text-gray-400 group-hover:text-gray-500'>
                </ShoppingCart>
            </SheetTrigger>
            <SheetContent className='flex flex-col justify-center'>
                <div className='text-center'>
                    <span className="text-sm font-semibold" >Cart ({itemsCount})</span>
                </div>

                <div>
                    <div className='relative h-64 w-64'>
                        <Image src="/hippo-empty-cart.png" alt="hippo-image" fill />
                    </div>

                    <div className='text-center text-gray-400 text-muted-foreground'>
                        <p>
                            {!itemsCount ? 'No items in your cart yet': null}
                        </p>
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    )
}

export default cart