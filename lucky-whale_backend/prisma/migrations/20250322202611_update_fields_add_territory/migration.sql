/*
  Warnings:

  - You are about to drop the column `category` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `complement` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `streetNumber` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the column `uf` on the `Raffle` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[index]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `titularCep` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titularCity` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titularNeighborhood` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titularStreet` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titularStreetNumber` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titularUf` to the `Raffle` table without a default value. This is not possible if the table is not empty.
  - Made the column `orderId` on table `Ticket` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_orderId_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Raffle" DROP COLUMN "category",
DROP COLUMN "cep",
DROP COLUMN "city",
DROP COLUMN "complement",
DROP COLUMN "neighborhood",
DROP COLUMN "street",
DROP COLUMN "streetNumber",
DROP COLUMN "uf",
ADD COLUMN     "titularCep" TEXT NOT NULL,
ADD COLUMN     "titularCity" TEXT NOT NULL,
ADD COLUMN     "titularComplement" TEXT,
ADD COLUMN     "titularNeighborhood" TEXT NOT NULL,
ADD COLUMN     "titularStreet" TEXT NOT NULL,
ADD COLUMN     "titularStreetNumber" TEXT NOT NULL,
ADD COLUMN     "titularUf" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Active';

-- AlterTable
ALTER TABLE "Ticket" ALTER COLUMN "orderId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "index" SERIAL NOT NULL;

-- CreateTable
CREATE TABLE "Territory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'allCountries',
    "stateScope" TEXT,
    "states" TEXT[],
    "cityScope" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Territory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Territory_id_key" ON "Territory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_index_key" ON "User"("index");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Territory" ADD CONSTRAINT "Territory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
