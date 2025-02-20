/*
  Warnings:

  - You are about to drop the column `ingredientes` on the `Product` table. All the data in the column will be lost.
  - Changed the type of `price` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ingredientes",
ADD COLUMN     "ingredients" TEXT[],
DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
