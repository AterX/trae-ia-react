// src/hooks/useIdeas.ts 
 import { useEffect, useState } from 'react' 
 import { supabase } from '../lib/supabaseClient' 
  
 export function useIdeas() { 
   const [ideas, setIdeas] = useState<any[]>([]) 
   useEffect(() => { 
     supabase.from('ideas').select('*').then(({ data }) => setIdeas(data || [])) 
   }, []) 
   return ideas 
 }