"use client";
import Input from "@/components/inputs/Input";
import InputError from "@/components/inputs/InputError";
import { useAuth } from "@/hooks/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <main className="md:grid grid-cols-2 h-[calc(100vh-8.5rem)] font-dm">
      <div className="md:h-full h-[14vh] mb-10 md:mb-0 w-full relative md:border-r-2 border-r-violet md:block">
        <Image
          src="/images/login-image.png"
          className="object-cover md:pr-2"
          fill
          alt="candle image"
        />
      </div>
      <form
        onSubmit={submitForm}
        className="max-w-lg w-full flex flex-col justify-center mx-auto px-8 md:px-0"
      >
        <h1 className="sm:text-4xl text-3xl hover-underline-animation">Se connecter</h1>
        <p className="mb-10 font-quahon">
          Vous n'avez pas encore de compte?{" "}
          <Link href="/register" className="text-violet underline">
            S'inscrire
          </Link>
        </p>
        <div>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            className="block mt-1 w-full"
            onChange={(event) => setEmail(event.target.value)}
            required
            autoFocus
          />

          <InputError messages={errors.email} className="mt-2" />
        </div>

        {/* Password */}
        <div className="mt-4">
          <Input
            id="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            className="block mt-1 w-full"
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="current-password"
          />

          <InputError messages={errors.password} className="mt-2" />
        </div>

        <div className="flex items-center justify-between my-6">
          <div className="block mt-4">
            <label htmlFor="remember_me" className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                className="accent-violet"
                onChange={(event) => setShouldRemember(event.target.checked)}
              />

              <span className="ml-2 text-sm">Rester connecté</span>
            </label>
          </div>

          <div className="flex items-center justify-end mt-4">
            <Link
              href="/forgot-password"
              className="underline text-sm hover:text-violet"
            >
              Mot de passe oublié?
            </Link>
          </div>
        </div>

        <button className="bg-violet text-white py-3 rounded-lg">Connexion</button>
      </form>
    </main>
  );
};

export default Login;
