// import { supabase } from "$lib";

// export async function load() {
//   const { data } = await supabase.from('teams').select('*, country (*)');
//   return { teams: data };
// }

import { supabase } from "$lib";

export async function load() {
  const { data } = await supabase.from('players').select('*, country (region, name)');
  console.log(data);
  return { players: data };
}