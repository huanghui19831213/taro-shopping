const getBaseUrl = (url) => {
  let BASE_URL = '';
  
  // eslint-disable-next-line no-undef
  let types = ENV_TYPES
  
  // if (process.env.NODE_ENV === 'development') {
  //   //开发环境 - 根据请求不同返回不同的BASE_URL
  //   if (url.includes('/api/')) {
  //     BASE_URL = ''
  //   } else if (url.includes('/iatadatabase/')) {
  //     BASE_URL = ''
  //   }
  // } else {
  //   // 生产环境
  //   if (url.includes('/api/')) {
  //     BASE_URL = ''
  //   } else if (url.includes('/iatadatabase/')) {
  //     BASE_URL = ''
  //   }
  // }
  if (types==='dev'){
    BASE_URL = 'https://dearbaapptest.ciicsh.com/webapisql/'
  }
  return BASE_URL
}

export default getBaseUrl;
