export default class UtilityService {
    /**
     * @Title 判断空
     * @Description 判断空
     * @author hedongyang
     * @param val
     * @returns {Boolean} 空返回true
     */
    static isEmpty(val) {
        if (typeof val === 'string' || val instanceof String) {
            val = val.replace(/\s/g, '');
        }
        if (val === null) {
            return 1;
        }
        if (val === undefined || val === 'undefined') {
            return 1;
        }
        if (val === '') {
            return 1;
        }
        if (val.length === 0) {
            return 1;
        }
        if (!/[^(^\s*)|(\s*$)]/.test(val)) {
            return 1;
        }
        return 0;
    };

    /**
     * 判断obj对象是否没有属性
     * 空返回true
     * @param obj 只接收obj
     * @returns {boolean}
     */
    static isEmptyProperty(obj) {
        let key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                return 0; //  不为空返回false
            }
        }
        return 1; //  空返回true
    }
    /**
     * 获取页面参数
     * @param key
     */
    static getQueryString(key): string {
           var query = window.location.search.substring(1);
           var vars = query.split("&");
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=");
                   if(pair[0] == key){return pair[1];}
           }
           return null;
    }
    /**
     * str表示原字符串变量，flg表示要插入的字符串，sn表示要插入的位置
     * @param str
     * @param flg
     * @param sn
     */
    static insertFlg(str, flg, sn) {
        let newstr = '';
        for (let i = 0; i < str.length; i += sn) {
            let tmp = str.substring(i, i + sn);
            newstr += tmp + flg;
        }
        return newstr;
    }

    /**
     * @ngdoc function
     * @name angular.isObject
     * @module ng
     * @kind function
     *
     * @description
     * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
     * considered to be objects. Note that JavaScript arrays are objects.
     *
     * @param {*} value Reference to check.
     * @returns {boolean} True if `value` is an `Object` but not `null`.
     */
    static isObject(value) {
        //  http:// jsperf.com/isobject4
        return value !== null && typeof value === 'object';
    }

    /**
     * @Title 将小数转换为百分比
     * @Description 将小数转换为百分比
     * @author hedongyang
     * @param val,n
     * @returns {Boolean}  空返回true
     */
    static getPercent(val, n) {
        if (this.isEmpty(val)) {
            return '0%';
        }
        n = n || 2;
        return (Math.round(val * Math.pow(10, n + 2)) / Math.pow(10, n)).toFixed(n) + '%';
    };
    /**
     * 为数字添加分隔符
     * eg:
     * input 1234567 return 12,345.67
     * @param nStr
     */
    static formatNumber(nStr: number | string): string {
        if (!nStr) {
            nStr = "0";
        }
        const x = (nStr + '').split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    };
    /**
     * @Title  深度不带地址拷贝
     * @Description 将多个参数的属性拷贝给第一个参数
     * @author hedongyang
     * @version V1.0
     */
    static extendDeep(...paramList): any {
        //  dst为要拷入属性值的对象，使用浅拷贝去除第一级地址指向
        let dst = paramList[0]; //  Object.assign({}, paramList[0]);
        for (const obj of paramList) {
            if (obj !== dst) {
                for (const key in obj) {
                    /*排除原型属性*/
                    if (obj.hasOwnProperty(key)) {
                        let value = obj[key];
                        let dstValue = dst[key];
                        if (this.isObject(dstValue) || Array.isArray(dstValue)) {
                            this.extendDeep(dst[key], value);
                        } else {
                            if (!value || !value.__proto__) {
                                dst[key] = value;
                            } else {
                                dst[key] = Object.assign(value);
                            }

                        }
                    }
                }
            }
        }
        return dst;
    };
    /**
     * @Title 范围内生成随机数
     * @Description
     * @author hedongyang
     * @returns number
     */
    static randomNum(minNum: number, maxNum: number): number {
        switch (arguments.length) {
            case 1:
                return parseInt((Math.random() * minNum + 1) + '', 10);
            case 2:
                return parseInt((Math.random() * (maxNum - minNum + 1) + minNum) + '', 10);
            default:
                return 0;
        }
    }
}
