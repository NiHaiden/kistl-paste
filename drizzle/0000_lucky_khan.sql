CREATE TABLE "pastes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content" varchar,
	"language" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "pastes_id_unique" UNIQUE("id")
);
