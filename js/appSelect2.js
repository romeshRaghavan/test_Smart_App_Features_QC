function smsSelect2(ocrRow1){
var accHeadOcr = "";
if(mydb){
    mydb.transaction(function (t) {
        t.executeSql("SELECT * FROM accountHeadMst", [], function getAccHeadListOcr (transaction, results) {

            var i;
            var jsonAccHeadArr = [];
            for (i = 0; i < results.rows.length; i++) {
                var row = results.rows.item(i);
                var jsonFindAccHead = new Object();
                jsonFindAccHead["Label"] = row.accountHeadId;
                jsonFindAccHead["Value"] = row.accHeadName;
                jsonAccHeadArr.push(jsonFindAccHead);
            }

            var jsonArr = [];
            if(jsonAccHeadArr != null && jsonAccHeadArr.length > 0){
                for(var i=0; i<jsonAccHeadArr.length; i++ ){
                    var stateArr = new Array();
                    stateArr = jsonAccHeadArr[i];
                    jsonArr.push({id: stateArr.Label,name: stateArr.Value});
                }
            }
            jsonArr.sort(function(a, b){ // sort object by Account Head Name
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                    if (nameA > nameB)
                        return 1
                        return 0 //default return value (no sorting)
            })
             accHeadOcr = "accountHeadSMS_"+ocrRow1    ;
            console.log(accHeadOcr)
            j("#"+accHeadOcr).select2({
                data:{ results: jsonArr, text: 'name' },
                minimumResultsForSearch: -1,
                placeholder : "Select Account Head",
                formatResult: function(result) {
                    if ( ! isJsonString(result.id))
                        result.id = JSON.stringify(result.id);
                    return result.name;
                }
            });

        j("#"+accHeadOcr).change(function() {
      getExpenseNamesBasedOnAccountHeadForSMS(ocrRow1);
  });
getExpenseNamesBasedOnAccountHeadForSMS(ocrRow1);

        });

    t.executeSql("SELECT * FROM currencyMst", [], function getCurrencyList (transaction, results) {

     var i;
    var jsonCurrencyArr = [];

    for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
        var jsonFindCurrHead = new Object();
        jsonFindCurrHead["Value"] = row.currencyId;
        jsonFindCurrHead["Label"] = row.currencyName;
        
        jsonCurrencyArr.push(jsonFindCurrHead);
    }
   var jsonArr = [];
    if(jsonCurrencyArr != null && jsonCurrencyArr.length > 0){
        for(var i=0; i<jsonCurrencyArr.length; i++ ){
            var stateArr = new Array();
            stateArr = jsonCurrencyArr[i];
            
            jsonArr.push({id: stateArr.Value,name: stateArr.Label});
        }
    }

      var ocrCurrency = "currencySMS_"+ocrRow1    ;
        // console.log(ocrCurrency)

    j("#"+ocrCurrency).select2({
        data:{ results: jsonArr, text: 'name' },
        placeholder: "Currency",
        minimumResultsForSearch: -1,
        
        formatResult: function(result) {
            if ( ! isJsonString(result.id))
                result.id = JSON.stringify(result.id);
                return result.name;
        }
    });


 });
 });


}else {
         alert('Database not found, your browser does not support web sql!');
    }
    
}



 function getExpenseNamesBasedOnAccountHeadForSMS(i){

   var accountHeadID = "";
    try{
    accountHeadID = j("#accountHeadSMS_"+i).select2('data').id;
     }catch(e){
        console.log(e);
     }
      console.log("getExpenseNamesfromDBForOCR");
      getExpenseNamesfromDBForSMS(accountHeadID,i);
 }


 // function getExpenseNamesBasedOnAccountHeadForOCR(i){

 //   var accountHeadID = "";
 //    try{
 //    accountHeadIDOCR = j("#accountHeadSMS_"+i).select2('data').id;
 //     }catch(e){
 //        console.log(e);
 //     }
 //      console.log("getExpenseNamesfromDBForOCR");
 //      getExpenseNamesfromDBForSMS(accountHeadIDOCR,i);
 // }




 function getExpenseNamesfromDBForSMS(accountHeadId,rowNo){
    var jsonArra = [];
    j('#errorMsgArea').children('span').text("");
if(accountHeadId == ""){
                var expName = "expenseNameSMS_"+rowNo ;


            j("#"+expName).select2({
                data:{ results: jsonArra, text: 'name' },
                placeholder: "Expense Name",
                minimumResultsForSearch: -1,
                // initSelection: function (element, callback) {
                //             callback();
                // },
                formatResult: function(result) {
                    if ( ! isJsonString(result.id))
                        result.id = JSON.stringify(result.id);
                        return result.name;
                }
            });

           j("#"+expName).change(function() {
      getPerUnitBasedOnExpenseForSMS(rowNo);
  });
 getPerUnitBasedOnExpenseForSMS(rowNo)
}

 if (mydb) {
        //Get all the employeeDetails from the database with a select statement, set outputEmployeeDetails as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("SELECT * FROM expNameMst where accHeadId="+accountHeadId, [], function getCommonExpNameList(transaction, results) {
            console.log("in getCommonExpNameList");
            var i;
            var jsonExpNameArr = [];
            for (i = 0; i < results.rows.length; i++) {
                var row = results.rows.item(i);
                var jsonFindExpNameHead = new Object();
                jsonFindExpNameHead["Label"] = row.id;
                jsonFindExpNameHead["Value"] = row.expName;
                console.log("row.expName   "+row.expName);
                jsonExpNameArr.push(jsonFindExpNameHead);
            }


            
            if(jsonExpNameArr != null && jsonExpNameArr.length > 0){
                for(var i=0; i<jsonExpNameArr.length; i++ ){
                    var expArr = new Array();
                    expArr = jsonExpNameArr[i];
                    
                    jsonArra.push({id: expArr.Label,name: expArr.Value});
                }
            }

    /*document.getElementById("fromLoc_"+i).value = "";
    document.getElementById("toLoc_"+i).value = "";
    document.getElementById("narration_"+i).value = "";
    document.getElementById("unit_"+i).value = "";
    document.getElementById("amount_"+i).value = "";*/

            var expName = "expenseNameSMS_"+rowNo ;


            j("#"+expName).select2({
                data:{ results: jsonArra, text: 'name' },
                placeholder: "Expense Name",
                minimumResultsForSearch: -1,
                // initSelection: function (element, callback) {
                //             callback();
                // },
                formatResult: function(result) {
                    if ( ! isJsonString(result.id))
                        result.id = JSON.stringify(result.id);
                        return result.name;
                }
            });



           j("#"+expName).change(function() {
      getPerUnitBasedOnExpenseForSMS(rowNo);
  });


    var expName ="";
    try{
    expNameID = j("#"+expName).select2('data').id;
    //alert("!!!!!!!!"+expNameID.value)
   }catch(e){
        console.log(e);
   }
   console.log("getExpenseNamesfromDBForOCR");
      getPerUnitBasedOnExpenseForSMS(rowNo);
            });
        });
    } else {
         alert(window.lang.translate('Database not found, your browser does not support web sql!'));
    }   
}




