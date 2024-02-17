import { serve } from "@hono/node-server";
import { Hono } from "hono";
import "dotenv/config";
import supabase from "./supabase/client";

const app = new Hono();

app.get(`/`, (c) => {
  return c.text(`Hello Hono!`);
});

app.get(`/plugins`, async (c) => {
  const plugins = await supabase.from(`plugins`).select(`*`);
  console.log(plugins);
  return c.json(plugins);
});

const port = 4000;
console.log(`🔥 Server is running on port ${port}`); // eslint-disable-line no-console

serve({
  fetch: app.fetch,
  port,
});
