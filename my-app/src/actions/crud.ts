"use server"

import prisma from "@/lib/prismaclient"



export async function getAllData(){
    const result = await prisma.leads.findMany()
    return result
}
export async function getLead(leadid : number){
    const lead = await prisma.leads.findUnique({
  where: {
    id : leadid,
  },
})
    return lead
}