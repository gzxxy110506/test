//函数形式
function SetSub(str,n){  
   var strReg=/[^\x00-\xff]/g;  
   var _str=str.replace(strReg,"**");  
   var _len=_str.length;  
   if(_len>n){  
     var _newLen=Math.floor(n/2);  
     var _strLen=str.length;  
     for(var i=_newLen;i<_strLen;i++){  
         var _newStr=str.substr(0,i).replace(strReg,"**");  
         if(_newStr.length>=n){  
             return str.substr(0,i)+"...";  
             break;
        }  
     }  
   }else{  
     return str;  
   }  
}
//拓展方法形式，在字符串的原型方法上添加该方法
String.prototype.setsub = function(n){
    var _this = this;
    var strReg=/[^\x00-\xff]/g;
    var _str = _this.replace(strReg,"**");
    var _len = _str.length;

    if(_len>n){
        var _newLen = Math.floor(n/2);
        var _strLen = _this.length;
        for(var i = _newLen;i<_strLen;i++){
            var _newStr = _this.substr(0,i).replace(strReg,"**");
            if(_newStr.length>= n){
                return str.substr(0,i)+"...";
                break;
            }
        }
    }else{
        return _this;
    }
}