import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://szqeakrhaxxpnfclgfep.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6cWVha3JoYXh4cG5mY2xnZmVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyODcwNTUsImV4cCI6MjA4NDg2MzA1NX0._yA8TVDNWYg1cvc8g9Babw4aZqcPPy_JbZkSc4FO9PU'

export const supabase = createClient(supabaseUrl, supabaseKey)