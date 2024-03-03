interface ApiMap<T> {
  login: T
  uploadImg: T
  // 公司信息
  companyInfo: T
  companyUpdate: T
  // 案例
  caseAdd: T
  caseList: T
  caseDelete: T
  caseChange: T
  // 分类
  categoryAdd: T
  categoryList: T
  categoryIndexList: T
  categoryDelete: T
  categoryChange: T
  // 系列
  seriesAdd: T
  seriesList: T
  seriesDelete: T
  seriesChange: T
  // 产品
  productAdd: T
  productChange: T
  productDelete: T
  productGetById: T
  productGetBySeries: T
  productGetWithIndex: T
  productAttrs: T
}

export const apiMap: ApiMap<ApiType> = {
  login: {
    url: '/user/login',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    saveToken: true
  },
  uploadImg: {
    url: '/file/upfile',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    withToken: true
  },
  // 公司信息
  companyInfo: {
    url: '/company/get',
    method: 'GET'
  },
  companyUpdate: {
    url: '/company/add',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  // 案例
  caseAdd: {
    url: '/caseShow/add',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  caseList: {
    url: '/caseShow/get',
    method: 'GET'
  },
  caseDelete: {
    url: '/caseShow/delete',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  caseChange: {
    url: '/caseShow/edit',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  // 分类
  categoryAdd: {
    url: '/class/add',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  categoryList: {
    url: '/class/get',
    method: 'POST'
  },
  categoryIndexList: {
    url: '/class/isIndex',
    method: 'POST'
  },
  categoryDelete: {
    url: '/class/delete',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  categoryChange: {
    url: '/class/edit',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  // 系列
  seriesAdd: {
    url: '/series/add',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  seriesList: {
    url: '/series/get',
    method: 'GET',
  },
  seriesDelete: {
    url: '/series/delete',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  seriesChange: {
    url: '/series/edit',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  // 产品
  productAdd: {
    url: '/products/add',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  productChange: {
    url: '/products/edit',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    withToken: true
  },
  productDelete: {
    url: '/products/delete',
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    withToken: true
  },
  productGetById: {
    url: '/products/get',
    method: 'GET'
  },
  productGetBySeries: {
    url: '/products/gets',
    method: 'GET'
  },
  productGetWithIndex: {
    url: '/products/getis',
    method: "GET",
  },
  productAttrs: {
    url: '/products/jsonsGet',
    method: 'POST',
    withToken: true
  }
}

export interface ApiType {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'TRACE' | 'CONNECT'
  headers?: RequestHeaders
  timeout?: number
  withToken?: boolean
  saveToken?: boolean
  [key: string]: any
}

export interface RequestType {
  reqType: keyof typeof apiMap
  params?: any
  data?: any
}

export interface RequestHeaders {
  'Content-Type'?:
  | 'application/json'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain'
  | 'text/html'
  [key: string]: any
}
