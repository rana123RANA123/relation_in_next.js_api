import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const prisma = new PrismaClient();
  //   const emp = await prisma.employee.create({
  //     data: {
  //       empName: "Test User 1",
  //       dept: {
  //         create: {
  //           deptName: "Developer",
  //         },
  //       },
  //     },
  //   });

  //   console.log("Employee", emp);

  const empdata = await prisma.employee.findMany({
    include: {
      dept: true,
    },
  });

  console.log("Employee Data", empdata);

  return NextResponse.json({ message: "DB Relation" });
}
