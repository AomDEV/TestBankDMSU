//Exploit and Script by @AOM
var ans = $("input[name=answer]").val(); //Get Answer from hidden field
var a_ans = ans.split(","); //Convert answer string to array
for(var i=0;i<a_ans.length;i++){ //Loop answer list
 var choice = $("#choice"+(i+1)).val(); //get choice by id
 var get_val = choice.split(","); //convert value of choice field to array
 //Auto Select an Answer
 $("#choice"+(i+1)+"[value='"+get_val[0]+","+a_ans[i]+"']").click(); //combine to element name and do click event
}
