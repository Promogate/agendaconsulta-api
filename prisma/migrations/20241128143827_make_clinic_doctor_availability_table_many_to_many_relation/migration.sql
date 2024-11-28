-- AlterTable
ALTER TABLE "clinic_doctor_availatibilities" ADD COLUMN     "doctor_id" TEXT;

-- AddForeignKey
ALTER TABLE "clinic_doctor_availatibilities" ADD CONSTRAINT "clinic_doctor_availatibilities_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinic_doctor_availatibilities" ADD CONSTRAINT "clinic_doctor_availatibilities_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