function getPerUnitBasedOnExpenseForSMS(i){
    //alert(" in second method");

    var expenseNameID = j("#expenseNameSMS_"+i ).select2('data').id;
    //alert("expenseNameID>>>>>>>>>>>>>>>>>"+expenseNameID)
       getPerUnitFromDBForSMS(expenseNameID,i);
 }






function getPerUnitFromDBForSMS(expenseNameID,i){

    //alert("in third method")
    j('#errorMsgArea').children('span').text("");
    if(mydb) {
        //Get all the employeeDetails from the database with a select statement, set outputEmployeeDetails as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("SELECT * FROM expNameMst where id="+expenseNameID, [], function setPerUnitDetailsForBE(transaction, results)
            {

//alert("in fourth method")
    //alert("results>>>>>>>>>>>>>>>>>>>"+results)
    //alert("i>>>>>>>>>>>>>>>>>>>"+i)
         
    if(results!=null){
            var row = results.rows.item(0);
            //alert("row>>>>>>>>>>>"+ row)
            window.localStorage.setItem("acc_Code_id_for_ocr",row.accCodeId);
            perUnitDetailsJSON["expenseIsfromAndToReqd"]=row.expIsFromToReq;
            perUnitDetailsJSON["isUnitReqd"]=row.expIsUnitReq;
            perUnitDetailsJSON["expRatePerUnit"]=row.expRatePerUnit;
            perUnitDetailsJSON["expFixedOrVariable"]=row.expFixedOrVariable;
            //alert("row.expFixedLimitAmt>>>>>>>>>>>>"+row.expFixedLimitAmt);
            perUnitDetailsJSON["expFixedLimitAmt"]=row.expFixedLimitAmt;
            perUnitDetailsJSON["expenseName"]=row.expName;
            perUnitDetailsJSON["expPerUnitActiveInative"]=row.expPerUnitActiveInative;
            perUnitDetailsJSON["isErReqd"]=row.isErReqd;
            perUnitDetailsJSON["limitAmountForER"]=row.limitAmountForER;
            //alert("row.expRatePerUnit>>>>>>>>>>>>>>>>"+row.expRatePerUnit)
            document.getElementById("ratePerUnit_"+i).value= row.expRatePerUnit;
            document.getElementById("expNameMstIdSMS_"+i).value= row.expNameMstId;
            //alert("!!!!!!!!!!"+row.expNameMstId)


            //alert(">>>>>>>>>>>>>"+document.getElementById("ratePerUnit_"+i).value)
          /*document.getElementById("amount_"+i).value="";
            document.getElementById("unit_"+i).value="";
            document.getElementById("fromLoc_"+i).value = "";
            document.getElementById("toLoc_"+i).value = "";
            document.getElementById("narration_"+i).value = "";
            document.getElementById("unit_"+i).value = "";
            document.getElementById("unit_"+i).value = "";*/
            if(perUnitDetailsJSON.expenseIsfromAndToReqd=='N'){
                //alert("in if")
                // document.getElementById("fromLoc_"+i).value="";
                // document.getElementById("toLoc_"+i).value="";
                document.getElementById("fromLoc_"+i).disabled =true;
                document.getElementById("toLoc_"+i).disabled =true;
                document.getElementById("fromLoc_"+i).style.backgroundColor='#d1d1d1'; 
                document.getElementById("toLoc_"+i).style.backgroundColor='#d1d1d1';
                document.getElementById("narration_"+i).disabled =false;
                document.getElementById("narration_"+i).style.backgroundColor='#FFFFFF';
                //document.getElementById("mapImage").style.display= "none";
            }else{
                //alert("in else")
                document.getElementById("fromLoc_"+i).disabled =false;
                document.getElementById("toLoc_"+i).disabled =false;
                // document.getElementById("fromLoc_"+i).value="";
                // document.getElementById("toLoc_"+i).value="";
                //document.getElementById("narration_"+i).value="";
                document.getElementById("fromLoc_"+i).style.backgroundColor='#FFFFFF'; 
                document.getElementById("toLoc_"+i).style.backgroundColor='#FFFFFF'; 
                //alert(window.localStorage.getItem("MobileMapRole"))
               /* if(window.localStorage.getItem("MobileMapRole") == 'true') 
                {
                    attachGoogleSearchBox(document.getElementById("fromLoc_"+i));
                    attachGoogleSearchBox(document.getElementById("toLoc_"+i));
                    document.getElementById("mapImage").style.display="";
                    document.getElementById("narration_"+i).disabled =true;
                    document.getElementById("narration_"+i).style.backgroundColor='#d1d1d1';
                } */
            }
            if(perUnitDetailsJSON.isUnitReqd=='Y'){
               // document.getElementById("amount_"+i).value="1";
                if(perUnitDetailsJSON.expFixedOrVariable=='V'){
                    flagForUnitEnable = true;
                    if(perUnitDetailsJSON.expenseIsfromAndToReqd=='Y' && window.localStorage.getItem("MobileMapRole") == 'true'){
                        document.getElementById("unit_"+i).disabled =true;
                        document.getElementById("unit_"+i).style.backgroundColor='#d1d1d1';
                    }
                    else{
                        document.getElementById("unit_"+i).disabled =false;
                        document.getElementById("unit_"+i).style.backgroundColor='#FFFFFF';
                    }
                    // document.getElementById("amount_"+i).disabled =false;
                    // document.getElementById("amount_"+i).style.backgroundColor='#FFFFFF';
                }else{
                    flagForUnitEnable = true;
                    if(perUnitDetailsJSON.expenseIsfromAndToReqd=='Y' && window.localStorage.getItem("MobileMapRole") == 'true'){
                        document.getElementById("unit_"+i).disabled =true;
                        document.getElementById("unit_"+i).style.backgroundColor='#d1d1d1';
                    }
                    else{
                        document.getElementById("unit_"+i).disabled =false;
                        document.getElementById("unit_"+i).style.backgroundColor='#FFFFFF';
                    }
                    // document.getElementById("amount_"+i).disabled =true;
                    // document.getElementById("amount_"+i).style.backgroundColor='#d1d1d1'; 
                }
            }else{
                flagForUnitEnable = false;
                document.getElementById("unit_"+i).disabled =true;
                document.getElementById("unit_"+i).style.backgroundColor='#d1d1d1'; 
                // document.getElementById("amount_"+i).disabled =false;
                // document.getElementById("amount_"+i).style.backgroundColor='#FFFFFF'; 
            }
            if(perUnitDetailsJSON.expPerUnitActiveInative=='1'){
                flagForUnitEnable=false;
                document.getElementById("unit_"+i).disabled =true;
                // document.getElementById("amount_"+i).disabled =false;
                // document.getElementById("amount_"+i).style.backgroundColor='#FFFFFF'; 
                document.getElementById("unit_"+i).style.backgroundColor='#d1d1d1';
            }
        }else{

            alert("Please Synch your expense Names to claim expense.");
        }
    
}

            );
        });
    } else {
        alert('Database not found, your browser does not support web sql!');
    }   
}








