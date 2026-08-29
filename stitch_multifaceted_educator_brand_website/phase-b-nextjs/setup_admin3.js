const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://mfftebaohodsnpkvsrov.supabase.co';
const supabaseKey = 'sb_publishable_PAmq1ezWesuhqaGkbMY1RA_un57xh-b';
const supabase = createClient(supabaseUrl, supabaseKey);

async function setup() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'admin@ramsaranyadav.com.np',
    password: 'R@ms@r@n141',
  });
  if (error) console.error("SignIn Error:", error.message);
  else console.log("Login Success!");
}
setup();
