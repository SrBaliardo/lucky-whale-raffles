/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identifier]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[index]` on the table `Raffle` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identifier]` on the table `Raffle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `buyerEmail` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyerId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyerName` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyerPhone` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identifier` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `methodPayment` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identifier` to the `Raffle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "buyerEmail" TEXT NOT NULL,
ADD COLUMN     "buyerId" TEXT NOT NULL,
ADD COLUMN     "buyerName" TEXT NOT NULL,
ADD COLUMN     "buyerPhone" TEXT NOT NULL,
ADD COLUMN     "identifier" TEXT NOT NULL,
ADD COLUMN     "index" SERIAL NOT NULL,
ADD COLUMN     "methodPayment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Raffle" ADD COLUMN     "identifier" TEXT NOT NULL,
ADD COLUMN     "index" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_index_key" ON "Order"("index");

-- CreateIndex
CREATE UNIQUE INDEX "Order_identifier_key" ON "Order"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "Raffle_index_key" ON "Raffle"("index");

-- CreateIndex
CREATE UNIQUE INDEX "Raffle_identifier_key" ON "Raffle"("identifier");
