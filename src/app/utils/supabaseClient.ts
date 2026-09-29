import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export const supabase = createClient(`https://${projectId}.supabase.co`, publicAnonKey);

export function mapSupabaseUser(user: any) {
  return {
    id: user.id,
    email: user.email,
    username:
      user.user_metadata?.username ||
      user.user_metadata?.full_name ||
      user.email?.split('@')[0] ||
      'User',
    profilePicture: user.user_metadata?.profilePicture || '',
  };
}
