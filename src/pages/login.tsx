import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { TbBrandApple } from "react-icons/tb";

function login() {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Card className='bg-[#1e1e1e] p-6 border-none w-[450px] h-auto'>
                <CardHeader>
                    <CardTitle className='text-3xl text-white'>Login</CardTitle>
                    <CardDescription className='text-[18px] text-gray-200'>Are you ready to be better?</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='mb-1'>
                        <Label className='text-gray-100'>Mail</Label>
                        <Input />
                    </div>
                    <div className='my-1'>
                        <Label className='text-gray-100'>Password</Label>
                        <Input />
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Button className='w-[40%] bg-emerald-400 text-gray-100 hover:bg-emerald-500 cursor-pointer'>Login</Button>
                        <Button className='w-[60%] bg-gray-200 text-black hover:bg-gray-300 cursor-pointer'>Don't have an account?</Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className='w-full flex flex-row justify-center'>
                        <Button className='w-[60px] h-[60px] rounded-4xl bg-white'><FcGoogle /></Button>
                        <Button className='w-[60px] h-[60px] rounded-4xl bg-white'><TbBrandApple /></Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default login