// function smsSelect2(rowNo){
// if (mydb) {
//         mydb.transaction(function (t) {
//                 t.executeSql("SELECT * FROM accountHeadMst", [],  function getAccHeadListOcr (transaction, results) {
// 					var jsonAccHeadArr = [];
// 					var i;
// 				    for (i = 0; i < results.rows.length; i++) {
// 				        var row = results.rows.item(i);
// 				        var jsonFindAccHead = new Object();
// 				        jsonFindAccHead["Label"] = row.accountHeadId;
// 				        jsonFindAccHead["Value"] = row.accHeadName;
// 				        jsonAccHeadArr.push(jsonFindAccHead);
// 				    }

// 				    var jsonArr = [];
// 			          if(jsonAccHeadArr != null && jsonAccHeadArr.length > 0){
// 			                for(var i=0; i<jsonAccHeadArr.length; i++ ){
// 			                    var stateArr = new Array();
// 			                    stateArr = jsonAccHeadArr[i];
// 			                    jsonArr.push({id: stateArr.Label,name: stateArr.Value});
// 			                }
// 			           }
			    
// 			           jsonArr.sort(function(a, b){ // sort object by Account Head Name
// 			                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
// 			                if (nameA < nameB) //sort string ascending
// 			                    return -1 
// 			                    if (nameA > nameB)
// 			                        return 1
// 			                        return 0 //default return value (no sorting)
// 			            })
			           
