/*//  !	SQF - Simplified Query Functions - V1.1 05/2018 ! \\*/
/*//  !	Gabriel Tessarini !	\\*/
function sqf(){}
sqf.prototype.create = function(){
    var ret = "{", args = arguments, length = args.length, count = 0;
    while(count < length){
        ret += count < length-1 ? '"' + args[count] + '"' + ":[]," : '"' + args[count] + '"' + ":[]";
        count++;
    }
    ret += "}";
    ret = JSON.parse(ret);
    return ret;	
};
sqf.prototype.alterAdd = function(element, add){
    var elJ = JSON.stringify(element);
    elJ = elJ.substring(0, elJ.length-1);
    elJ = elJ + ', ' + '"'+ add + '"' + ':[]}';
    element = JSON.parse(elJ);
    return element;
};
sqf.prototype.alterDrop = function(element, drop){
    for(var prop1 in element){
        if(prop1 == drop)
            delete element[prop1];		
    }			
    return element;
};
sqf.prototype.truncate = function(element){
    for(var prop in element){
        element[prop]=[];
    }
    return element;
};
sqf.prototype.insert = function(){
    var element = arguments[0], count = 0, length = 0, args = arguments;
    if(args.length > 2){
        count++;
    }else{		
        args = args[1];		
    }
    length = args.length;
    if(element instanceof Array){
        if(!(args instanceof Array) && args !== arguments){
            element[element.length] = args;			
        }else{
            while(count<length){
                element[element.length] = args[count];			
                count++;	
            }
        }
    }else{
        var props = [];
        var count2 = count === 1 ? 0 : count;
        for(var prop1 in element){
            props[props.length] = prop1;	
        }		
        while(count < length){
            for(var prop2 in element){			
                if(prop2 == props[count2]){
                    if(!(element[prop2] instanceof Array)){
                        element[prop2] = [element[prop2]];
                    }
                    element[prop2][element[prop2].length] = args[count];
                }
            }			
            count++;
            count2++;
        }		
    }	
    return element;
};
sqf.prototype.update = function(element, is, to){
    var count = 0, length = element.length;
    while(count < length){
        element[count] = element[count] === is ? to : element[count];			
        count++;
    }
    return element;
};
sqf.prototype.delete = function(element, del){
    var delet = [], count = 0, length = element.length;
    while(count < length){
        if(element[count] !== del) delet[delet.length] = element[count];
        count++;
    }
    if(delet.length)
        element = delet;	
    return element;
};
sqf.prototype.where = function(element, oper, compar, posi, qty){
    var where = null;
    if(oper.trim() == "") return where;
    var length = element.length;
    qty = typeof(qty) === "undefined" || qty == false ? length : typeof(qty) !== "undefined" && (qty == true || qty >= 0) ? qty : null;
    if(qty === null) return where;
    var	whereArr = [], expr = false, count = 0, situ = true;
    while(situ && (count < length && qty >= length || whereArr.length < qty && count < length)){
        switch(oper){
            case "==": 
                expr = element[count] == compar ? true: false;
                break;
            case "===":
                expr = element[count] === compar ? true: false;
                break;
            case "!=":
                expr = element[count] != compar ? true: false;
                break;
            case "!==":
                expr = element[count] !== compar ? true: false;
                break;
            case ">":
                expr = element[count] > compar ? true: false;
                break;
            case "<":
                expr = element[count] < compar ? true: false;
                break;
            case ">=":
                expr = element[count] >= compar ? true: false;
                break;
            case "<=":
                expr = element[count] <= compar ? true: false;
                break;
            case "isNull":
                expr = element[count] === null ? true: false; 
                expr = expr == compar ? true: false;
                break;
            case "isNotNull":
                expr = element[count] !== null ? true : expr; 
                expr = expr == compar ? true : false;
                break;
            case "typeof":
                expr = typeof(element[count]) == compar ? true : false;
                break;
            case "instanceof":
                expr = element[count] instanceof compar ? true : false;
                break;
            case "isEven":
                expr = element[count] % 2 === 0 ? true : false; 
                expr = expr == compar ? true : false;
                break;
            case "isOdd":
                expr = element[count] % 2 !== 0 ? true : false;
                expr = expr == compar ? true : false;
                break;
            default:
                expr = false;
                situ = false;
        }
        if(expr === true){			
            where = typeof(posi) !== "undefined" && posi == true ? count : element[count];
            if(qty === length)	
                whereArr[whereArr.length] = where;				
            else if(qty == 1)
                break;
            else if(whereArr.length < qty)
                whereArr[whereArr.length] = where;
        }
        count++;			
    }		
    if(whereArr.length){
        where = whereArr;
        if(whereArr.length === 1) where = whereArr[0];
    }
    return where;
};
sqf.prototype.repeat = function(func, times){
    var count = 0, context = this, args = arguments;
    while(count < times){
        func.apply(context, args);
        count++;		
    }
};
sqf.prototype.isNull = function(element){
    return element === null ? true : false;
};
sqf.prototype.isNotNull = function(element){
    return element !== null ? true : false;
};
sqf.prototype.nullTo = function(element, value){
    if(!(element instanceof Array) && element === null){
        element = value;
    }else if(element instanceof Array){
        var count = 0, length = element.length;
        while(count < length){
            element[count] = element[count] === null ? value : element[count];	
            count++;	
        }
    }
    return element;
};
sqf.prototype.isUnique = function(value, element){
    var length = element.length, count = 0;
    var uniq = 0;
    while(count < length && uniq <= 1){
        uniq += element[count] === value ? 1 : 0;
        count++;
    }
    return uniq === 1 ? true : false;
};
sqf.prototype.isEven = function(element){
    return element % 2 === 0 ? true : false;
};
sqf.prototype.isOdd = function(element){
    return element % 2 !== 0 ? true : false;
};
sqf.prototype.sum = function(element){
    var sum = 0, count = 0, length = element.length;
    while(count < length){
        sum = sum + (element[count]*1);
        count++;		
    }
    return sum;
};
sqf.prototype.multiply = function(element){
    var mult = 1, count = 0, length = element.length;
    while(count < length){
        mult = mult * (element[count]*1);
        count++;		
    }
    return mult;
};
sqf.prototype.average = function(element){
    var av = 0, count = 0, length = element.length;
    while(count < length){
        av += (element[count]*1);
        count++;
    }
    av = av/length;
    return av;
};
sqf.prototype.min = function(element){
    var min = element[0]*1;
    var count = 0, length = element.length;
    while(count < length){
        if(element[count]*1 < min) min = element[count]*1;
        count++;
    }
    return min;
};
sqf.prototype.max = function(element){
    var max = element[0]*1;
    var count = 0, length = element.length;
    while(count < length){
        if(element[count]*1 > max) max = element[count]*1;
        count++;
    }
    return max;
};
sqf.prototype.difference = function(element1, element2, len){
    var diff = 0, len1 = element1.length, len2 = element2.length;
    if(typeof(len) !== "undefined" && len == true){
        diff = (len1 - len2);
        diff = diff < 0 ? (len1 - len2)*-1 : diff;
        return diff;
    }else{
        var count1, count2, count3 = 0, el1 = element1, el2 = element2;
        diff = [];
        var length = len1 + len2;
        while(count3 < 3){
            count2 = 0;
            while(count2 < length){
                count1 = 0;
                while(count1 < length){
                    if(el1[count1] === el2[count2]){el1.splice(count1, 1); 
                    el2.splice(count2, 1);}
                    count1++;			
                }
                count2++;
            }
            count3++;
        }
        if(el1.length){
            count1 = 0;
            while(count1 < el1.length){
                diff[diff.length] = el1[count1];
                count1++;
            }			
        }
        if(el2.length){
            count1 = 0;
            while(count1 < el2.length){
                diff[diff.length] = el2[count1];
                count1++;
            }
        }
    }
    return diff;
};
sqf.prototype.variance = function(element){
    var varic = 0, media = 0, count = 0, length = element.length;
    while(count < length){
        media += (element[count]*1);
        count++;
    }
    media = media/length;
    count = 0;    
    while(count < length){
        varic += (element[count]*1 - media)*(element[count]*1 - media);
        count++;
    }
    varic = varic/(length-1);
    return varic;
};
sqf.prototype.deviation = function(element){
    var dp = 0, avg = 0, count = 0, length = element.length;
    while(count < length){
        avg += (element[count]*1);
        count++;
    }
    avg = avg/length;
    count = 0;    
    while(count < length){
        dp += (element[count]*1 - avg)*(element[count]*1 - avg);
        count++;
    }
    dp = dp/(length-1);
    dp = Math.sqrt(dp);
    return dp;
};
var sq = new sqf();
