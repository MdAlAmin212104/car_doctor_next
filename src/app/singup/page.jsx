"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const Page = () => {

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    console.log(newUser);
  }

  return (
    <div className="container mx-auto my-24">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            width={640}
            height={640}
            alt="Login illustration"
          />
        </div>
        <div className="card bg-base-100 pb-6 w-full shrink-0 shadow-2xl">
          <h1 className="text-5xl font-semibold text-center pt-12">Sign Up</h1>
          <form onSubmit={handleSignUp} className="mx-12">
            <div className="form-control my-6">
              <label className="label">
                <span className="label-text font-semibold text-[18px]">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control my-6">
              <label className="label">
                <span className="label-text font-semibold text-[18px]">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-[18px]">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p className="text-center pt-6 font-medium">Or Sign In with</p>
            <div className="pt-12 flex justify-center space-x-4">
              <button className="btn rounded-full">
                <BsGoogle />
              </button>
              <button className="btn rounded-full">
                <BsGithub />
              </button>
            </div>
          </form>
          <p className="text-center mt-6 font-semibold">
            Already have an account?{" "}
            <Link href="/login" className="text-[#FF3811]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