// 			            var accHead = "accountHeadSMS_"+rowNo ;

// 			          console.log(jsonArr)
// 			      j("#"+accHead).select2({
//                 data:{ results: jsonArr, text: 'name' },
//                 minimumResultsForSearch: -1,
//                 placeholder : "Select Account Head",
//                 formatResult: function(result) {
//                     if ( ! isJsonString(result.id))
//                         result.id = JSON.stringify(result.id);
//                     return result.name;
//                 }
//             });

// 			  j("#"+accHead).change(function() {
//       //alert("in change")
//       getExpenseNamesBasedOnAccountHeadForSmart(rowNo);
//   });
// 			  getExpenseNamesBasedOnAccountHeadForSmart(rowNo);
//                 });

//          	t.executeSql("SELECT * FROM currencyMst", [], function getCommonAccHeadList(transaction, results) {
// 			    var i;
// 			    var jsonCurrencyArr = [];
// 			    for (i = 0; i < results.rows.length; i++) {
// 			        var row = results.rows.item(i);
// 			        var jsonFindCurrHead = new Object();
// 			        jsonFindCurrHead["Label"] = row.currencyId;
// 			        jsonFindCurrHead["Value"] = row.currencyName;
// 			        jsonCurrencyArr.push(jsonFindCurrHead);
// 			    }
			
