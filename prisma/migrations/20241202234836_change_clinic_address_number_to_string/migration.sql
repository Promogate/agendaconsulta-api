/*
  Warnings:

  - You are about to drop the column `address` on the `clinics` table. All the data in the column will be lost.
  - Added the required column `municipality` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `clinics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipcode` to the `clinics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clinics" DROP COLUMN "address",
ADD COLUMN     "municipality" TEXT NOT NULL,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "zipcode" TEXT NOT NULL;
