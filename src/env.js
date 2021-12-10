let baseURL;
/**
 * process.env.NODE_ENV 读取package.json里面的script --mode传过来的参数
 * 用于区分环境 webpack内置功能
 * 会放在NODE_ENV变量中
 */
switch (process.env.NODE_ENV) {
    case "development":
        baseURL = 'a'
        break;
    case "test":
        baseURL = 'b'
        break;
    case "production":
        baseURL = 'c'
        break;
    default:
        break;
}
export default {
    baseURL
}