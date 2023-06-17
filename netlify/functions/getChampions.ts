import { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Failed to locate environment variables.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const handler: Handler = async () => {
  let { data } = await supabase
    .from("champions")
    .select("id, name, avatar");

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

export { handler };