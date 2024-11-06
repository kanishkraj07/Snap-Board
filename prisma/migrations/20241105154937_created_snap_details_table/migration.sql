-- CreateTable
CREATE TABLE "SnapDetials" (
    "id" TEXT NOT NULL,
    "photoKey" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "SnapDetials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SnapDetials_photoKey_key" ON "SnapDetials"("photoKey");
