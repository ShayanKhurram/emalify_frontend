-- CreateTable
CREATE TABLE "Leads" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "lead_source" TEXT NOT NULL,
    "pain_point" TEXT NOT NULL,
    "need_score" INTEGER NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Leads_pkey" PRIMARY KEY ("id")
);
