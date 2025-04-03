"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("The two passwords are different.");
    }
    console.log("submit", data);
    const { confirmPassword, ...rest } = data;
    const res = await axios.post("/api/auth/register", {
      ...rest,
      loginType: 'credentials'
    });

    if (res.status === 200) {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (!result?.ok) {
        console.log(result?.error);
        return;
      }
      router.push("/");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                    sm:leading-6 bg-gray-50"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required.",
                    },
                  })}
                />
              </div>
            </div>
            {errors.email && (
              <span className="text-error text-xs mt-2">
                {errors.email.message}
              </span>
            )}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                    sm:leading-6 bg-gray-50"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                  })}
                />
              </div>
            </div>
            {errors.username && (
              <span className="text-error text-xs mt-2">
                {errors.username.message}
              </span>
            )}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                    sm:leading-6 bg-gray-50"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                />
              </div>
            </div>
            {errors.password && (
              <span className="text-error text-xs mt-2">
                {errors.password.message}
              </span>
            )}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                    sm:leading-6 bg-gray-50"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Confirmar Contraseña es requerido.",
                    },
                  })}
                />
              </div>
            </div>
            {errors.confirmPassword && (
              <span className="text-error text-xs mt-2">
                {errors.confirmPassword.message}
              </span>
            )}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
