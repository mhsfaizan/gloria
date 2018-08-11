app.filter("getDiscount",()=>{
	return (price,mrp)=>{
		// console.log(price+" "+mrp);
		// var price = parseInt(price,10);
		// var discount = parseInt(discount,10);
		var discount = (100-[(100*price)/mrp]);
		return Math.ceil(discount);
	}
});

app.filter("toArr",()=>{
	return (string)=>{
		return string.split(",");
	}
})
app.filter("toArrFirst",()=>{
	return (string)=>{
		return string.split(",")[0];
	}
})
