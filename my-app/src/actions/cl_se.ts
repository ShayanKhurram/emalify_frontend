"use client"

import prisma from "@/lib/prismaclient"

export async function getAllData(){
    const result = await prisma.leads.findMany()
    return result
}