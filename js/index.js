var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');
accountingCollection.load();

$("#submit").click(function(){
	var date = $("#date").val()
	var category = $("#category").val()
	var item = $("#item").val()
	var money = $("#money").val()
	
	var newAccounting = {
		date: date,
		category: category,
		item: item,
		money: money
	}
	accountingCollection.insert(newAccounting);
	accountingCollection.save()

	var date = $("#date").val("")
	var category = $("#category").val("")
	var item = $("#item").val("")
	var money = $("#money").val("")
	alert("儲存成功")
})