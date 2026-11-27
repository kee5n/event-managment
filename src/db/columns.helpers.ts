import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
    updatedAt: timestamp({ withTimezone: true })
        .defaultNow()
        .notNull()
        .$onUpdate(() => new Date()),
    createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
};
