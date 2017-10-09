Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o){
			if (new RegExp("(" + k + ")").test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
    return fmt;
}

$(function(){
	var text = "\ufeff";  
	function getQueryString(name) {
        var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    }
	
	var dbName = getQueryString("db");

	var db = new Dexie("task_" + dbName);
	var schema = {};
	schema["urls"] = "id,url,tag";
	schema["data"] = "++id,name,value,time";
    db.version(1).stores(schema);

	$("#dataDiv").empty();
	var table = $('<table class="gridtable" cellspacing="0" cellpadding="0" border="0"></table>');
	//var loadOffset = 0;
	db.data.offset(0).limit(10).toArray(function(arr){
		if(arr.length == 0) return;
		if(arr[0].value.length == 0)return;
		var fr = arr[0].value[0];
		var tableName = arr[0].name;
		var thread = $("<thead></thead>");
		thread.append($("<td>&nbsp</td>"));
		for(var p in fr){
			thread.append($("<td>"+ p +"</td>"));
		}
		table.append(thread);
		var tbody = $("<tbody></tbody>");
		var idx = 1;
		for(var h=0;h<arr.length;h++){
			for(var x=0; x<arr[h].value.length; x++){
				var item = arr[h].value[x];
				var tr = $("<tr></tr>");
				tr.append($("<td>"+ (idx++) +"</td>"));
				for(var p in item){
					var td = $("<td></td>");
					td.text(item[p]);
					tr.append(td);
				}

				tbody.append(tr);
			}
		}
		table.append(tbody);
	});
	$("#dataDiv").append(table);
	$("#clear").bind("click",function(){
		layer.confirm('确定要清空数据吗？', {
		   btn: ['确定', '取消'] 
		}, function(index, layero){
		   db.data.clear();
		   layer.close(index);
		   layer.msg("数据已清空!");
		}, function(index){
		   layer.close(index);
		});
		
	});
	$("#export").bind("click",function(){
		db.data.toArray(function(arr){
			if(arr.length == 0) return;
			if(arr[0].value.length == 0)return;
			var fr = arr[0].value[0];
			var tableName = arr[0].name;
			var headArr =  [];
			for(var p in fr){
				headArr.push('"' + p + '"');
			}
			text += headArr.join();
			text+='\n';

			for(var h=0;h<arr.length;h++){
				for(var x=0; x<arr[h].value.length; x++){
					var item = arr[h].value[x];
					var varr = [];
					
					for(var p in item){
						varr.push('"' + item[p].replace(/(")/g, '""') + '"');
					}
					text += varr.join();
					text +='\n';
				}
			}
			
			var blob = new Blob([text], { type: 'text/csv,charset=UTF-8'});
			var csvUrl = URL.createObjectURL(blob);
			var link = document.createElement("a");  
            link.setAttribute("href", csvUrl);
			link.setAttribute("download", tableName + "_" + new Date().Format("yyyyMMddhhmmss") + ".csv");
            document.body.appendChild(link);  
            link.click();
			document.body.removeChild(link);
		});
	});
	
	
});