//          	var jsonArrCur = [];
// 		    if(jsonCurrencyArr != null && jsonCurrencyArr.length > 0){
// 		        for(var i=0; i<jsonCurrencyArr.length; i++ ){
// 		            var stateArr = new Array();
// 		            stateArr = jsonCurrencyArr[i];
		            
// 		            jsonArrCur.push({id: stateArr.Label,name: stateArr.Value});
// 		        }
// 		    }

// 		      var Currency = "currencySMS_"+rowNo ;
// 		    j("#"+Currency).select2({
// 		        data:{ results: jsonArrCur, text: 'name' },
// 		        placeholder: "Currency name",
// 		        minimumResultsForSearch: -1,

// 		        formatResult: function(result) {
// 		            if ( ! isJsonString(result.id))
// 		                result.id = JSON.stringify(result.id);
// 		                return result.name;
// 		        }
// 		    });
// 		    });

//         });
//     } else {
//          alert('Database not found, your browser does not support web sql!');
//     }
    
// }


//  function getPerUnitBasedOnExpenseForSmartExpense(i){
//     //alert(" in second method");
//     var expenseNameID  = "";
//     try{
//     	 expenseNameID = j("#expenseNameSMS_"+i ).select2('data').id;
//     }catch(e){console.log(e)}
    
//     //alert("expenseNameID>>>>>>>>>>>>>>>>>"+expenseNameID)
//       getPerUnitFromDBForSmartExpense(expenseNameID,i);
//  }


// function getPerUnitFromDBForSmartExpense(expenseNameID,i){
// 	//alert("in third method")
// 	j('#errorMsgArea').children('span').text("");
// 	if(mydb) {
//  		//Get all the employeeDetails from the database with a select statement, set outputEmployeeDetails as the callback function for the executeSql command
//         mydb.transaction(function (t) {
// 			t.executeSql("SELECT * FROM expNameMst where id="+expenseNameID, [], function setPerUnitDetailsForSmartExpense(transaction, results)
// 			{

// //alert("in fourth method")
// 	//alert("results>>>>>>>>>>>>>>>>>>>"+results)
// 	//alert("i>>>>>>>>>>>>>>>>>>>"+i)
 		 
