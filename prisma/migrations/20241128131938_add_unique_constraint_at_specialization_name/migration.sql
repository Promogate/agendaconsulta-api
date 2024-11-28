/*
  Warnings:

  - A unique constraint covering the columns `[specialization_name]` on the table `specializations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "specializations_specialization_name_key" ON "specializations"("specialization_name");
