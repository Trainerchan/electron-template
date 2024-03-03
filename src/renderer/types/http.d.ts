export interface HttpResponse<T> {
  code: number
  msg: string
  data: T
}

export interface ErrorResponse {
  code: number
  msg: string
}

export interface HttpResponse {
  code: number
  msg: string
  data: {
    brand: string[]  // 品牌
    tags: string[]  //  标签
    price: string // '' | 'asc' | 'desc'
    total: number // 总条数
    page: number // 当前页码
    size: number // 
    list: [] // 数据
  }
}