// 	if(results!=null){
// 		    var row = results.rows.item(0);
// 		    //alert("row>>>>>>>>>>>"+ row)
// 		    perUnitDetailsJSON["expenseIsfromAndToReqd"]=row.expIsFromToReq;
// 		    perUnitDetailsJSON["isUnitReqd"]=row.expIsUnitReq;
// 		    perUnitDetailsJSON["expRatePerUnit"]=row.expRatePerUnit;
// 		    perUnitDetailsJSON["expFixedOrVariable"]=row.expFixedOrVariable;
// 		    //alert("row.expFixedLimitAmt>>>>>>>>>>>>"+row.expFixedLimitAmt);
// 		    perUnitDetailsJSON["expFixedLimitAmt"]=row.expFixedLimitAmt;
// 		    perUnitDetailsJSON["expenseName"]=row.expName;
// 			perUnitDetailsJSON["expPerUnitActiveInative"]=row.expPerUnitActiveInative;
// 			perUnitDetailsJSON["isErReqd"]=row.isErReqd;
// 			perUnitDetailsJSON["limitAmountForER"]=row.limitAmountForER;
// 			//alert("row.expRatePerUnit>>>>>>>>>>>>>>>>"+row.expRatePerUnit)
// 		    document.getElementById("ratePerUnit_"+i).value= row.expRatePerUnit;
// 		    document.getElementById("expNameMstIdSMS_"+i).value= row.expNameMstId;
// 		    //alert(">>>>>>>>>>>>>"+document.getElementById("ratePerUnit_"+i).value)
//          /* document.getElementById("amount_"+i).value="";
// 		    document.getElementById("unit_"+i).value="";
// 			document.getElementById("fromLoc_"+i).value = "";
// 			document.getElementById("toLoc_"+i).value = "";
// 			document.getElementById("narration_"+i).value = "";
// 			document.getElementById("unit_"+i).value = "";
// 			document.getElementById("unit_"+i).value = "";*/
// 		    if(perUnitDetailsJSON.expenseIsfromAndToReqd=='N'){
// 		    	//alert("in if")
// 				document.getElementById("fromLoc_"+i).value="";
// 				document.getElementById("toLoc_"+i).value="";
// 				document.getElementById("fromLoc_"+i).disabled =true;
// 				document.getElementById("toLoc_"+i).disabled =true;
// 				document.getElementById("fromLoc_"+i).style.backgroundColor='#d1d1d1'; 
// 				document.getElementById("toLoc_"+i).style.backgroundColor='#d1d1d1';
// 				document.getElementById("narration_"+i).disabled =false;
// 				document.getElementById("narration_"+i).style.backgroundColor='#FFFFFF';
// 				//document.getElementById("mapImage").style.display= "none";
// 			}else{
// 				//alert("in else")
// 				document.getElementById("fromLoc_"+i).disabled =false;
// 				document.getElementById("toLoc_"+i).disabled =false;
// 				document.getElementById("fromLoc_"+i).value="";
// 				document.getElementById("toLoc_"+i).value="";
// 				//document.getElementById("narration_"+i).value="";
// 				document.getElementById("fromLoc_"+i).style.backgroundColor='#FFFFFF'; 
// 				document.getElementById("toLoc_"+i).style.backgroundColor='#FFFFFF'; 
// 				//alert(window.localStorage.getItem("MobileMapRole"))
// 				if(window.localStorage.getItem("MobileMapRole") == 'true') 
// 				{
// 					attachGoogleSearchBox(document.getElementById("fromLoc_"+i));
// 					attachGoogleSearchBox(document.getElementById("toLoc_"+i));
// 					document.getElementById("mapImage").style.display="";
// 					document.getElementById("narration_"+i).disabled =true;
// 					document.getElementById("narration_"+i).style.backgroundColor='#d1d1d1';
// 				} 
// 			}
// 			if(perUnitDetailsJSON.isUnitReqd=='Y'){
// 				document.getElementById("amount_"+i).value="";
// 				if(perUnitDetailsJSON.expFixedOrVariable=='V'){
// 					flagForUnitEnable = true;
// 					if(perUnitDetailsJSON.expenseIsfromAndToReqd=='Y' && window.localStorage.getItem("MobileMapRole") == 'true'){
// 						document.getElementById("unit_"+i).disabled =true;
// 						document.getElementById("unit_"+i).style.backgroundColor='#d1d1d1';
// 					}
// 					else{
// 						document.getElementById("unit_"+i).disabled =false;
// 						document.getElementById("unit_"+i).style.backgroundColor='#FFFFFF';
// 					}
// 					document.getElementById("amount_"+i).disabled =false;
// 					document.getElementById("amount_"+i).style.backgroundColor='#FFFFFF';
// 				}else{
// 					flagForUnitEnable = true;
// 					if(perUnitDetailsJSON.expenseIsfromAndToReqd=='Y' && window.localStorage.getItem("MobileMapRole") == 'true'){
// 						document.getElementById("unit_"+i).disabled =true;
// 						document.getElementById("unit_"+i).style.backgroundColor='#d1d1d1';
// 					}
// 					else{
// 						document.getElementById("unit_"+i).disabled =false;
// 						document.getElementById("unit_"+i).style.backgroundColor='#FFFFFF';
// 					}
// 					document.getElementById("amount_"+i).disabled =true;
// 					document.getElementById("amount_"+i).style.backgroundColor='#d1d1d1'; 
// 				}
// 			}else{
// 				flagForUnitEnable = false;
// 				document.getElementById("unit_"+i).disabled =true;
// 				document.getElementById("unit_"+i).style.backgroundColor='#d1d1d1'; 
// 				document.getElementById("amount_"+i).disabled =false;
// 				document.getElementById("amount_"+i).style.backgroundColor='#FFFFFF'; 
// 			}
// 			if(perUnitDetailsJSON.expPerUnitActiveInative=='1'){
// 				flagForUnitEnable=false;
// 				document.getElementById("unit_"+i).disabled =true;
// 				document.getElementById("amount_"+i).disabled =false;
// 				document.getElementById("amount_"+i).style.backgroundColor='#FFFFFF'; 
// 				document.getElementById("unit_"+i).style.backgroundColor='#d1d1d1';
// 			}
// 		}else{

