export interface IPosts {
    posts: IPost[]
    page: number
    limit: number
    count: number
    total_page: number
  }
  
  export interface IPost {
    id: string
    title: string
    content: string
    published: boolean
    created_at: string
  }
  