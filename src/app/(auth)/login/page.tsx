import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function login() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-lg border p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>

        <div className="mb-4">
          <Label htmlFor="email" className="mb-2 block">
            Email
          </Label>
          <TextInput id="email" type="email" placeholder="name@example.com" />
        </div>

        <div className="mb-6">
          <Label htmlFor="password" className="mb-2 block">
            Password
          </Label>
          <TextInput id="password" type="password" placeholder="••••••••" />
        </div>

        <Button className="w-full">Login</Button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
