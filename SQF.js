/*//  !	SQF - Simplified Query Functions - V1 03/2017 ! \\*/
/*//  !	Gabriel Tessarini !	\\*/
function sQfFactory(){
	this.create=function(){
		var ret = "{", args = arguments, length = args.length, cont = 0;
		while(cont < length){
			ret+= cont < length-1 ? '"' + args[cont] + '"' + ":[]," : '"' + args[cont] + '"' + ":[]";
			cont++;
		}
		ret+="}";
		ret = JSON.parse(ret);
		return ret;	
	};
	this.alterAdd=function(elemnt, add){
		var elJ = JSON.stringify(elemnt);
		elJ = elJ.substring(0, elJ.length-1);
		elJ = elJ + ', ' + '"'+ add + '"' + ':[]}';
		elemnt = JSON.parse(elJ);
		return elemnt;
	};
	this.alterDrop=function(elemnt, drop){
		for(var prop1 in elemnt){
			if(prop1 == drop)
				delete elemnt[prop1];		
		}			
		return elemnt;
	};
	this.truncate=function(elemnt){
		for(var prop in elemnt){
			elemnt[prop]=[];
		}
		return elemnt;
	};
	this.insert=function(){
		var elemnt = arguments[0], cont = 0, length = 0, args = arguments;
		if(args.length > 2){
			cont++;
		}else{		
			args = args[1];		
		}
		length = args.length;
		if(elemnt instanceof Array){
			if(!(args instanceof Array) && args !== arguments){
				elemnt[elemnt.length] = args;			
			}else{
				while(cont<length){
					elemnt[elemnt.length] = args[cont];			
					cont++;	
				}
			}
		}else{
			var props = [];
			var cont2 = cont === 1 ? 0 : cont;
			for(var prop1 in elemnt){
				props[props.length] = prop1;	
			}		
			while(cont < length){
				for(var prop2 in elemnt){			
					if(prop2 == props[cont2]){
						if(!(elemnt[prop2] instanceof Array)){
							elemnt[prop2] = [elemnt[prop2]];
						}
						elemnt[prop2][elemnt[prop2].length] = args[cont];
					}
				}			
				cont++;
				cont2++;
			}		
		}	
		return elemnt;
	};
	this.update = function(elemnt, is, to){
		var cont = 0, length = elemnt.length;
		while(cont < length){
			elemnt[cont] = elemnt[cont] === is ? to : elemnt[cont];			
			cont++;
		}
		return elemnt;
	};
	this.delet=function(elemnt, del){
		var ret = [], cont = 0, length = elemnt.length;
		while(cont < length){
			if(elemnt[cont] !== del) ret[ret.length] = elemnt[cont];
			cont++;
		}
		if(ret.length)
			elemnt = ret;	
		return elemnt;
	};
	this.where = function(elemnt, oper, compar, posi, qtd){
		var ret = null;
		if(oper.trim() == "") return ret;
		var length = elemnt.length;
		qtd = typeof(qtd) === "undefined" || qtd == false ? length : typeof(qtd) !== "undefined" && (qtd == true || qtd >= 0) ? qtd : null;
		if(qtd === null) return ret;
		var	retArr = [], expr = false, cont = 0, situ = true;
		while(situ && (cont < length && qtd >= length || retArr.length < qtd && cont < length)){
			switch(oper){
				case "==": expr = elemnt[cont] == compar ? true: false;
					break;
				case "===": expr = elemnt[cont] === compar ? true: false;
					break;
				case "!=": expr = elemnt[cont] != compar ? true: false;
					break;
				case "!==": expr = elemnt[cont] !== compar ? true: false;
					break;
				case ">": expr = elemnt[cont] > compar ? true: false;
					break;
				case "<": expr = elemnt[cont] < compar ? true: false;
					break;
				case ">=": expr = elemnt[cont] >= compar ? true: false;
					break;
				case "<=": expr = elemnt[cont] <= compar ? true: false;
					break;
				case "isNull": expr = elemnt[cont] === null ? true: false; expr = expr == compar ? true: false;
					break;
				case "isNotNull": expr = elemnt[cont] !== null ? true : expr; expr = expr == compar ? true : false;
					break;
				case "typeof": expr = typeof(elemnt[cont]) == compar ? true : false;
					break;
				case "instanceof": expr = elemnt[cont] instanceof compar ? true : false;
					break;
				case "isEven": expr = elemnt[cont] % 2 === 0 ? true : false; expr = expr == compar ? true : false;
					break;
				case "isOdd": expr = elemnt[cont] % 2 !== 0 ? true : false; expr = expr == compar ? true : false;
					break;
				default: expr = false; situ = false;
			}
			if(expr === true){			
				ret = typeof(posi) !== "undefined" && posi == true ? cont : elemnt[cont];
				if(qtd === length)	
					retArr[retArr.length] = ret;				
				else if(qtd == 1)
					break;
				else if(retArr.length < qtd)
					retArr[retArr.length] = ret;
			}
			cont++;			
		}		
		if(retArr.length){
			ret = retArr;
			if(retArr.length === 1) ret = retArr[0];
		}
		return ret;
	};
	this.repeat=function(func, times){
		var cont = 0, context = this ,args = arguments;
		while(cont < times){
			func.apply(context, args);
			cont++;		
		}
	};
	this.isNull = function(elemnt){
		return elemnt === null ? true : false;
	};
	this.isNotNull = function(elemnt){
		return elemnt !== null ? true : false;
	};
	this.nullTo = function(elemnt, value){
		if(!(elemnt instanceof Array) && elemnt === null){
			elemnt = value;
		}else if(elemnt instanceof Array){
			var cont = 0, length = elemnt.length;
			while(cont < length){
				elemnt[cont] = elemnt[cont] === null ? value : elemnt[cont];	
				cont++;	
			}
		}
		return elemnt;
	};
	this.isUnique = function(value, elemnt){
		var length = elemnt.length, cont = 0;
		var ret = 0;
		while(cont < length && ret <= 1){
			ret += elemnt[cont] === value ? 1 : 0;
			cont++;
		}
		return ret === 1 ? true : false;
	};
	this.isEven=function(elemnt){
		return elemnt % 2 === 0 ? true : false;
	};
	this.isOdd=function(elemnt){
		return elemnt % 2 !== 0 ? true : false;
	};
	this.sum=function(elemnt){
		var ret = 0, cont = 0, length = elemnt.length;
		while(cont < length){
			ret = ret + (elemnt[cont]*1);
			cont++;		
		}
		return ret;
	};
	this.multiply=function(elemnt){
		var ret = 1, cont = 0, length = elemnt.length;
		while(cont < length){
			ret = ret * (elemnt[cont]*1);
			cont++;		
		}
		return ret;
	};
	this.average=function(elemnt){
		var av = 0, cont = 0, length = elemnt.length;
		while(cont < length){
			av += (elemnt[cont]*1);
			cont++;
		}
		av = av/length;
		return av;
	};
	this.min=function(elemnt){
		var min = elemnt[0]*1;
		var cont = 0, length = elemnt.length;
		while(cont < length){
			if(elemnt[cont]*1 < min) min = elemnt[cont]*1;
			cont++;
		}
		return min;
	};
	this.max=function(elemnt){
		var max = elemnt[0]*1;
		var cont = 0, length = elemnt.length;
		while(cont < length){
			if(elemnt[cont]*1 > max) max = elemnt[cont]*1;
			cont++;
		}
		return max;
	};
	this.difference = function(elemnt1, elemnt2, len){
		var ret = 0, len1 = elemnt1.length, len2 = elemnt2.length;
		if(typeof(len) !== "undefined" && len == true){
			ret = (len1 - len2);
			ret = ret < 0 ? (len1 - len2)*-1 : ret;
			return ret;
		}else{
			var cont1, cont2, cont3 = 0, el1 = elemnt1, el2 = elemnt2;
			ret = [];
			var length = len1 + len2;
			while(cont3 < 3){
				cont2 = 0;
				while(cont2 < length){
					cont1 = 0;
					while(cont1 < length){
						if(el1[cont1] === el2[cont2]){el1.splice(cont1, 1); el2.splice(cont2, 1);}
						cont1++;			
					}
					cont2++;
				}
				cont3++;
			}
			if(el1.length){
				cont1 = 0;
				while(cont1 < el1.length){
					ret[ret.length] = el1[cont1];
					cont1++;
				}			
			}
			if(el2.length){
				cont1 = 0;
				while(cont1 < el2.length){
					ret[ret.length] = el2[cont1];
					cont1++;
				}
			}
		}
		return ret;
	};
	this.variance=function(elemnt){
		var varic = 0, media = 0, cont = 0, length = elemnt.length;
		while(cont < length){
			media += (elemnt[cont]*1);
			cont++;
		}
		media = media/length;
		cont = 0;    
		while(cont < length){
			varic += (elemnt[cont]*1 - media)*(elemnt[cont]*1 - media);
			cont++;
		}
		varic = varic/(length-1);
		return varic;
	};
	this.deviation=function(elemnt){
		var dp = 0, avg = 0, cont = 0, length = elemnt.length;
		while(cont < length){
			avg += (elemnt[cont]*1);
			cont++;
		}
		avg = avg/length;
		cont = 0;    
		while(cont < length){
			dp += (elemnt[cont]*1 - avg)*(elemnt[cont]*1 - avg);
			cont++;
		}
		dp = dp/(length-1);
		dp = Math.sqrt(dp);
		return dp;
	};
}
var sQ = new sQfFactory();