// 			alert("Please Synch your expense Names to claim expense.");
// 		}
	
// }

// 			);
// 		});
//     } else {
//         alert('Database not found, your browser does not support web sql!');
//     }	
// }


//  function getExpenseNamesBasedOnAccountHeadForSmart(i){
//  	var accountHeadID = "";
//  	try{
//  	accountHeadID = j("#accountHeadSMS_"+i).select2('data').id;
// 	 }catch(e){
// 	    console.log(e);
// 	 }
// 	 console.log("getExpenseNamesfromDBForSmart");
//       getExpenseNamesfromDBForSmart(accountHeadID,i);
//  }


// function getExpenseNamesfromDBForSmart(accountHeadId,rowNo){
// 	var jsonArra = [];
// 	j('#errorMsgArea').children('span').text("");
// 	if(accountHeadId == ""){
// 		  var expNameSMS = "expenseNameSMS_"+rowNo ;


// 		    j("#"+expNameSMS).select2({
// 		        data:{ results: jsonArra, text: 'name' },
// 		        placeholder: "Expense Name",
// 		        minimumResultsForSearch: -1,
// 		        // initSelection: function (element, callback) {
// 		        //             callback();
// 		        // },
// 		        formatResult: function(result) {
// 		            if ( ! isJsonString(result.id))
// 		                result.id = JSON.stringify(result.id);
// 		                return result.name;
// 		        }
// 		    });

// 		   j("#"+expNameSMS).change(function() {
//      		 getPerUnitBasedOnExpenseForSmartExpense(rowNo);
//   			});

// 	}
//  if (mydb) {
//         //Get all the employeeDetails from the database with a select statement, set outputEmployeeDetails as the callback function for the executeSql command
//         mydb.transaction(function (t) {
// 			t.executeSql("SELECT * FROM expNameMst where accHeadId="+accountHeadId, [], function getCommonExpNameList(transaction, results) {
// 		    console.log("in getCommonExpNameList");
// 		    var i;
// 		    var jsonExpNameArr = [];
// 		    for (i = 0; i < results.rows.length; i++) {
// 		        var row = results.rows.item(i);
// 		        var jsonFindExpNameHead = new Object();
// 		        jsonFindExpNameHead["Label"] = row.id;
// 		        jsonFindExpNameHead["Value"] = row.expName;
// 		        console.log("row.expName   "+row.expName);
// 		        jsonExpNameArr.push(jsonFindExpNameHead);
// 		    }


		    
// 		    if(jsonExpNameArr != null && jsonExpNameArr.length > 0){
// 		        for(var i=0; i<jsonExpNameArr.length; i++ ){
// 		            var expArr = new Array();
// 		            expArr = jsonExpNameArr[i];
		            
// 		            jsonArra.push({id: expArr.Label,name: expArr.Value});
// 		        }
// 		    }

// 	/*document.getElementById("fromLoc_"+i).value = "";
// 	document.getElementById("toLoc_"+i).value = "";
// 	document.getElementById("narration_"+i).value = "";
// 	document.getElementById("unit_"+i).value = "";
// 	document.getElementById("amount_"+i).value = "";*/

// 		    var expNameSMS = "expenseNameSMS_"+rowNo ;


// 		    j("#"+expNameSMS).select2({
// 		        data:{ results: jsonArra, text: 'name' },
// 		        placeholder: "Expense Name",
// 		        minimumResultsForSearch: -1,
// 		        // initSelection: function (element, callback) {
// 		        //             callback();
// 		        // },
// 		        formatResult: function(result) {
// 		            if ( ! isJsonString(result.id))
// 		                result.id = JSON.stringify(result.id);
// 		                return result.name;
// 		        }
// 		    });

// 		   j("#"+expNameSMS).change(function() {
//       		getPerUnitBasedOnExpenseForSmartExpense(rowNo);
//            });
// 		});
// 	});
// 	/*	var expNameSMS = "";
//  	try{
//  		expNameSMSID = j("#"+expNameSMS).select2('data').id;
// 	 }catch(e){
// 	    console.log(e);
// 	 }*/
// 		getPerUnitBasedOnExpenseForSmartExpense(rowNo);
//     } else {
//          alert(window.lang.translate('Database not found, your browser does not support web sql!'));
//     }	
// }








