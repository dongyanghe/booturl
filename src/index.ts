// 导入样式，第三方样式在前，自定义样式在后
import 'styles/browserPrompt.scss';
import './index.scss';
import UtilityService from './service/UtilityService';
import WebsocketService,{MessageCheck} from './service/WebsocketService';
import ComponentFactory from './component/ComponentFactory';
import CONFIG from './common/CONFIG';
//  @ts-ignore
//  js...
/*********************************************** 初始化 ***********************************************/
console.log(ComponentFactory, CONFIG)
$(document).ready(function() {
  /*********************************************** 退出登录弹窗 ***********************************************/
  $(document).on("click", "#id1", function() {
  });
  //  关闭不退出
  $(document).on("click", "#id2,#id3", function(e) {
  });
});
