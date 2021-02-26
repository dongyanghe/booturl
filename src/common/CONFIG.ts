
const CONFIG: any = {
    version: '0.0.1',   //  每次发版修改版本号
  /**
   * 修改本字段对应下面的requestHost即可改变请求地址
   * 'deBug'：本地开发，'pro'：在线服
   */
  serviceType: 'service',
  projectName: 'booturl',
  requestHost: {
    //  本地服务的路径配置
    deBug: '127.0.0.1/boot/',
    pro: 'booturl.com/boot/'
  }
};
export default CONFIG;
