-- CreateTable
CREATE TABLE "Messaging" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" VARCHAR(2550) NOT NULL,
    "receiver" VARCHAR(255) NOT NULL,
    "messageType" INTEGER,
    "sendingType" INTEGER,
    "deleted" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sender" INTEGER NOT NULL,

    CONSTRAINT "Messaging_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Messaging" ADD CONSTRAINT "Messaging_sender_fkey" FOREIGN KEY ("sender") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
