"use client"

import { Icons } from '@/components/icons'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { AuthCredentialator, TAuthCredentaialsValidator } from '@/lib/validators/account-credentials-validator';
import { zodResolver } from '@hookform/resolvers/zod';


const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TAuthCredentaialsValidator>({
        resolver: zodResolver(AuthCredentialator)
    })

    const onSubmit = ({ email, password }: TAuthCredentaialsValidator) => {
        return 
    }

    return (
        <div className='container flex flex-col items-center pt-20'>

            <div className='flex flex-col items-center'>
                <Icons.logo className='h-20 w-20' />
                <h2 className='mt-5 text-xl font-bold'>Create an account</h2>
                <Link
                    href="/sign-in"
                    className={buttonVariants({
                        variant: 'link',
                        className: 'gap-1.5'
                    })}
                >
                    Already have an account, Sign in
                    <ArrowRight className='h-4 w-4' />
                </Link>
            </div>

            <div className='w-[350px] grid gap-6'>
                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid gap-3'>
                        <Label htmlFor="/email" className='font-semibold'>Email</Label>
                        <Input placeholder="you@example.com" className='font-light' {...register('email')}></Input>
                    </div>
                    <div className='grid gap-3 mt-5'>
                        <Label htmlFor="password" className='font-semibold'>Password</Label>
                        <Input placeholder="Password" className='font-light ' {...register('password')}></Input>
                    </div>
                </form>
                <Button>Sign up</Button>
            </div>

        </div>
    )
}

export default Page
