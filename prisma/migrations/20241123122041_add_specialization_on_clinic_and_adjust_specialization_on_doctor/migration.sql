/*
  Warnings:

  - You are about to drop the column `specialties` on the `doctors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "specialties";

-- CreateTable
CREATE TABLE "specialization_on_clinics" (
    "id" TEXT NOT NULL,
    "clinic_id" TEXT NOT NULL,
    "specialization_id" TEXT NOT NULL,

    CONSTRAINT "specialization_on_clinics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialization_on_clinics_clinic_id_specialization_id_key" ON "specialization_on_clinics"("clinic_id", "specialization_id");

-- AddForeignKey
ALTER TABLE "specialization_on_doctors" ADD CONSTRAINT "specialization_on_doctors_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specialization_on_doctors" ADD CONSTRAINT "specialization_on_doctors_specialization_id_fkey" FOREIGN KEY ("specialization_id") REFERENCES "specializations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specialization_on_clinics" ADD CONSTRAINT "specialization_on_clinics_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specialization_on_clinics" ADD CONSTRAINT "specialization_on_clinics_specialization_id_fkey" FOREIGN KEY ("specialization_id") REFERENCES "specializations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
