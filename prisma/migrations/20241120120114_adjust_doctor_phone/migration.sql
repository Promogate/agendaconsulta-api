/*
  Warnings:

  - You are about to drop the column `is_phon_whatsapp` on the `doctors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "is_phon_whatsapp",
ADD COLUMN     "is_phone_whatsapp" BOOLEAN NOT NULL DEFAULT false;
