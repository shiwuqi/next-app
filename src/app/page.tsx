/*
 * @Author: shiqi liziw2012@gmail.com
 * @Date: 2024-03-27 10:22:02
 * @LastEditors: shiqi liziw2012@gmail.com
 * @LastEditTime: 2024-03-27 14:52:57
 * @FilePath: /next-auth-ts/src/app/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { map } from 'lodash-es';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";

const features = [
  {
    title: 'Automation',
    subtitle: 'AI can perform tasks automatically without human intervention, improving efficiency and reducing errors.'
  },
  {
    title: 'Adaptability',
    subtitle: 'AI systems can learn from data and adapt to new situations, improving their performance over time.'
  },
  {
    title: 'Data Processing',
    subtitle: 'AI can analyze vast amounts of data quickly and extract meaningful insights.'
  },
  {
    title: 'Pattern Recognition',
    subtitle: 'AI excels at identifying patterns in complex datasets, enabling applications such as image recognition and fraud detection.'
  },
  {
    title: 'Decision-Making',
    subtitle: 'AI can assist in or automate decision-making processes based on predefined rules or learned experiences.'
  },
  {
    title: 'Natural Language Understanding',
    subtitle: 'AI can comprehend, interpret, and generate human language, enabling applications like chatbots and translation systems.'
  },
]

function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="h-full">
      <Header />
      <div className="isolate px-6 lg:px-8">
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
        <div className="container mx-auto max-w-2xl md:max-w-7xl pb-16 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Empowering the Future with AI</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Revolutionizing Industries, Enhancing Lives through Intelligent Technology</p>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              map(features, (item) => (
                <Card className="transition-all duration-500 ease-in-out transform hover:-translate-y-2 bg-white p-6 rounded-2xl hover:shadow-[0_-4px_12px_0_rgba(128,0,128,0.3),0_4px_12px_0_rgba(128,0,128,0.3)]">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.subtitle}</CardDescription>
                  </CardHeader>
                </Card>
              ))
            }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
