import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pljloxfxgjshovkkzrkj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_gsK4Z4O07Prt19_k7B4FSg_1wvqde6F";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
