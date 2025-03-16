import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc"
import { TbBrandApple } from "react-icons/tb"

function register() {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Card className='bg-[#1e1e1e] py-6 px-2 border-none w-[450px] h-auto gap-2'>
                <CardHeader>
                    <CardTitle className='text-3xl text-white'>Register</CardTitle>
                    <CardDescription className='text-[18px] text-gray-200'>Sign in to continue</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col space-y-1">
                            <Label>Name</Label>
                            <Input />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <Label>Last name</Label>
                            <Input />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label>E-Mail</Label>
                        <Input />
                    </div>
                    <div className="space-y-1">
                        <Label>Password</Label>
                        <Input />
                    </div>
                    {/**
                     * Add progress bar for password security level
                     */}
                    <div className="space-y-1">
                        <Label>Re   peat Password</Label>
                        <Input />
                    </div>
                    <div className="flex flex-row gap-2">
                        <Button className='w-[40%] bg-emerald-400 text-gray-100 hover:bg-emerald-500 cursor-pointer'>Register</Button>
                        <Button className='w-[60%] bg-gray-200 text-black hover:bg-gray-300 cursor-pointer'>already have an account?</Button>
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col gap-2'>
                    <div className='w-full flex flex-row gap-2 items-center'>
                        <Separator className='' />
                        <span className='text-gray-200'>Or</span>
                        <Separator className='' />
                    </div>
                    <div className='w-full flex flex-row justify-center gap-4'>
                        <Button className='w-[60px] h-[60px] rounded-4xl bg-gray-100 hover:bg-gray-300'><FcGoogle /></Button>
                        <Button className='w-[60px] h-[60px] rounded-4xl bg-zinc-800 hover:bg-zinc-700'><TbBrandApple /></Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default register