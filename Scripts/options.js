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
	var db = new Dexie("tasks");
	db.version(1).stores({
		task:"id,name,script,run_id"
	});
	
	$("#importTask").change(function(){
		var files = $('#importTask').prop('files');//获取到文件列表
        if(files.length == 0){
            layer.alert('Choose file');
        }
		else{
            var reader = new FileReader();//新建一个FileReader
            reader.readAsText(files[0], "UTF-8");//读取文件 
            reader.onload = function(evt){ //读取完文件之后会回来这里
				var fileString = evt.target.result; // 读取文件内容
				var taskObject = JSON.parse(fileString);
				db.task.where('id').equals(taskObject.id).first(function(a){
					if(a){
						layer.alert("Task already exists!");
					}
					else{
						db.task.add(taskObject);
						layer.alert("Create task success!",function(){
							location.href=location.href;
						});
					}
				});
			}
		}
	});

	db.task.toArray(function(tasksArr){
		$("#dataTable tbody").empty();
		$(tasksArr).each(function(index){
			var tr = $("<tr></tr>");
			var idTd = $("<td></td>");
			idTd.text(this.id);
			tr.append(idTd);
			var nameTd = $("<td></td>");
			nameTd.text(this.name);
			tr.append(nameTd);
			var dateTd = $("<td></td>");
			dateTd.text(new Date(this.run_id).Format("yyyy-MM-dd hh:mm:ss"));
			tr.append(dateTd);
			var actionTd= $("<td></td>");
			tr.append(actionTd);
			var viewBtn = $("<button/>");
			viewBtn.text("Task");
			viewBtn.attr('target',this.id);
			viewBtn.bind("click", function(){
				var id = $(this).attr("target");
				db.task.where('id').equals(parseInt(id)).first(function(a){
					layer.open({
						type: 1,
						skin: 'layui-layer-rim',
						area: ['600px', '450px'],
						content: '<div><input id="saveContent" type="button" value="Save" /></div><div id="content" contenteditable="true" style="min-height:450px;">' + JSON.stringify(a.script) + '</div>',
						success: function(layero, index){
							$("#saveContent").bind("click",function(){
								//console.log($("#content").text());
								db.task.where('id').equals(parseInt(id)).modify({ 'script': JSON.parse($("#content").text()) });
								layer.close(index);
								layer.msg("Upgrade script success!");
							});
						}
					});
				});
			});
			actionTd.append(viewBtn);
			var dataBtn = $("<button/>");
			dataBtn.text("Data");
			dataBtn.attr('target',this.id);
			actionTd.append(dataBtn);
			dataBtn.bind("click",function(){
				var id = $(this).attr("target");
				layer.open({
					type: 2,
					skin: 'layui-layer-rim',
					area: ['900px', '600px'],
					content: 'datas.html?db=' + id
				});
			});
			var runBtn = $("<button/>");
			runBtn.text("Run");
			runBtn.attr('target',this.id);
			runBtn.bind("click", function(){
				var id = $(this).attr("target");
				db.task.where('id').equals(parseInt(id)).first(function(a){
					chrome.runtime.sendMessage(JSON.stringify({ command: "runCrawler", data: a }), function (response) {
						
					});
				});
			});
			actionTd.append(runBtn);
			var removeBtn = $("<button/>");
			removeBtn.text("Delete");
			removeBtn.attr('target',this.id);
			removeBtn.bind("click", function(){
				var id = $(this).attr("target");
				
				layer.confirm('Are you sure delete this task?', {
				   btn: ['Yes','No'] //按钮
				}, function(){
					chrome.runtime.sendMessage(JSON.stringify({ command: "removeCrawler", data: id }), function (response) {
						setTimeout(function(){location.href=location.href;},500);
					});
				});
			});
			actionTd.append(removeBtn);
			
			var exportBtn = $("<button/>");
			exportBtn.text("Export Task");
			exportBtn.attr('target',this.id);
			exportBtn.bind("click", function(){
				var id = $(this).attr("target");
				db.task.where('id').equals(parseInt(id)).first(function(a){
					var text = JSON.stringify(a);
					var blob = new Blob([text], { type: 'text/plain,charset=UTF-8'});
					var url = URL.createObjectURL(blob);
					var link = document.createElement("a");  
					link.setAttribute("href", url);
					link.setAttribute("download", a.name + ".txt");
					document.body.appendChild(link);  
					link.click();
					document.body.removeChild(link);
				});
			});
			actionTd.append(exportBtn);
			
			$("#dataTable tbody").append(tr);
		});
	});
});

