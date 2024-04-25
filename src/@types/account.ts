export interface Account {
  id: number
  name: string
  email: string
  document: string
  status: 'active' | 'inactive'
  role: 'admin' | 'user'
}
