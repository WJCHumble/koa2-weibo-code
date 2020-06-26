/**
 * @description 连接 redis 方法 get set
 * @author 五柳
 */

const redis = require("redis");
const {
  REDIS_CONFIG
} = require("../conf/db");

// 创建客户端
const redisClient = redis.createClient(REDIS_CONFIG.port, REDIS_CONFIG.host);

redisClient.on("error", (err) => {
  console.error(err);
});

/**
 * redis test
 * @param {string} key
 * @param {string} val
 * @param {number} timeout 过期时间
 */
function set(key, val, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  redisClient.set(key, val)
  redisClient.expire(key, timeout)
}

/**
 * reids get 
 * @param {string} key 
 */
function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val === null) {
        resolve(null)
      }
      try {
        resolve(JSON.parse(val))
      } catch (ex) {
        resolve(ex)
      }
    })
  })
  return promise
}

module.exports = {
  set,
  get
}