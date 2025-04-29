/*
  Warnings:

  - Added the required column `category` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Raffle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Raffle" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hasDraw" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "moneyAmount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Ativa',
ADD COLUMN     "ticketsAmount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
