import {
    pgEnum,
    pgTable,
    text,
    timestamp,
    uuid,
    varchar,
} from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers.js";
import { user } from "./auth.js";
import { time } from "node:console";

export const statusEnum = pgEnum("event_status", [
    "draft",
    "published",
    "cancelled",
    "completed",
]);

export const eventSchema = pgTable("event", {
    id: uuid().defaultRandom().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    description: text().notNull(),
    shortDescription: varchar({ length: 500 }).notNull(),
    imageUrl: varchar({ length: 500 }),
    locationName: varchar({ length: 255 }).notNull(),
    address: varchar({ length: 255 }).notNull(),
    city: varchar({ length: 100 }).notNull(),
    startsAt: timestamp({ withTimezone: true }).notNull(),
    endsAt: timestamp({ withTimezone: true }).notNull(),
    salesStartAt: timestamp({ withTimezone: true }).notNull(),
    salesEndAt: timestamp({ withTimezone: true }).notNull(),
    status: statusEnum().notNull().default("draft"),
    organizerId: uuid()
        .references(() => user.id, { onDelete: "restrict" })
        .notNull(),
    ...timestamp,
});

export type Event = typeof eventSchema.$inferSelect;
export type CreateEvent = typeof eventSchema.$inferInsert;
export type EventStatusEnum = (typeof statusEnum.enumValues)[number];
