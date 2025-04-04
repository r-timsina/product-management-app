import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectQuery = supabase.from('tasks').select(`*, projects(id,name,slug)`)
export type tasksWithProjects = QueryData<typeof tasksWithProjectQuery>

export const projectsQuery = supabase.from('projects').select()
export type Projects = QueryData<typeof projectsQuery>

export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `*
    tasks(
    id,
    name,
    status,
    due_date)`
    )
    .eq('slug', slug)
    .single()

export type Project = QueryData<ReturnType<typeof projectQuery>>

export const taskQuery = (id: string) =>
  supabase.from('tasks').select(`*, projects(id,name,slug)`).eq('id', id).single()

export type Task = QueryData<ReturnType<typeof taskQuery>>

export const profileQuery = (id: string) => {
  supabase.from('profiles').select().eq('id', id).single()
}
