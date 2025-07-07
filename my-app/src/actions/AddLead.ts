"use server"


import prisma from "../lib/prismaclient";

interface LeadsData{
    name: String;
    email:String;
    company:String;
    job_title:String;
    industry:String;
    lead_source:String;
    pain_point:String;
    need_score:number;
    message:String;

}
interface StudentResult{
    data? : LeadsData;
    error? : String;
}

export default async function AddLeads(formData :FormData):
Promise<StudentResult>
{
      const nameValue = formData.get("name")
      const emailValue = formData.get("email")
      const companyValue = formData.get("company")
      const jobTitleValue = formData.get("job_title")
      const industryValue = formData.get("industry")
      const leadSourceValue = formData.get("lead_source")
      const painPointValue = formData.get("pain_point")
      const needScoreValue = formData.get("need_score")
      const messageValue = formData.get("message")

      if( !nameValue || !emailValue || !companyValue || !jobTitleValue || !industryValue || !leadSourceValue || !painPointValue || !needScoreValue || !messageValue ){
        return {error : "something is missing"}
      }
     
      const name = nameValue.toString()
      const email = emailValue.toString()
      const company = companyValue.toString()
      const job_title = jobTitleValue.toString()
      const industry = industryValue.toString()
      const lead_source = leadSourceValue.toString()
      const pain_point = painPointValue.toString()
      const need_score = parseInt(needScoreValue.toString())
      const message = messageValue.toString()

      const leadData = await prisma.leads.create({
        data : {
          name,
          email,
          company,
          job_title,
          industry,
          lead_source,
          pain_point,
          need_score,
          message,
        },
      });

      return {
        data : leadData
      }

}