import { Handler } from "@netlify/functions";
import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Failed to locate environment variables.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const handler: Handler = async ({ body }) => {

  if (!body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing body"
      })
    }
  }

  const { id } = JSON.parse(body) as { id: number };

  let { data } = await supabase
    .from("champions")
    .select("*")
    .eq("id", id);

  return {
    statusCode: 200,
    body: JSON.stringify(data ? data[0] : { message: `No champion with an id of ${id}` }),
  }
}

export { handler };