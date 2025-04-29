/*
  Warnings:

  - You are about to drop the column `identifier` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `identifier` on the `Raffle` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Order_identifier_key";

-- DropIndex
DROP INDEX "Raffle_identifier_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "identifier";

-- AlterTable
ALTER TABLE "Raffle" DROP COLUMN "identifier";
