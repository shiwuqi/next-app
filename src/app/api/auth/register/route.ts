/*
 * @Author: shiqi liziw2012@gmail.com
 * @Date: 2024-03-27 10:22:02
 * @LastEditors: shiqi liziw2012@gmail.com
 * @LastEditTime: 2024-03-28 09:17:08
 * @FilePath: /next-app/src/app/api/auth/register/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('data ', data);
    const res = await prisma.user.create({
      data: data,
    });
    console.log('res ', res);
    const { password, ...user } = res;
    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    console.log(e);
  }
}
