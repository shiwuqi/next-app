/*
 * @Author: shiqi liziw2012@gmail.com
 * @Date: 2024-03-27 10:22:02
 * @LastEditors: shiqi liziw2012@gmail.com
 * @LastEditTime: 2024-03-27 15:32:32
 * @FilePath: /next-app/src/app/auth/login/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SigninForm from "@/components/auth/SigninForm";
import Link from "next/link";

function LoginPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <SigninForm />
      <footer className="fixed shrink-0 bottom-8 left-0 right-0 flex justify-center">
        <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
          <p>Don't have an account?</p>
          <a
            href="/auth/register"
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20">
            <span>
              Sign up
              <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}

export default LoginPage;
