import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const page = () => {
  return (
    <div className="container mx-auto my-24">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            width={640}
            height={640}
            alt="login images"
          />
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h1 className="text-5xl font-semibold text-center pt-12">Login</h1>
            <form className=" mx-12">
            <div className="form-control my-6">
                <label className="label">
                <span className="label-text font-semibold">Email</span>
                </label>
                <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text font-semibold">Confirm Password</span>
                </label>
                <input
                type="password"
                placeholder="Your password"
                className="input input-bordered"
                required
                />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center pt-6 font-medium">Or Sign In with</p>
            <div className="pt-12 flex justify-center space-x-4">
                <button className="btn rounded-full "><BsGoogle /></button>
                <button className="btn rounded-full"><BsGithub/></button>

            </div>
            </form>
            <p className="text-center mt-6 font-semibold">Have an account? <Link href='singup' className="text-[#FF3811]">Login</Link> </p>
        </div>
      </div>

    </div>
  );
};

export default page;
