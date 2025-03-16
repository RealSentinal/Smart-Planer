import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { FcGoogle } from "react-icons/fc";
import { TbBrandApple } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { AlertTriangle } from "lucide-react";

function login() {
    const alertBox = useRef<HTMLDivElement>(null);
    function showAlert() {
        alertBox.current?.classList.remove("hidden", "opacity-0");
        alertBox.current?.classList.add("opacity-100");

        setTimeout(() => {
            alertBox.current?.classList.remove("opacity-100");
            alertBox.current?.classList.add("opacity-0");
            setTimeout(() => {
                alertBox.current?.classList.add("hidden");
            }, 500);
        }, 1000);
    }

    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    function LoginRequest() {
        const loginData = {
            email: emailInput.current?.value,
            password: passwordInput.current?.value,
        };

        if (loginData.email == "" || null || loginData.password == "" || null)
            showAlert();

        console.log(loginData);

        /**
         * Send login request to server
         */
    }

    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if (!emailInput.current?.value || !passwordInput.current?.value)
            setDisabled(true);
    }, []);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <Alert
                ref={alertBox}
                className="bg-[#121212] border-red-500 absolute w-[35%] top-6 hidden opacity-0 duration-500"
            >
                <AlertTriangle color="red" />
                <AlertTitle className="text-red-500">Warning!</AlertTitle>
                <AlertDescription className="text-gray-300">
                    You cannot leave your login information blank.
                </AlertDescription>
            </Alert>
            <Card className="bg-[#1e1e1e] py-6 px-2 border-none w-[450px] h-auto gap-2">
                <CardHeader className="mb-4">
                    <CardTitle className="text-3xl text-white">Welcome Back</CardTitle>
                    <CardDescription className="text-[18px] text-gray-200">
                        Are you ready to be better?
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col">
                    <div className="mb-1 space-y-1">
                        <Label>E-Mail</Label>
                        <Input className="" placeholder="Enter your email" ref={emailInput} />
                    </div>
                    <div className="my-1 space-y-1">
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" ref={passwordInput} />
                    </div>
                    <span className="w-full flex items-center justify-start">
                        <a href="#" className="text-gray-400">
                            Forget password?
                        </a>
                    </span>
                    <div className="flex flex-row gap-2">
                        <Button
                            disabled={disabled}
                            onClick={LoginRequest}
                            className="w-full bg-emerald-400 text-gray-100 hover:bg-emerald-500 cursor-pointer"
                        >
                            Login
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 mt-6">
                    <span className="w-full flex items-center justify-center">
                        <a href="#" className="text-gray-400">Don't have an account?</a>
                    </span>
                    <div className="w-full flex flex-row gap-2 items-center">
                        <Separator className="" />
                        <span className="text-gray-200">Or</span>
                        <Separator className="" />
                    </div>
                    <div className="w-full flex flex-row justify-center gap-4">
                        <Button className="w-[60px] h-[60px] rounded-3xl bg-gray-100 hover:bg-gray-300 cursor-pointer">
                            <FcGoogle />
                        </Button>
                        <Button className="w-[60px] h-[60px] rounded-3xl bg-zinc-900 hover:bg-zinc-900/20 cursor-pointer">
                            <TbBrandApple />
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default login;
