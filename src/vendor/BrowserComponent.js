
    window.onload = function () {

       /**
        * 浏览器版本号的判断
        * 浏览器代码名称：navigator.appCodeName
        *浏览器名称：navigator.appName
        *浏览器版本号：navigator.appVersion
        *对Java的支持：navigator.javaEnabled()
        *MIME类型（数组）：navigator.mimeTypes
        *系统平台：navigator.platform
        *插件（数组）：navigator.plugins
        *用户代理：navigator.userAgent
        *
        */
       window._browserService = {
            cancel : function() {
                // boxId.style.display = 'none';
                var elem = document.getElementById('compatible-prompt');
                elem.parentNode.removeChild(elem);
              },
              //    获取全屏状态
              isFullscreenForNoScroll : function(){
                var explorer = window.navigator.userAgent.toLowerCase();
                if(explorer.indexOf('chrome')>0){//webkit
                    if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
                        return true;
                    } else {
                        return false;
                    }
                }else{//IE 9+  fireFox
                    if (window.outerHeight === window.screen.height && window.outerWidth === window.screen.width) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
              //    获取浏览器类型
              getBrowserType : function(){
                var u = window.navigator.userAgent;
                return {
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
                    iPad: u.indexOf('iPad') > -1, //是否为iPad
                    webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
                    weixin: u.match(/MicroMessenger/i) //是否为微信浏览器 @todo:删除 == "micromessenger"，待确认
                    };
                },
              // 判断IE浏览器版本
              getIEVersion : function() {
                var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
                if(isIE) {
                    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                    reIE.test(userAgent);
                    var fIEVersion = parseFloat(RegExp["$1"]);
                    if(fIEVersion == 7) {
                        return 7;
                    } else if(fIEVersion == 8) {
                        return 8;
                    } else if(fIEVersion == 9) {
                        return 9;
                    } else if(fIEVersion == 10) {
                        return 10;
                    } else {
                        return 6;//IE版本<=7
                    }
                } else if(isEdge) {
                    return 'edge';//edge
                } else if(isIE11) {
                    return 11; //IE11
                }else{
                    return -1;//不是ie浏览器
                }
            }
        }
        /*********************************************** 浏览器缩放提示 ***********************************************/
        /**
         * 返回100为正常缩放
         * 苹果浏览器和超大屏幕不支持
         **/
        function detectZoom (event){
            var ratio = 0,
                screen = window.screen,
                ua = navigator.userAgent.toLowerCase();

            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            }
            else if (~ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI;
                }
            }
            else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
                ratio = window.outerWidth / window.innerWidth;
            }

            if (ratio){
                ratio = Math.round(ratio * 100);
            }
                // 太大太小的不管了，非电脑浏览器一律不提示
                if (window.screen.availWidth >= 2000) {
                    return ratio / 2;
                }
                if (window.screen.availWidth >= 12800) {
                    return 1;
                }
                if (window.screen.availWidth <= 800) {
                    return 1;
                }
                if (window.screen.availWidth >= 12000) {
                    return ratio / 12;
                }
                if (window.screen.availWidth >= 8000) {
                    return ratio / 8;
                }
                if (window.screen.availWidth >= 4000) {
                    return ratio / 4;
                }
                if (window.screen.availWidth >= 2000) {
                    return ratio / 2;
                }
            return ratio;


        };
        // 显示/删除提示
        function showHintbar(){
            if(detectZoom($($("body").children().get(0))) != 100 ){
                var html = '<div class="gb-hintbar" id="gb-hintbar"><div class="inner"><div class="hintbar-txt">浏览器目前处于缩小/放大状态，若界面显示异常，可尝试长按"ctrl"键+滚动鼠标滚轮恢复界面。</div>	</div>	<a title="点击退出" id="deleteHintbar" class="text-close" href="javascript:;">×</a></div>';
                if (!$("#gb-hintbar").length) {
                    $($("body").children().get(0)).before(html);
                }
            } else {
                if ($("#gb-hintbar").length >0) {
                    $("#gb-hintbar").remove();
                }
            }
        }
        $(document).on('click','#gb-hintbar', function(){
            if ($("#gb-hintbar").length >0) {
                $("#gb-hintbar").remove();
            }
        });
        var browserType = window._browserService.getBrowserType();

        //  尺寸改变显示或删除提示
        if (!browserType.mobile && !browserType.ios
            && !browserType.android && !browserType.iPhone && !browserType.iPad && !browserType.weixin) {
            showHintbar();
        }
        window.onresize = function(){
            //  尺寸改变显示或删除提示
            if (!browserType.mobile && !browserType.ios
                && !browserType.android && !browserType.iPhone && !browserType.iPad && !browserType.weixin) {
                showHintbar();
            }
            //  全屏隐藏滚动条
            /* if($("body").mCustomScrollbar) {
                if(window._browserService.isFullscreenForNoScroll()) {
                    $("body").mCustomScrollbar("disable");
                } else {
                    $("body").mCustomScrollbar("update");
                }
            } */
        };
    /*********************************************** ie提示,其他浏览器暂时不管***********************************************/
    var fIEVersion = window._browserService.getIEVersion() || '';
        //  如果是低版本IE或者不支持WebSocket //    && fIEVersion != 'edge' && fIEVersion < 11
        if ((fIEVersion != -1) || !('WebSocket' in window)){  //  reIE.test(userAgent)
            var compatiblePromptRef = ['<div id="compatible-prompt">',
                '<h4 class="modal-title alert alert-danger">浏览器版本过低或者是IE内核，这可能导致系统无法正常使用。</h4>',
                '<p style="padding: 0 10px 10px 10px">',
                '    您必须使用一个最新版的web浏览器（比如谷歌浏览器）才能正常使用本系统。点击以下图标可以找到更合适的浏览器。',
                '</p>',
                '<div class="browser clearfix text-center">',
                '  <a href="https://browser.360.cn/se/" class="fl"  target="_bank">',
                // '    <img src="./assets/images/browser/360.png" alt="360浏览器">',
                '    <p>360浏览器</p>',
                '  </a>',
                '  <a href="https://www.baidu.com/s?ie=UTF-8&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8" class="fl"  target="_bank" >',
                // '    <img src="./assets/images/browser/google.png" alt="谷歌浏览器">',
                '    <p>谷歌浏览器</p>',
                '  </a>',
                '  <a href="http://www.firefox.com.cn/download/" class="fl"  target="_bank">',
                // '    <img src="./assets/images/browser/firefox.png" alt="火狐浏览器">',
                '    <p>火狐浏览器</p>',
                '  </a>',
                '  <a href="https://browser.qq.com/" class="fl"  target="_bank">',
                // '    <img src="./assets/images/browser/liebao.png" alt="猎豹浏览器">',
                '    <p>QQ浏览器</p>',
                '  </a>',
                '  <a href="https://ie.sogou.com/" class="fl"  target="_bank">',
                // '    <img src="./assets/images/browser/sogo.png" alt="搜狗浏览器">',
                '    <p>搜狗浏览器</p>',
                '  </a>',
                // '  <a href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads" class="fl">',
                // '    <img src="./assets/images/browser/ie.png" alt="IE浏览器">',
                // '    <p>IE浏览器</p>',
                // '  </a>',
                '</div>',
                '<div class="btn-line">',
                '  <button class="btn cancel" onclick="_browserService.cancel()">关闭</button>',
                '</div>',
                '</div>'].join("");
            document.body.innerHTML += compatiblePromptRef;
            // var boxId = document.getElementById('compatible-prompt');
            // boxId.style.display = 'block';
        }
    }
