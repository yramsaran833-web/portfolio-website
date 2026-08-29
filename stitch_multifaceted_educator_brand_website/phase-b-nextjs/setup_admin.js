const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://mfftebaohodsnpkvsrov.supabase.co';
const supabaseKey = 'sb_publishable_PAmq1ezWesuhqaGkbMY1RA_un57xh-b';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setup() {
  console.log("Signing up user...");
  const { data, error } = await supabase.auth.signUp({
    email: 'admin@ramsaranyadav.com',
    password: 'R@ms@r@n141',
  });

  if (error) {
    console.error("SignUp Error:", error.message);
  } else {
    console.log("User created successfully:", data.user.id);
  }
}

setup();
