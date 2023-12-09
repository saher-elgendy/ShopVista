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
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';


const cart = () => {

    const itemsCount = 1;

    return (
        <Sheet>
            <SheetTrigger className='group'>
                <ShoppingCart
                    aria-hidden="true"
                    className='flex text-gray-400 group-hover:text-gray-500'>
                </ShoppingCart>
            </SheetTrigger>
            <SheetContent className='flex flex-col justify-center'>
                <SheetHeader >
                    <SheetTitle className='text-center'>
                        Cart ({itemsCount})
                    </SheetTitle>
                </SheetHeader>
                {
                    !itemsCount ?
                        <div className='flex-grow flex flex-col justify-center items-center'>
                            <div className='relative h-64 w-64'>
                                <Image src="/hippo-empty-cart.png" alt="hippo-image" fill />
                            </div>

                            <div className='text-center text-gray-400 text-muted-foreground'>
                                <p>
                                    {!itemsCount ? 'No items in your cart yet' : null}
                                </p>
                                <Link
                                    href="/products"
                                    className={buttonVariants({
                                        variant: 'link',
                                        size: 'sm',
                                        className: 'text-sm text-muted-foreground'
                                    })}
                                >Add items to your cart to checkout</Link>
                            </div>
                        </div> : null
                }

                <SheetFooter>

                    {
                        itemsCount ?
                            <SheetTrigger asChild>
                                <Link
                                    href='/cart'
                                    className={buttonVariants({
                                        className: 'w-full',
                                    })}>
                                    Continue to Checkout
                                </Link>
                            </SheetTrigger> : null
                    }

                </SheetFooter>
            </SheetContent>


        </Sheet>
    )
}

export default cart