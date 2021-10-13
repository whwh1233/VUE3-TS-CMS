class LocalCache {
  setCache(key: string, value: any) {
    // 把 value 转换成字符串 进行存储
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    // 把字符串还原之后 再返回
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
