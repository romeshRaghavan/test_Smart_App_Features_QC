// Initialize app
var j = jQuery.noConflict();
var $ = jQuery.noConflict();
var defaultPagePath='app/pages/';
var ocrImagePath;
var mydb = openDatabase("Expenzing", "0.1", "Expenzing", 1024 * 1024);
//var globalExpName;
var flag=0;
var acc_Code_for_ocr = "";
function naxvarBg() {
    var navbar = j(".navbar-clear"), box = null, cls = "active";
    return 0 === navbar.length ? !1 : (box = j(".page-on-center").length > 0 ? navbar.next().find(".page-on-center .page-content") : navbar.next().find(".page .page-content"), 
    box.scrollTop() > 10 ? navbar.addClass(cls) : navbar.removeClass(cls), void box.scroll(function() {
        j(this).scrollTop() > 40 ? navbar.addClass(cls) : navbar.removeClass(cls);
    }));
}

function showLineChart(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: fillColor,
            strokeColor: strokeColor,
            pointColor: pointColor,
            pointStrokeColor: pointStrokeColor,
            pointHighlightFill: pointHighlightFill,
            pointHighlightStroke: pointHighlightStroke,
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        } ]
    }, chart = new Chart(obj).Line(data, {
        responsive: !0,
        pointDotRadius: 5,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(0, 0, 0, 0.1)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showLineChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: fillColor,
            strokeColor: strokeColor,
            pointColor: pointColor,
            pointStrokeColor: pointStrokeColor,
            pointHighlightFill: pointHighlightFill,
            pointHighlightStroke: pointHighlightStroke,
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: fillColor2,
            strokeColor: strokeColor2,
            pointColor: pointColor2,
            pointStrokeColor: pointStrokeColor2,
            pointHighlightFill: pointHighlightFill2,
            pointHighlightStroke: pointHighlightStroke2,
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Line(data, {
        responsive: !0,
        pointDotRadius: 5,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(0, 0, 0, 0.1)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showBarChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: fillColor,
            strokeColor: strokeColor,
            pointColor: pointColor,
            pointStrokeColor: pointStrokeColor,
            pointHighlightFill: pointHighlightFill,
            pointHighlightStroke: pointHighlightStroke,
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: fillColor2,
            strokeColor: strokeColor2,
            pointColor: pointColor2,
            pointStrokeColor: pointStrokeColor2,
            pointHighlightFill: pointHighlightFill2,
            pointHighlightStroke: pointHighlightStroke2,
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Bar(data, {
        responsive: !0,
        pointDotRadius: 6,
        pointDotStrokeWidth: 2,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(0, 0, 0, 0.1)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showPieChartPage(obj) {
    var data = [ {
        value: 300,
        color: pointColor,
        highlight: pointColorHighlight,
        label: "Text 1"
    }, {
        value: 50,
        color: pointColor2,
        highlight: pointColorHighlight2,
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).Pie(data, {
        responsive: !0,
        tooltipFontSize: 12
    });
    return chart;
}

function showDoughnutChartPage(obj) {
    var data = [ {
        value: 300,
        color: pointColor,
        highlight: pointColorHighlight,
        label: "Text 1"
    }, {
        value: 50,
        color: pointColor2,
        highlight: pointColorHighlight2,
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).Doughnut(data, {
        responsive: !0,
        tooltipFontSize: 12
    });
    return chart;
}

function showRadarChartPage(obj) {
    var data = {
        labels: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
        datasets: [ {
            label: "My dataset",
            fillColor: fillColor,
            strokeColor: strokeColor,
            pointColor: pointColor,
            pointStrokeColor: pointStrokeColor,
            pointHighlightFill: pointHighlightFill,
            pointHighlightStroke: pointHighlightStroke,
            data: [ 65, 59, 80, 81, 56, 55, 40 ]
        }, {
            label: "My dataset 2",
            fillColor: fillColor2,
            strokeColor: strokeColor2,
            pointColor: pointColor2,
            pointStrokeColor: pointStrokeColor2,
            pointHighlightFill: pointHighlightFill2,
            pointHighlightStroke: pointHighlightStroke2,
            data: [ 32, 34, 67, 12, 37, 55, 20 ]
        } ]
    }, chart = new Chart(obj).Radar(data, {
        responsive: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        datasetStrokeWidth: 2,
        scaleFontSize: 10,
        tooltipFontSize: 12,
        scaleLineColor: "rgba(0, 0, 0, 0.1)",
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !1
    });
    return chart;
}

function showPolarChartPage(obj) {
    var data = [ {
        value: 300,
        color: pointColor,
        highlight: pointColorHighlight,
        label: "Text 1"
    }, {
        value: 50,
        color: pointColor2,
        highlight: pointColorHighlight2,
        label: "Text 2"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Text 3"
    } ], chart = new Chart(obj).PolarArea(data, {
        responsive: !0,
        scaleFontSize: 10,
        tooltipFontSize: 12
    });
    return chart;
}

var myApp = new Framework7({
    swipeBackPage: !1,
    pushState: !0,
    cache: false,
    swipePanel: "left",
    modalTitle: "Title",
}), jj = Dom7;


var mainView = myApp.addView('.view-main', {});


myApp.onPageInit('addExpense', function(){
    jj('.claimlisting').on('click', function (e) {
        jjheader = jj(this);
        jjcontent = jjheader.next();
        jjheader.hide(this);
        jjcontent.show();
        if(jjcontent.show()){
            jjcontent.parents('.swipeout').siblings().find('.opentogglelist').hide();
            jjcontent.parents('.swipeout').siblings().find('.claimlisting').show();
        }
        //jj('.closeexpbox').show(1000);
    });

    jj('.closeexpbox').on('click', function (e) { 
        jj('.closeexpbox').hide();
    });

    jj('.closeexpmodal').on('click', function (e) { 
        jj('.opentogglelist, .addclaim, .addclaimfromocr').hide();
        jj('.claimlisting').show();
    });

    jj('.addexpense').on('click', function (e) {
        jj('.addclaim').show(1000);
        jj('.addclaimocr').hide(1000);
    });

    



    jj('.addocr').on('click', function (e) {
        jj('.addclaimocr').show(1000);
        jj('.addclaim').hide(1000);
        jj('.opentogglelist').hide(1000);

    });

    jj('.addocrblock').on('click', function (e) {
        jj('.addclaimfromocr').show(1000);
    });

/*    jj('.ava').on('click', function (e) {
        jj('.triggerwrapper').show(1000);
    });*/
    



    console.log('Index Page Init Function Triggered');
}).trigger();



/*
myApp.onPageInit('wishlist', function(){

    jj('.wishlist .claimlisting').on('click', function (e) {
    jj(this).toggleClass('selected');
    jj('.sendrest').show(1000);

    if (jj(".selected")[0]){
        jj('.sendrest').show(1000);
    } else {
        jj('.sendrest').hide(1000);
    }
});
*/



/*


    console.log('wishlist Page Init Function Triggered');
}).trigger();
*/






jj("body").on("click", ".js-add-to-fav", function() {
    myApp.alert("You love this post!", "");
});



var mainView = myApp.addView(".view-main", {
    dynamicNavbar: !0,
});


// jj('.claimlisting').on('click', function (e) {
//     jjheader = jj(this);
//     jjcontent = jjheader.next();
//     jjcontent.slideToggle(e);

// });


//jj(".claimlisting").addClass('hello').attr('title', 'world').insertAfter('.something-else');


jj(".popup-splash").on("opened", function() {
    myApp.swiper(".swiper-container", {
        speed: 400,
        pagination: ".swiper-pagination",
        paginationBulletRender: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    });
}), 
jj(document).on("pageAfterAnimation", function(e) {
    if (j(".page-on-center .chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .chart-content").getContext("2d");
        showLineChart(ctx);
    }
    if (j(".page-on-center .line-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .line-chart-content").getContext("2d");
        showLineChartPage(ctx);
    }
    if (j(".page-on-center .bar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .bar-chart-content").getContext("2d");
        showBarChartPage(ctx);
    }
    if (j(".page-on-center .pie-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .pie-chart-content").getContext("2d");
        showPieChartPage(ctx);
    }
    if (j(".page-on-center .doughnut-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .doughnut-chart-content").getContext("2d");
        showDoughnutChartPage(ctx);
    }
    if (j(".page-on-center .radar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .radar-chart-content").getContext("2d");
        showRadarChartPage(ctx);
    }
    if (j(".page-on-center .polar-chart-content").length > 0) {
        var ctx = document.querySelector(".page-on-center .polar-chart-content").getContext("2d");
        showPolarChartPage(ctx);
    }
    naxvarBg();
}), 
jj(document).on("pageInit", function(e) {
    var page = e.detail.page;
    j(".zoom").swipebox(), j(".navbar").removeClass("navbar-clear"), "index" !== page.name && "menu" !== page.name && "login" !== page.name && "dashboard-1" !== page.name && "panel" !== page.name || j(".navbar").addClass("navbar-clear"), 
    j(".twitter-content").length > 0 && j(".twitter-content").twittie({
        count: 10
    }), j(".tweet").length > 0 && j(".tweet").twittie({
        count: 1
    }), j(".flickr-content").length > 0 && j(".flickr-content").jflickrfeed({
        limit: 15,
        qstrings: {
            id: "44244432@N03"
        },
        itemTemplate: '<li><a href="{{image_m}}" class="flickr"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    }, function(data) {
        j(".flickr-content li a").swipebox();
    }), j(".js-validate").length > 0 && j("body").on("click", ".js-form-submit", function() {
        var form = j(this).parents("form"), valid = form.valid();
        if ("contact" === page.name && valid) {
            var data = form.serializeObject();
            myApp.showPreloader(), j.post("/email.php", data).done(function(data) {
                myApp.hidePreloader();
                var response = JSON.parse(data);
                response.error ? myApp.alert(response.msg, "") : (myApp.alert(response.msg, ""), 
                form.find("input[type=text], input[type=email], textarea").val(""));
            });
        }
    });
    // Conversation flag
    var conversationStarted = !1, myMessages = myApp.messages(".messages", {
        autoLayout: !0
    }), myMessagebar = myApp.messagebar(".messagebar");
    // Handle message
    jj(".messagebar .link").on("click", function() {
        // Message text
        var messageText = myMessagebar.value().trim();
        // Exit if empy message
        if (0 !== messageText.length) {
            // Empty messagebar
            myMessagebar.clear();
            // Random message type
            var avatar, name, messageType = [ "sent", "received" ][Math.round(Math.random())];
            "received" === messageType && (avatar = "http://lorempixel.com/output/people-q-c-100-100-9.jpg", 
            name = "Kate"), // Add message
            myMessages.addMessage({
                // Message text
                text: messageText,
                // Random message type
                type: messageType,
                // Avatar and name:
                avatar: avatar,
                name: name,
                // Day
                day: conversationStarted ? !1 : "Today",
                time: conversationStarted ? !1 : new Date().getHours() + ":" + new Date().getMinutes()
            }), // Update conversation flag
            conversationStarted = !0;
        }
    });
}), 

j(document).ready(function() {
    if (null !== localStorage.getItem("newOptions") && localStorage.getItem("newOptions") !== !0 || (myApp.popup(".popup-splash"), 
    localStorage.setItem("newOptions", !0)), j(".chart-content").length > 0) {
        var obj = document.querySelector(".chart-content"), ctx = obj.getContext("2d");
        showLineChart(ctx);
    }
    if (j(".line-chart-content").length > 0) {
        var obj = document.querySelector(".line-chart-content"), ctx = obj.getContext("2d");
        showLineChartPage(ctx);
    }
    if (j(".bar-chart-content").length > 0) {
        var obj = document.querySelector(".bar-chart-content"), ctx = obj.getContext("2d");
        showBarChartPage(ctx);
    }
    if (j(".pie-chart-content").length > 0) {
        var obj = document.querySelector(".pie-chart-content"), ctx = obj.getContext("2d");
        showPieChartPage(ctx);
    }
    if (j(".doughnut-chart-content").length > 0) {
        var obj = document.querySelector(".doughnut-chart-content"), ctx = obj.getContext("2d");
        showDoughnutChartPage(ctx);
    }
    if (j(".radar-chart-content").length > 0) {
        var obj = document.querySelector(".radar-chart-content"), ctx = obj.getContext("2d");
        showRadarChartPage(ctx);
    }
    if (j(".polar-chart-content").length > 0) {
        var obj = document.querySelector(".polar-chart-content"), ctx = obj.getContext("2d");
        showPolarChartPage(ctx);
    }
    naxvarBg(), j(".js-toggle-menu").on("click", function() {
        j(this).next().slideToggle(200), j(this).find("span").toggleClass("icon-chevron-down").toggleClass("icon-chevron-up");
    });


}), 



/* j(document).ready(function(){

     j(".claimlisting").on("click", function () {
        jheader = j(this);
         jcontent = jheader.next();
       jcontent.slideToggle();
     });
    j(".addexpense").on("click", function(){
         j(".addclaim").fadeIn();
   });
    j(".closeme").on("click", function(){
         j(".addclaim").fadeOut();     
    });

});*/


j.fn.serializeObject = function() {
    var o = {}, a = this.serializeArray();
    return j.each(a, function() {
        void 0 !== o[this.name] ? (o[this.name].push || (o[this.name] = [ o[this.name] ]), 
        o[this.name].push(this.value || "")) : o[this.name] = this.value || "";
    }), o;
};

var defColor = "178, 137, 115", fillColor = "rgba(" + defColor + ", 0.2)", strokeColor = "rgba(" + defColor + ", 1)", pointColor = "rgba(" + defColor + ", 1)", pointStrokeColor = "rgba(255, 255, 255, 1)", pointHighlightFill = "rgba(255, 255, 255, 1)", pointHighlightStroke = "rgba(" + defColor + ", 1)", pointColorHighlight = "rgba(" + defColor + ", 0.5)", defColor2 = "224, 61, 14", fillColor2 = "rgba(" + defColor2 + ", 0.2)", strokeColor2 = "rgba(" + defColor2 + ", 1)", pointColor2 = "rgba(" + defColor2 + ", 1)", pointStrokeColor2 = "rgba(255, 255, 255, 1)", pointHighlightFill2 = "rgba(255, 255, 255, 1)", pointHighlightStroke2 = "rgba(" + defColor2 + ", 1)", pointColorHighlight2 = "rgba(" + defColor2 + ", 0.5)";






function fetchSMSClaim8() {
    mydb.transaction(function(t) {
     mydb.transaction(function (t) {      
         
         t.executeSql("INSERT INTO smsMaster (smsId,smsSentDate,senderAddr,smsText,smsAmount,smsAttachment) VALUES (?, ?, ?, ?, ?, ?)", [1,"23-Dec-2016","VM_IPAYTM","Hi your order #14247962455 of Rs. 249.00 for 2 items is successfull. ","249.00",'images/dummy-image.png']);
             });  
        var headerOprationBtn;
         var paraValue = "SMS";
      t.executeSql('SELECT * FROM smsMaster;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box8').empty();
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
			var PhotoPath = row.smsAttachment;
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">SMS date : '+row.smsSentDate+' | Amount : '+row.smsAmount+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.smsText);
             var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_'+i+'" src="'+row.smsAttachment+'" alt ="" onclick="showImg(img_'+i+')">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto(\'SMS$\''+i+');">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);
        /*j('<input></input>').attr({ id: "expenseName_"+i,class: [""].join(' '),type: ["hidden"].join(' ') }).appendTo(spen3);*/
            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.smsSentDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.smsAmount+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.smsText+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateSms('+i+','+row.smsId+'),reload();" ></img>&nbsp;&nbsp;&nbsp;<img class="imagess" style = "width: 22px;     padding-left :75px;" src="images/tosend.png" onclick ="smartSmsSendForApprover('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img style = "width: 22px;" src="images/towishlist.png" class="imagess" onclick ="saveBusinessDetailsInWishList('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img class="imagess"  style = "width: 22px;" src="images/todelete.png" onclick ="discardMessages1('+row.smsId+');"></img>');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send').appendTo(div17);  
             var a2 = j('<a></a>').text('To wishlist').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["saveBusinessDetailsInWishList("+i+","+row.smsId+");"].join(' ')}).appendTo(div17);  
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages1("+row.smsId+");"].join(' ')}).appendTo(div17);  
             var div18 =  j('<div></div>').attr({ class: ["images"].join(' ') }).appendTo(div8);
			 j(div18).append('<a class="" onclick="hideImg(img_'+i+')"></a><img class="images" id="img_'+i+'" src="'+row.smsAttachment+'" style ="display:none" onclick ="" > <div id ="close" class="closeme" onclick ="hideImg(img_'+i+')" ><img src="images/closeme.png" alt=""></div>');
             mytable.appendTo("#box8");  
           //createExpenseName("expenseName_"+i);
            showPic(i,row.smsAttachment);
            }  
                    
/*            j("#source tr").click(function(){ 
                headerOprationBtn = defaultPagePath+'headerPageForSMSOperation.html';
                if(j(this).hasClass("selected")){ 
                var headerBackBtn=defaultPagePath+'headerPageForSMSOperation.html';
                    j(this).removeClass('selected');
                    j('#mainHeader').load(headerBackBtn);
                }else{
                if(j(this).text()=='DateExpense expid From/To LocAmt'){
                    
                }else{
                    j('#mainHeader').load(headerOprationBtn);
                    j(this).addClass('selected');
                }                   
                }                               
            });*/
            }
         });
     });     
          
 }  

function parseIncomingSMSForAmount(input){
   
	var amount= "";
    var amountFound = false;
	if(input.includes("Rs.")){
        var msg = input.split("Rs.")

        var test  =  msg[1];
		var rsExtractStr = test.trim().split(" ");
		amount = rsExtractStr[0];
        amountFound = true;
	}
    
    if(amountFound == false && input.includes("Rs")){
        var msg = input.split("Rs");
        var test  =  msg[1];
		var rsExtractStr = test.trim().split(" ");
		amount = rsExtractStr[0];
    }

   return amount;

}





// For SMART APP OCR 
 function onloadExpenseElement() {
     
	if (mydb) {
		mydb.transaction(function (t) {
				t.executeSql("SELECT * FROM accountHeadMst", [], getAccHeadList);
				t.executeSql("SELECT * FROM currencyMst", [], getCurrencyList);
				t.executeSql("SELECT * FROM expNameMst", [], getExpNameList);
			});
	} else {
         alert('Database not found, your browser does not support web sql!');
	}
 }

 function onloadExpenseNameList() {
    if (mydb) {
        mydb.transaction(function (t) {
                t.executeSql("SELECT * FROM expNameMst", [], getExpNameList);
            });
    } else {
         alert(window.lang.translate('Database not found, your browser does not support web sql!'));
    }
 }

 function getAccHeadList(transaction, results) {
	var i;
	var jsonAccHeadArr = [];
	for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
		var jsonFindAccHead = new Object();
		jsonFindAccHead["Label"] = row.accountHeadId;
		jsonFindAccHead["Value"] = row.accHeadName;
		jsonAccHeadArr.push(jsonFindAccHead);
	}
	createAccHeadDropDown(jsonAccHeadArr);
}


function getCurrencyList(transaction, results) {
    var i;
	var jsonCurrencyArr = [];

    for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
		var jsonFindCurrHead = new Object();
		jsonFindCurrHead["Value"] = row.currencyId;
		jsonFindCurrHead["Label"] = row.currencyName;
		
		jsonCurrencyArr.push(jsonFindCurrHead);
	}
	createCurrencyDropDown(jsonCurrencyArr)
}

var jsonExpNameArr = [];
function getExpNameList(transaction, results) {
    var i;
	
	for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
		var jsonFindExpNameHead = new Object();

		jsonFindExpNameHead["ExpenseID"] = row.id;
		jsonFindExpNameHead["ExpenseName"] = row.expName;
		
		jsonExpNameArr.push(jsonFindExpNameHead);
	}
}


var jsonArr = [];
function createAccHeadDropDown(jsonAccHeadArr){

    
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
			j("#accountHead").select2({
				data:{ results: jsonArr, text: 'name' },
				minimumResultsForSearch: -1,
                placeholder : 'Select Account Head',
				/*initSelection: function (element, callback) {
					callback(jsonArr[1]);
					getExpenseNamesBasedOnAccountHead(jsonArr[1]);
				},*/
				formatResult: function(result) {
					if ( ! isJsonString(result.id))
						result.id = JSON.stringify(result.id);
						return result.name;
				}
			});
			
}


function createExpenseName(cid){
	
	j("#"+cid).select2({
		data:{ results: jsonExpNameArr, text: 'name' },
		minimumResultsForSearch: -1,
        placeholder : "Select Expense Name",
		/*initSelection: function (element, callback) {
			callback(jsonExpArr[0]);
		},*/
		formatResult: function(result) {
			if ( ! isJsonString(result.id))
				result.id = JSON.stringify(result.id);
				return result.name;
		}
	}).select2("val","");
}

function createCurrencyDropDown(jsonCurrencyArr){
	var jsonArr = [];
	if(jsonCurrencyArr != null && jsonCurrencyArr.length > 0){
		for(var i=0; i<jsonCurrencyArr.length; i++ ){
			var stateArr = new Array();
			stateArr = jsonCurrencyArr[i];
			
			jsonArr.push({id: stateArr.Value,name: stateArr.Label});
		}
	}
		
	j("#currency").select2({
		data:{ results: jsonArr, text: 'name' },
        minimumResultsForSearch: -1,
		placeholder: "Currency",
		/*initSelection: function (element, callback) {
					callback(jsonArr[0]);
		},*/
		formatResult: function(result) {
			if ( ! isJsonString(result.id))
				result.id = JSON.stringify(result.id);
				return result.name;
		}
	}).select2("val",jsonArr[0]);
} 


function updateSms(i,smsId){
    var aa =  document.getElementById('smsAmount_'+i).value;
    if (mydb) {
        var smsDate = document.getElementById('smsDate_'+i).value;
        var smsAmount =  document.getElementById('smsAmount_'+i).value;
        var smsNarration =  document.getElementById('smsNarration_'+i).value;
        
        if (smsDate != "" && smsAmount != "" && smsNarration != "" && smsId != "") {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE smsMaster set smsText ='"+smsNarration+"', smsSentDate ='"+smsDate+"',smsAmount = '"+smsAmount+"' where smsId = "+smsId+";");
				});
                 
            
            } else {
        alert("db not found, your browser does not support web sql!");
    }
        
}
    
}

function updateBussinesExp(i,smsId){
    var aa =  document.getElementById('smsAmount_'+i).value;
    if (mydb) {
        var smsDate = document.getElementById('smsDate_'+i).value;
        var smsAmount =  document.getElementById('smsAmount_'+i).value;
        var smsNarration =  document.getElementById('smsNarration_'+i).value;
        
        if (smsDate != "" && smsAmount != "" && smsNarration != "" && smsId != "") {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE addExpensetable set smsText ='"+smsNarration+"', smsSentDate ='"+smsDate+"',smsAmount = '"+smsAmount+"' where smsId = "+smsId+";");
				});
                 
            
            } else {
        alert("db not found, your browser does not support web sql!");
    }
        
}
    
}



function smartSmsSendForApprover(i,smsId){
    var jsonExpenseDetailsArr = [];
				  var busExpDetailsArr = [];
				  expenseClaimDates=new Object;
				  var accountHeadIdToBeSent=''
							  var busExpDetailId = smsId;
							  var jsonFindBE = new Object();
							  var expDate = j(this).find('td.expDate1').text();
							  var expenseDate  = expDate;
							  var currentDate=new Date(expenseDate);
							  //get Start Date
							  if(!expenseClaimDates.hasOwnProperty('minInDateFormat')){
								  expenseClaimDates["minInDateFormat"]=currentDate;
								  expenseClaimDates["minInStringFormat"]=expenseDate;
							  }else{
								  if(expenseClaimDates.minInDateFormat>currentDate){
									  expenseClaimDates["minInDateFormat"]=currentDate;
									  expenseClaimDates["minInStringFormat"]=expenseDate;
								  }
							  }
							  //get End Date
							  if(!expenseClaimDates.hasOwnProperty('maxInDateFormat')){
								  expenseClaimDates["maxInDateFormat"]=currentDate;
								  expenseClaimDates["maxInStringFormat"]=expenseDate;
							  }else{
								  if(expenseClaimDates.maxInDateFormat<currentDate){
									  expenseClaimDates["maxInDateFormat"]=currentDate;
									  expenseClaimDates["maxInStringFormat"]=expenseDate;
								  }
							  }

							  jsonFindBE["expenseDate"] = "01/10/2018";
							  //get Account Head
							  var currentAccountHeadID= 1;
			/*				  if(validateAccountHead(accountHeadIdToBeSent,currentAccountHeadID)==false){
								  exceptionMessage="Selected expenses should be mapped under Single Expense Type/Account Head."
									  j('#displayError').children('span').text(exceptionMessage);
								  j('#displayError').hide().fadeIn('slow').delay(3000).fadeOut('slow');
								  requestRunning = false;
								  accountHeadIdToBeSent="";
							  }else{*/
								 // accountHeadIdToBeSent=currentAccountHeadID

								  jsonFindBE["accountCodeId"] = window.localStorage.getItem("acc_Code_id_for_ocr");
								  jsonFindBE["ExpenseId"] = window.localStorage.getItem("DefaultExpName");
								  jsonFindBE["ExpenseName"] = "";
								  jsonFindBE["fromLocation"] ="";
								  jsonFindBE["toLocation"] = "";
                                  var smsDate = document.getElementById('smsDate_'+i).value;
                                  var smsAmount =  document.getElementById('smsAmount_'+i).value;
                                  var smsNarration =  document.getElementById('smsNarration_'+i).value;
    
    
								  jsonFindBE["narration"] =document.getElementById('smsNarration_'+i).value;
                                  
								  //jsonFindBE["isErReqd"] = j(this).find('td.isErReqd').text();
								 // jsonFindBE["ERLimitAmt"] = j(this).find('td.ERLimitAmt').text();

								jsonFindBE["perUnitException"] = 'N';

								  //if(j(this).find('td.expUnit').text()!="" ) {
									  //jsonFindBE["units"] = j(this).find('td.expUnit').text();
								  //}
								  
								  jsonFindBE["wayPoint"] = "1";
								
								  jsonFindBE["amount"] = document.getElementById('smsAmount_'+i).value;
								  jsonFindBE["currencyId"] = "1";

								 var dataURL =  "";

								  //For IOS image save
								  var data = dataURL.replace(/data:image\/(png|jpg|jpeg);base64,/, '');

								  //For Android image save
								  var data = dataURL.replace(/data:base64,/, '');

								 jsonFindBE["imageAttach"] = data; 

                                    expenseClaimDates["maxInDateFormat"]=currentDate;
								    expenseClaimDates["maxInStringFormat"]= "01/10/2018";
    				                expenseClaimDates["minInDateFormat"]=currentDate;
								    expenseClaimDates["minInStringFormat"]="01/10/2018";
								  jsonExpenseDetailsArr.push(jsonFindBE);
    

								  busExpDetailsArr.push(busExpDetailId);
								  requestRunning = true;
							  //}
                sendForApprovalBusinessDetailsA(jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
						if(accountHeadIdToBeSent!="" && busExpDetailsArr.length>0){
						  	 sendForApprovalBusinessDetails(jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
						  }
    
}


function smartSmsSendForApprover1(){
    
    			var jsonExpenseDetailsArr = [];
				  var busExpDetailsArr = [];
				  expenseClaimDates=new Object;
				  if(requestRunning){
						  	return; 
	    					}
				  var accountHeadIdToBeSent=''
							  var busExpDetailId = j(this).find('td.busExpId').text();
							  var jsonFindBE = new Object();
							  var expDate = j(this).find('td.expDate1').text();
							  var expenseDate  = expDate;
							  var currentDate=new Date(expenseDate);
							  //get Start Date
							  if(!expenseClaimDates.hasOwnProperty('minInDateFormat')){
								  expenseClaimDates["minInDateFormat"]=currentDate;
								  expenseClaimDates["minInStringFormat"]=expenseDate;
							  }else{
								  if(expenseClaimDates.minInDateFormat>currentDate){
									  expenseClaimDates["minInDateFormat"]=currentDate;
									  expenseClaimDates["minInStringFormat"]=expenseDate;
								  }
							  }
							  //get End Date
							  if(!expenseClaimDates.hasOwnProperty('maxInDateFormat')){
								  expenseClaimDates["maxInDateFormat"]=currentDate;
								  expenseClaimDates["maxInStringFormat"]=expenseDate;
							  }else{
								  if(expenseClaimDates.maxInDateFormat<currentDate){
									  expenseClaimDates["maxInDateFormat"]=currentDate;
									  expenseClaimDates["maxInStringFormat"]=expenseDate;
								  }
							  }

							  jsonFindBE["expenseDate"] = expenseDate;
							  //get Account Head
							  var currentAccountHeadID=j(this).find('td.accHeadId').text();

							  if(validateAccountHead(accountHeadIdToBeSent,currentAccountHeadID)==false){
								  exceptionMessage="Selected expenses should be mapped under Single Expense Type/Account Head."
									  j('#displayError').children('span').text(exceptionMessage);
								  j('#displayError').hide().fadeIn('slow').delay(3000).fadeOut('slow');
								  requestRunning = false;
								  accountHeadIdToBeSent="";
							  }else{
								  accountHeadIdToBeSent=currentAccountHeadID

								  jsonFindBE["accountCodeId"] = j(this).find('td.accountCodeId').text();
								  jsonFindBE["ExpenseId"] =j(this).find('td.expNameId').text();
								  jsonFindBE["ExpenseName"] = j(this).find('td.expName').text();
								  jsonFindBE["fromLocation"] = j(this).find('td.expFromLoc1').text();
								  jsonFindBE["toLocation"] = j(this).find('td.expToLoc1').text();
								  jsonFindBE["narration"] = j(this).find('td.expNarration1').text();

								  jsonFindBE["isErReqd"] = j(this).find('td.isErReqd').text();
								  jsonFindBE["ERLimitAmt"] = j(this).find('td.ERLimitAmt').text();

								  jsonFindBE["perUnitException"] = j(this).find('td.isEntitlementExceeded').text();

								  if(j(this).find('td.expUnit').text()!="" ) {
									  jsonFindBE["units"] = j(this).find('td.expUnit').text();
								  }
								  
								  jsonFindBE["wayPoint"] = j(this).find('td.wayPoint').text();
								
								  jsonFindBE["amount"] = j(this).find('td.expAmt1').text();
								  jsonFindBE["currencyId"] = j(this).find('td.currencyId').text();

								  var dataURL =  j(this).find('td.busAttachment').text();

								  //For IOS image save
								  var data = dataURL.replace(/data:image\/(png|jpg|jpeg);base64,/, '');

								  //For Android image save
								  //var data = dataURL.replace(/data:base64,/, '');

								  jsonFindBE["imageAttach"] = data; 

								  jsonExpenseDetailsArr.push(jsonFindBE);

								  busExpDetailsArr.push(busExpDetailId);
								  requestRunning = true;
							  }
						  
						if(accountHeadIdToBeSent!="" && busExpDetailsArr.length>0){
						  	 sendForApprovalBusinessDetails(jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
						  }

}

function sendForApprovalBusinessDetailsA(jsonBEArr,busExpDetailsArr,accountHeadID){
	 var jsonToSaveBE = new Object();
	 jsonToSaveBE["employeeId"] = window.localStorage.getItem("EmployeeId");
	 jsonToSaveBE["expenseDetails"] = jsonBEArr;
	 jsonToSaveBE["startDate"]=expenseClaimDates.minInStringFormat;
	 jsonToSaveBE["endDate"]=expenseClaimDates.maxInStringFormat;
	 jsonToSaveBE["DelayAllowCheck"]=false;
	 jsonToSaveBE["BudgetingStatus"]=window.localStorage.getItem("BudgetingStatus");
	 jsonToSaveBE["accountHeadId"]=window.localStorage.getItem("DefaultAccCode");
	 jsonToSaveBE["ProcessStatus"] = "1";
	 jsonToSaveBE["title"]= window.localStorage.getItem("FirstName")+"/"+jsonToSaveBE["startDate"]+" to "+jsonToSaveBE["endDate"];
	
     var pageRefSuccess='../../'+defaultPagePath+'success.html';
     var pageRefFailure='../../'+defaultPagePath+'failure.html';
	callSendForApprovalServiceForBEA(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure);
	 
}



function discardMessagesA(smsID){
			mydb.transaction(function (t) {
				t.executeSql("DELETE FROM smsMaster WHERE smsId=?", [smsID]);
			});
          location.reload();
		}




function discardMessages1(smsID){
    
    j.confirm({
    title: 'Confirm!',
    content: 'Do you really want to delete?',
    buttons: {
        confirm: function () {
            	mydb.transaction(function (t) {
				t.executeSql("DELETE FROM smsMaster WHERE smsId=?", [smsID]);
			});
                  location.reload();
		   },
           cancel: function () {
            location.reload();
        
    }
        }
});
    
}


function discardMessages3(smsID){
    
    j.confirm({
    title: 'Confirm!',
    content: 'Do you really want to delete?',
    buttons: {
        confirm: function () {
            	mydb.transaction(function (t) {
				t.executeSql("DELETE FROM wishListForBussExpense  WHERE busExpId=?", [smsID]);
			});
                  location.reload();
		   },
           cancel: function () {
            location.reload();
        
    }
        }
});
    
}




function discardMessages2(smsID){
    
    j.confirm({
    title: 'Confirm!',
    content: 'Do you really want to delete?',
    buttons: {
        confirm: function () {
            	mydb.transaction(function (t) {
				t.executeSql("DELETE FROM addExpensetable WHERE smsId=?", [smsID]);
			});
                  location.reload();
		   },
           cancel: function () {
            location.reload();
        
    }
        }
});
    
}

function saveBusinessDetailsInWishList(i,smsId){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('smsNarration_'+i).value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt = document.getElementById('smsAmount_'+i).value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								t.executeSql("DELETE FROM smsMaster WHERE smsId=?", [smsId]);

			});

          location.reload();

                    alert("Added to wishlist.");

		/*}else{
			return false;
		}*/
    } else {
        alert('Database not found, your browser does not support web sql!');
        
    }
}


function validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id){
	if(exp_date == ""){
        alert('Expense Date is invalid');
		return false;
	}
	if(acc_head_id == "-1"){
        alert('Account Head is invalid');
		return false;
	}
	if(exp_name_id == "-1"){
        alert('Expense Name is invalid');
		return false;
	}

	if(isZero(exp_amt,"Amount")==false){
		document.getElementById("expAmt").value = "";
		return false;
	}


	if(exp_narration == ""){
        alert('Narration is invalid');
		return false;
	}
	
		

		if(exp_amt != ""){
			if(isOnlyNumeric(exp_amt,"Amount")==false)
			{
				return false;
			}
			
		}else{
            alert('Amount is invalid');
			return false;
		}
	
	if(currency_id == "-1"){
        alert('Currency Name is invalid');
		return false;
	}
	
		return true;
	}

function fetchDataFromWishListA() {
    mydb.transaction(function(t) {

      t.executeSql('SELECT * FROM wishListForBussExpense;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box9').empty(); 
/*        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img src="images/Uber-Logo-120x120.jpg" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">SMS date : '+row.expDate+' | Amount Rs. : '+row.expAmt+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.expNarration);
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
            var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send for approval').appendTo(div17);  
            var a2 = j('<a></a>').text('Add to wishlist').attr({ class: ["action-blue js-down"].join(' ') }).appendTo(div17);  
            var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages1("+row.smsId+");"].join(' ')}).appendTo(div17);  
                
            mytable.appendTo("#box9");
         
            }*/
              
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["selectli(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="images/dummy-image.png" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">Expense date : '+row.expDate+' | Amount : '+row.expAmt+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.expNarration);
            
          var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_'+i+'" src="images/dummy-image.png" alt ="">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto(\'Wishlist$\''+i+');">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);

            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.expDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.expAmt+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.expNarration+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateSms('+i+','+row.busExpId+'),reload();" ></img>&nbsp;&nbsp;&nbsp;');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable); 
             var a0 = j('<a></a>').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["hideNow(this)"].join(' ')}).text('Edit').appendTo(div17);  
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.busExpId+");"].join(' ')}).text('Send').appendTo(div17);   
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages3("+row.busExpId+");"].join(' ')}).appendTo(div17);  
            var divA = j('<div></div>').attr({ class: ["closemenow"].join(' '),onclick : ["reload();"].join(' ') }).appendTo(div8);
             j(divA).append('<img id="" src="images/closeme.png" alt ="">');
                                            
            mytable.appendTo("#box9");  
           //createExpenseName("expenseName_"+i);
            //showPic(i,row.smsAttachment);
            }  
     }     
          
                });
         });
}
function changePage(){
    window.location.href = 'add-to-wishlist.html';
}

function reload(){

    location.reload();
}
function changePage1(){
    window.location.href = 'landingSmsPage.html';
}

function hide(){
  j('.ontent-block tabshead').hide(); 
}

function hideOn(obj) {
       
    try {
        for(var i=0; i<obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes.length; i++) {
            var clName = obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].className;
            if(clName && clName==='item-content claimlisting') {
                var displayVal = obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].style.display;
                if(displayVal && displayVal==='none') {
                    obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].style.display='block';
                    obj.parentNode.parentNode.parentNode.parentNode.style.display='none';
                } else if(displayVal) {
                    obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].style.display='none';
                    obj.parentNode.parentNode.parentNode.parentNode.style.display='block';
                }
                break;
            }
        }

    } catch(e) {
        console.log("Exception : " + e);
    }
}

function goToHome(){
    window.location.href = 'choose-type.html';
}

var cameraTask;
function 	takePhoto(camera_task){
    cameraTask = camera_task;
    console.log("cameraTask  " +cameraTask);

    //sendDataToOCR('Arvind,pandey');

/*    CameraPreview.takePicture(function(base64PictureData){
   code here 
        onTakePhotoDataSuccess(base64PictureData);
    });*/
    
	try {
//navigator.camera.getPicture(onTakePhotoDataSuccess(), onTakeFail, { quality: 10,
      // destinationType: Camera.DestinationType.FILE_URI });
        
      navigator.camera.getPicture(onPhotoDataSuccess,onFail, { quality: 10,
       destinationType: Camera.DestinationType.FILE_URI });


	}catch(e) {
		alert("takephoto ex : " + e);
	}
    
    

/*
       navigator.camera.getPicture(function(imageData) {
    onTakePhotoDataSuccess(imageData, i),onTakeFail;
}, null, options);

*/

    
    
		//camerastatus = status;    
    
}

function onFail(message) {
        
    }

function onPhotoDataSuccess(imageData) {
    //alert("cameraTask 12336 "+cameraTask);
	var index = -1;
	if((cameraTask != " ") ||  (cameraTask != null)){
		var vals = cameraTask.split("$");
		cameraTask = vals[0];
		index =vals[1];
	}
	
	
    if(cameraTask === "SMS"){
    var fileTempCamera = imageData;
    document.getElementById("show_"+index).src = imageData;
    document.getElementById("attach_"+index).src = imageData;
       //show_0.src = "data:image/jpeg;base64,"+imageData;
		//attach_0.src = "data:image/jpeg;base64,"+imageData;
       
            if (fileTempCamera != "" && fileTempCamera != null) {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE smsMaster set smsAttachment ='"+fileTempCamera+"' where smsId = ;"+index);
				});
            } else {
        alert("db not found, your browser does not support web sql!");
      }
    }else if(cameraTask === "wallet"){
        //alert("in wallet ");
        saveWalletAttachment(imageData);
        getReceiptsImage();
    }else if(cameraTask === "Wishlist"){
		var fileTempCamera = imageData;
    document.getElementById("show_"+index).src = imageData;
    document.getElementById("attach_"+index).src = imageData;
       //show_0.src = "data:image/jpeg;base64,"+imageData;
		//attach_0.src = "data:image/jpeg;base64,"+imageData;
       
            if (fileTempCamera != "" && fileTempCamera != null) {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE wishListForBussExpense set busExpAttachment ='"+fileTempCamera+"' where busExpId = ;"+index);
				});
            } else {
        alert("db not found, your browser does not support web sql!");
      }
	}else if (cameraTask === "AddExpense"){
		var fileTempCamera = imageData;
    document.getElementById("show_"+index).src = imageData;
    document.getElementById("attach_"+index).src = imageData;
       //show_0.src = "data:image/jpeg;base64,"+imageData;
		//attach_0.src = "data:image/jpeg;base64,"+imageData;
       
            if (fileTempCamera != "" && fileTempCamera != null) {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE addExpensetable set smsAttachment ='"+fileTempCamera+"' where smsId = ;"+index);
				});
            } else {
        alert("db not found, your browser does not support web sql!");
      }
	}else if (cameraTask === "AddVoice"){
		var fileTempCamera = imageData;
    document.getElementById("show_"+index).src = imageData;
    document.getElementById("attach_"+index).src = imageData;
       //show_0.src = "data:image/jpeg;base64,"+imageData;
		//attach_0.src = "data:image/jpeg;base64,"+imageData;
       
            if (fileTempCamera != "" && fileTempCamera != null) {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE addVoiceExpense set smsAttachment ='"+fileTempCamera+"' where smsId = ;"+index);
				});
            } else {
        alert("db not found, your browser does not support web sql!");
      }
	}else if (cameraTask === "AddOCR"){
		var fileTempCamera = imageData;
    document.getElementById("show_"+index).src = imageData;
    document.getElementById("attach_"+index).src = imageData;
       //show_0.src = "data:image/jpeg;base64,"+imageData;
		//attach_0.src = "data:image/jpeg;base64,"+imageData;
       
            if (fileTempCamera != "" && fileTempCamera != null) {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE smsMaster set addOcrExpense ='"+fileTempCamera+"' where smsId = ;"+index);
				});
            } else {
        alert("db not found, your browser does not support web sql!");
      }
	}else if(cameraTask === "ocr"){
        saveWalletAttachment(imageData);
        getReceiptsImage();
    }
      
  }

function showPic(i,image){
    var show = "show_"+i;
    var attach = "attach_"+i;
    document.getElementById("show_"+i).src = image;
    document.getElementById("attach_"+i).src = image;
}


function addExpense(){
     window.location.href = 'addExpense.html';

        jj('.addclaim').show();
}

function addVoiceExpense(){
     window.location.href = 'voiceRead.html';
}

function chooseType(){
     window.location.href = 'choose-type.html';
}

function businessexp(){
    window.location.href = 'business-exp.html';
}

function smartexp(){
   // alert("smartexp  start");
   //  document.removeEventListener("deviceready",initApp);
   //  document.removeEventListener("onSMSArrive",saveIncomingSMSOnLocal);
   //  alert("smartexp  end");

    window.location.href = 'smart-exp.html';
    //alert("smartexp  end href");
}

function addocrfunc(){
     window.location.href = 'ocr.html';
}



// 

function addTobussinesExpense(){
    
	if (mydb) {
		//save incoming sms
        var smsDate = document.getElementById('expDate').value;
        var smsAmount =  document.getElementById('amount').value;
        var smsNarration =  document.getElementById('narration').value;
        var senderAddress ="";
        
	            mydb.transaction(function (t) {
	                t.executeSql("INSERT INTO addExpensetable (smsText,senderAddr,smsSentDate,smsAmount,smsAttachment) VALUES (?,?,?,?,?)", [smsNarration,senderAddress,smsDate,smsAmount,'images/dummy-image.png']);
				});
	            j("#addClaims").hide("slow");
                 alert("Expense added Successfully.");
            location.reload();

	} else {
        alert("db not found, your browser does not support web sql!");
    }
}
    
function fetchBussiness9() {
var paraValue = "SMS";
    mydb.transaction(function(t) {
     mydb.transaction(function (t) {      
      t.executeSql("INSERT INTO addExpensetable (smsId,smsSentDate,senderAddr,smsText,smsAmount,smsAttachment) VALUES (?, ?, ?, ?, ?, ?)", [1,"23-Dec-2016","VM_IPAYTM","Hi your order #14247962455 of Rs. 249.00 for 2 items is successfull. ","249.00",'images/dummy-image.png']);
         
             });  
        var headerOprationBtn;
      t.executeSql('SELECT * FROM addExpensetable;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box10').empty();
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">Expense date : '+row.smsSentDate+' | Amount : '+row.smsAmount+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.smsText);
             var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto(\'AddExpense$\''+i+');">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);
        /*j('<input></input>').attr({ id: "expenseName_"+i,class: [""].join(' '),type: ["hidden"].join(' ') }).appendTo(spen3);*/
            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.smsSentDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.smsAmount+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.smsText+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateBussinesExp('+i+','+row.smsId+'),reload();" ></img>&nbsp;&nbsp;&nbsp;<img class="imagess" style = "width: 22px;     padding-left :75px;" src="images/tosend.png" onclick ="smartSmsSendForApprover('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img style = "width: 22px;" src="images/towishlist.png" class="imagess" onclick ="saveBusinessDetailsInWishListkkk('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img class="imagess"  style = "width: 22px;" src="images/todelete.png" onclick ="discardMessages2('+row.smsId+');"></img>');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send').appendTo(div17);  
             var a2 = j('<a></a>').text('To wishlist').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["saveBusinessDetailsInWishListkkk("+i+","+row.smsId+");"].join(' ')}).appendTo(div17);  
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages2("+row.smsId+");"].join(' ')}).appendTo(div17);  
                
            mytable.appendTo("#box10");  
           //createExpenseName("expenseName_"+i);
           // showPic(i,row.smsAttachment);
            }  
                    
/*            j("#source tr").click(function(){ 
                headerOprationBtn = defaultPagePath+'headerPageForSMSOperation.html';
                if(j(this).hasClass("selected")){ 
                var headerBackBtn=defaultPagePath+'headerPageForSMSOperation.html';
                    j(this).removeClass('selected');
                    j('#mainHeader').load(headerBackBtn);
                }else{
                if(j(this).text()=='DateExpense expid From/To LocAmt'){
                    
                }else{
                    j('#mainHeader').load(headerOprationBtn);
                    j(this).addClass('selected');
                }                   
                }                               
            });*/
            }
         });
     });     
          
 } 



function saveBusinessDetailsInWishListk(){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('narration').value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt =  document.getElementById('amount').value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								

			});

         mydb.transaction(function (t) {
             
             
				t.executeSql("DELETE FROM addExpensetable WHERE smsId=?", [smsId]);
			});
          location.reload();


		/*}else{
			return false;
		}*/
    } else {
        alert('Database not found, your browser does not support web sql!');
        
    }
}



function saveBusinessDetailsInWishListkkk(i,smsId){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('smsNarration_'+i).value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt = document.getElementById('smsAmount_'+i).value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								
               t.executeSql("DELETE FROM addExpensetable WHERE smsId=?", [smsId]);
			});

            
          location.reload();

            alert("Added to wishlist.");
		/*}else{
			return false;
		}*/
    } else {
        alert('Database not found, your browser does not support web sql!');
        
    }
}


function chooseOption(imgObj,i) {
    //console.log("1");
    //alert("in chooseOption " +imgObj +" i value " +i);
try{
	if (window.confirm("Send to OCR?") == true) {
        document.getElementById("imgProcessingId").textContent  = "sending your reciept to OCR for processing...";
		setTimeout(delayFunOK, 1000);
        var imagePath = document.getElementById("recieptid_"+i).src;
        //alert("imagePath  "+imagePath);
        sendDataToOCR(imagePath);

	} else {
        document.getElementById("imgProcessingId").textContent  = "saving your reciept to saved list...";
		setTimeout(delayFunCancel, 2000);
	}
}catch(e){
    alert("chooseOption goneeeeeeeee : "+e);
}
}

function delayFunOK() {

}

function delayFunCancel() {
    document.getElementById("imgProcessingId").textContent  = "Reciept saved successfully to your saved list.";
    setTimeout(function() {document.getElementById("imgProcessingId").textContent  = "";}, 1000);
}



try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}


var noteTextarea = $('amount');
var instructions = $('#recording-instructions');
var notesList = $('ul#notes');

var noteContent = '';

// Get all notes from previous sessions and display them.
var notes = getAllNotes();
renderNotes(notes);



/*-----------------------------
      Voice Recognition 
------------------------------*/

// If false, the recording will stop after a few seconds of silence.
// When true, the silence period is longer (about 15 seconds),
// allowing us to keep recording even when the user pauses. 
recognition.continuous = true;

// This block is called every time the Speech APi captures a line. 
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
};

recognition.onstart = function() { 
  instructions.text('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
  instructions.text('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('No speech was detected. Try again.');  
  };
}



/*-----------------------------
      App buttons and input 
------------------------------*/

$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});


$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  instructions.text('Voice recognition paused.');
});

// Sync the text inside the text area with the noteContent variable.
noteTextarea.on('input', function() {
  noteContent = $(this).val();
})

$('#save-note-btn').on('click', function(e) {
  recognition.stop();

  if(!noteContent.length) {
    instructions.text('Could not save empty note. Please add a message to your note.');
  }
  else {
    // Save note to localStorage.
    // The key is the dateTime with seconds, the value is the content of the note.
    saveNote(new Date().toLocaleString(), noteContent);

    // Reset variables and update UI.
    noteContent = '';
    renderNotes(getAllNotes());
    noteTextarea.val('');
    instructions.text('Note saved successfully.');
  }
      
})


notesList.on('click', function(e) {
  e.preventDefault();
  var target = $(e.target);

  // Listen to the selected note.
  if(target.hasClass('listen-note')) {
    var content = target.closest('.note').find('.content').text();
    readOutLoud(content);
  }

  // Delete note.
  if(target.hasClass('delete-note')) {
    var dateTime = target.siblings('.date').text();  
    deleteNote(dateTime);
    target.closest('.note').remove();
  }
});



/*-----------------------------
      Speech Synthesis 
------------------------------*/

function readOutLoud(message) {
	var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);
}



/*-----------------------------
      Helper Functions 
------------------------------*/

function renderNotes(notes) {
  var html = '';
  if(notes.length) {
    notes.forEach(function(note) {
      html+= `<li class="note">
        <p class="header">
          <span class="date">${note.date}</span>
          <a href="#" class="listen-note" title="Listen to Note">Listen to Note</a>
          <a href="#" class="delete-note" title="Delete">Delete</a>
        </p>
        <p class="content">${note.content}</p>
      </li>`;    
    });
  }
  else {
    html = '<li><p class="content">You don\'t have any notes yet.</p></li>';
  }
  notesList.html(html);
}


function saveNote(dateTime, content) {
  localStorage.setItem('note-' + dateTime, content);
}


function getAllNotes() {
  var notes = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if(key.substring(0,5) == 'note-') {
      notes.push({
        date: key.replace('note-',''),
        content: localStorage.getItem(localStorage.key(i))
      });
    } 
  }
  return notes;
}


function deleteNote(dateTime) {
  localStorage.removeItem('note-' + dateTime); 
}

var a = 0;
function selectli(obj){
    
    if(j(obj).hasClass("selected")){ 
					j(obj).removeClass('selected');
                    a=a-1;
                  if(a === 0){
                    j('.sendrest').hide();
                  }
				}else{
					j(obj).addClass('selected');
                // j(this).toggleClass('selected');
                 j('.sendrest').show();
                    a=a+1;
				}					
    
}


function hideNow(obj) {
    try {
        for(var i=0; i<obj.parentNode.parentNode.childNodes[0].childNodes.length; i++) {
            var clName = obj.parentNode.parentNode.childNodes[0].childNodes[i].className;
            if(clName && clName==='item-content claimlisting') {
               // var displayVal = obj.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[i].style.display;

                     obj.parentNode.parentNode.childNodes[0].childNodes[i].style.display='none';
                     obj.parentNode.parentNode.childNodes[0].childNodes[1].style.display='block';
          
                break;
            }
        }

    } catch(e) {
        console.log("Exception : " + e);
    }
}

function addToVoicebussinesExpense(){
    
	if (mydb) {
		//save incoming sms
        var smsDate = document.getElementById('expDate').value;
        var smsAmount =  document.getElementById('amount').value;
        var smsNarration =  document.getElementById('narration').value;
        var senderAddress ="";
        
	            mydb.transaction(function (t) {
	                t.executeSql("INSERT INTO addVoiceExpense (smsText,senderAddr,smsSentDate,smsAmount,smsAttachment) VALUES (?,?,?,?,?)", [smsNarration,senderAddress,smsDate,smsAmount,'images/dummy-image.png']);
				});
	            j("#addClaims").hide("slow");
                 alert("Expense added Successfully.");
            location.reload();

	} else {
        alert("db not found, your browser does not support web sql!");
    }
}



function saveVoiceBusinessDetailsInWishList(){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('narration').value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt =  document.getElementById('amount').value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								

			});

         mydb.transaction(function (t) {
             
             
				t.executeSql("DELETE FROM addExpensetable WHERE smsId=?", [smsId]);
			});
          location.reload();


		/*}else{
			return false;
		}*/
    } else {
        alert('Database not found, your browser does not support web sql!');
        
    }
}



function fetchBussiness10() {
    var paraValue = "SMS";
    mydb.transaction(function(t) {
     mydb.transaction(function (t) {      
      t.executeSql("INSERT INTO addVoiceExpense (smsId,smsSentDate,senderAddr,smsText,smsAmount,smsAttachment) VALUES (?, ?, ?, ?, ?, ?)", [1,"23-Dec-2016","VM_IPAYTM","Hi your order #14247962455 of Rs. 249.00 for 2 items is successfull. ","249.00",'images/dummy-image.png']);
         
             });  
        var headerOprationBtn;
      t.executeSql('SELECT * FROM addVoiceExpense;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box11').empty();
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">Expense date : '+row.smsSentDate+' | Amount : '+row.smsAmount+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.smsText);
             var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto(\'AddVoice$\''+i+');">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);
        /*j('<input></input>').attr({ id: "expenseName_"+i,class: [""].join(' '),type: ["hidden"].join(' ') }).appendTo(spen3);*/
            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.smsSentDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.smsAmount+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.smsText+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateBussinesExp('+i+','+row.smsId+'),reload();" ></img>&nbsp;&nbsp;&nbsp;<img class="imagess" style = "width: 22px;     padding-left :75px;" src="images/tosend.png" onclick ="smartSmsSendForApprover('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img style = "width: 22px;" src="images/towishlist.png" class="imagess" onclick ="saveBusinessDetailsInWishListkkk('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img class="imagess"  style = "width: 22px;" src="images/todelete.png" onclick ="discardMessages2('+row.smsId+');"></img>');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send').appendTo(div17);  
             var a2 = j('<a></a>').text('To wishlist').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["saveBusinessDetailsInWishListkkk("+i+","+row.smsId+");"].join(' ')}).appendTo(div17);  
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages2("+row.smsId+");"].join(' ')}).appendTo(div17);  
                
            mytable.appendTo("#box11");  
           //createExpenseName("expenseName_"+i);
           // showPic(i,row.smsAttachment);
            }  
                    
/*            j("#source tr").click(function(){ 
                headerOprationBtn = defaultPagePath+'headerPageForSMSOperation.html';
                if(j(this).hasClass("selected")){ 
                var headerBackBtn=defaultPagePath+'headerPageForSMSOperation.html';
                    j(this).removeClass('selected');
                    j('#mainHeader').load(headerBackBtn);
                }else{
                if(j(this).text()=='DateExpense expid From/To LocAmt'){
                    
                }else{
                    j('#mainHeader').load(headerOprationBtn);
                    j(this).addClass('selected');
                }                   
                }                               
            });*/
            }
         });
     });     
          
 } 

function showImage(){
    var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = document.getElementById("img01");


        modal.style.display = "block";
        modalImg.src = this.src;

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
 }
}



function getReceiptsImage() {
try{
var rowsWallet;
            var mytable = j('<div></div>').attr({ id: "",class: ["display:flex"].join(' ') });
            mydb.transaction(function(t) {
                 j('#ocrBox').empty();
              t.executeSql('SELECT * FROM walletMst;', [],
                 function(transaction, result) {
                    
                if (result != null && result.rows != null) {
                    
                    for (var i = 0; i < result.rows.length; i++) {
                
                      var row = result.rows.item(i);    
                        
                       
                       j(mytable).append('<img id="recieptid_'+i+'" src="'+row.walletAttachment+'" style="width:50px; height:50px; padding:5px;" title="Select this reciept for processing" onclick="chooseOption(this,'+i+');" ></img>');

                     mytable.appendTo("#ocrBox");        
                    }
                    j(mytable).append('<br><span id="imgProcessingId" style="vertical-align: top; padding-left: 40px;"></span>');
                     mytable.appendTo("#ocrBox");
                
				  }		
				});
			});
			}catch(e){
                alert("Exp in camera : "+e);
            }

}


    
function saveWalletAttachment(path){
   
	if (mydb) {
            mydb.transaction(function (t) {
                t.executeSql("INSERT INTO walletMst (walletAttachment) VALUES (?)", 
											[path]);
			});
          getReceiptsImage();
	} else {
         alert('Database not found, your browser does not support web sql!');
    }

}
    
    
function getGelleryPhoto(source) {
		try {
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 10, 
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: source });
		}catch(e) {
			alert("click to getPhoto exception : " + e);
		}
		
    }
    
    
function onPhotoURISuccess(imageURI) { 
      // Uncomment to view the image file URI 
      // console.log(imageURI);
      // Get image handle
      //
    		saveWalletAttachment(imageURI);	
            //getReceiptsImage();
	    
    }
    




function sendDataToOCR(imagePath) {
        try {       
        ocrImagePath = imagePath;
        encodeImage(imagePath, function (dataURL) {
    // or do whatever you want with it.
        var str_arr = dataURL.split(',');

            let img_base64 = str_arr[1];
            //alert("ajax ");
            let OCR_URL="https://vision.googleapis.com/v1/images:annotate?key=YOUR_API_KEY";
            let OCR_REQ_BODY='{"requests": [{"image":{"content": "IMG_BODY_BASE64"},"features":[{"type": "TEXT_DETECTION"}]}]}';
            let OCR_GOOGLE_KEY="AIzaSyBEPMonG1v0hfhJFaQp5qxlV8srY2nM8z4";
            try{
                let ocr_url = OCR_URL.replace(new RegExp('YOUR_API_KEY','g'), OCR_GOOGLE_KEY);
                let ocr_req_body = OCR_REQ_BODY.replace(new RegExp('IMG_BODY_BASE64','g'), img_base64);
           

            //alert("ajax 11");
            //alert("ocr_url  " +ocr_url);
            //alert("ocr_req_body  " +ocr_req_body);
            j.ajax({
                url: ocr_url,   
                type:"POST", async:false, 
                success: ocrSuccess,                
                contentType:'application/json',
                data:ocr_req_body,
                error:ocrFailure
            });
             } catch(e) {
                    alert('excepetion in end pont' + e);
            }
       });
            
        }catch(e){alert("exception : " + e)}
            
}


function ocrSuccess(response,status,xhr) {
	//alert("ocrSuccess : " + response + " And status : " + status + " And xhr : " + xhr);
	let textDescription = response.responses[0].textAnnotations[0].description.replace(new RegExp('\n','g'), ' new_line ');
	let receiptObj = extractData(textDescription);
	//alert("receipt = " + JSON.stringify(receiptObj));
	assignValuesToHtmlComponent(receiptObj);

   }

function ocrFailure(xhr,status,error) {
	console.log("ocrFailure : " + error + " And status : " + status + " And xhr : " + xhr);
}

function extractData(receiptText) {
    // alert(receiptText);
	let words = receiptText.split(" ");
	let wordsLength = words.length, iterateNo=0,receipt={},
		totalFound="notFound",dateFound="notFound",hotelName="",hotelNameFound="notFound",hotelNameNewLinesCnt=0;

    
	for(var i=0; i<wordsLength; i++) {
		iterateNo = wordsLength -(i+1);
		if(hotelNameFound === 'notFound' && hotelNameNewLinesCnt<4) {
			if(words[i].trim()==='new_line')
				hotelNameNewLinesCnt++;
			if(hotelNameNewLinesCnt===3) {
				receipt.hotelName = hotelName;
				hotelNameFound = 'found';
			} else {
				if(words[i].trim() != 'new_line')
					hotelName += words[i]+" ";
				else
					hotelName += ", ";
			}
		}
		
       console.log(words[iterateNo]);
		//searching total amount
		if(totalFound === 'notFound' && (words[iterateNo].toLowerCase().trim() ==='total' 
            || words[iterateNo].toLowerCase().trim() ==='total:' || words[iterateNo].toLowerCase().trim() ==='total :' || words[iterateNo].toLowerCase().trim() ==='total =')) {
            console.log("found total at "+words[iterateNo]+" at "+iterateNo+ "wordsLength" +wordsLength );
			let newLinesCnt = 0;
			for(var j=iterateNo+1; j<wordsLength; j++) {
				try {
					if(words[j].trim()==='new_line') {
						newLinesCnt++;
						if(newLinesCnt===3)
							break;
					}
                    console.log(" j == "+(iterateNo+1)+" words[j] "+words[j]);
						if(isNaN(words[j])===false && parseFloat(words[j])>1.0) {
							receipt.totalCost = words[j];
							totalFound="found";
							break;
						} 
				}catch(e) {console.log("exception (NaN): " + e)}
			}
			
			//newLinesCnt===3: means total amount is not available further on the right, 
			//better move to left to get the latest number which can be total amount.
			if(newLinesCnt===3) {
				for(var j=iterateNo-1; j>0; j--) {
					if(isNaN(words[j])===false) {
							receipt.totalCost = words[j];
							totalFound="found";
							break;
					} 
				}
			}
		}
		
		
		//searching date
		if(dateFound==="notFound") {
			try{
				if(validateDate(words[i])=== true) {
					receipt.receiptDate = words[i];
					dateFound="found";
				}
			}catch(e) {console.log("exception (Not a date): " + e)}
		}
	}

    if (receipt.receiptDate === undefined) {
        var today = new Date();
        receipt.receiptDate = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    } 
    //alert("receipt  "+receipt);

	return receipt;
}

function validateDate(strDdate) {
   // alert("strDdate  "+strDdate);
	var formats = [
	    "MM/DD/YYYY  :)  HH*mm*ss",
	    "DD-MMM-YYYY",
	    "DD-MM-YYYY",
	    "DD/MMM/YYYY",
	    "DD/MM/YYYY",
	    "DD/MM/YY",
	    "DD-MM-YY",
	    'weekday, dth mmmm yyyy',
	    'mmm-yy',
	    'dd-mmm-yyyy time',
	    'yyyy-mm-dd time24',
	    'dd-mmm-yyyy time12',
	    'yyyy/mm/dd',
	    'yy/mm/dd'
	];
	
	return moment(strDdate, formats, true).isValid();
}

function assignValuesToHtmlComponent(obj){
    //alert("assignValuesToHtmlComponent  "+obj)
    document.getElementById("imgProcessingId").textContent  = "Reciept Processed successfully.";
    setTimeout(function() {document.getElementById("imgProcessingId").textContent  = "";}, 1000);
	 document.getElementById("ocrClaims").style.display = "block";
    document.getElementById('ocrExpDate').value= obj.receiptDate;
    document.getElementById('ocrAmount').value= obj.totalCost;
    document.getElementById('ocrnarration').value=obj.hotelName;
    document.getElementById("ocrImage").src= ocrImagePath;
    deleteImageFromWallet(ocrImagePath);
}

function encodeImage(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
        c.width = this.width;
        c.height = this.height;
        ctx.drawImage(img, 0, 0);
        var dataURL = c.toDataURL("image/jpeg");
        callback(dataURL)
    };
    img.src = imageUri;
}




function fetchOCRExpense() {
    var paraValue = "SMS";
    mydb.transaction(function(t) {
        var headerOprationBtn;
      t.executeSql('SELECT * FROM ocrExpenseDetails;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#box15').empty();
        for (var i = 0; i < result.rows.length; i++) {
            var row = result.rows.item(i);
            var mytable = j('<li></li>').attr({ id: "",class: ["swipeout"].join(' ') });
            var div1 = j('<div></div>').attr({ class: ["swipeout-content"].join(' ') }).appendTo(mytable);
            var div2 = j('<div></div>').attr({ class: ["item-content claimlisting"].join(' ') ,onclick : ["expandCollapse(this);"].join(' ') }).appendTo(div1);
            var div3 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div2);
            var div4 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div3);
            var spen = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div4);
            j(spen).append('<img id = "show_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var div5 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div3);
            var div6 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div5);
            j(div6).append('<span class="data">Expense date : '+row.smsSentDate+' | Amount : '+row.smsAmount+'</span>');
            var div7 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div5);
            j(div7).append(row.smsText);
             var div8 = j('<div></div>').attr({ class: ["opentogglelist"].join(' '),style:["display:none"].join(' ') }).appendTo(div1);
            var div9 = j('<div></div>').attr({ class: ["item-inner comments-list"].join(' ') }).appendTo(div8);
            var div10 = j('<div></div>').attr({ class: ["image"].join(' ') }).appendTo(div9);
            var spen1 = j('<spen></spen>').attr({ class: ["ava"].join(' ') }).appendTo(div10);
            j(spen1).append('<img id="attach_'+i+'" src="'+row.smsAttachment+'" alt ="">');
            var spen11 = j('<spen></spen>').attr({ class: [""].join(' ') }).appendTo(div10);
            j(spen11).append('<img style="width: 53%; padding: 10px;" src="images/camera.png" onclick="takePhoto(\'AddOCR\$'*+i+');">');
            var div11 = j('<div></div>').attr({ class: ["text"].join(' ') }).appendTo(div9);
            var div12 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen3 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense type :').appendTo(div12);
        /*j('<input></input>').attr({ id: "expenseName_"+i,class: [""].join(' '),type: ["hidden"].join(' ') }).appendTo(spen3);*/
            var select1 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen3);
            var option1 = j('<option></option>').attr({ class: [""].join(' ') }).text("Meal").appendTo(select1);
            var option2 = j('<option></option>').attr({ class: [""].join(' ') }).text("Conveyance").appendTo(select1);
            var option3 =j('<option></option>').attr({ class: [""].join(' ') }).text("Telephone").appendTo(select1);
            var option7 =j('<option></option>').attr({ class: [""].join(' ') }).text("Client Entertainment").appendTo(select1);
            var spen4 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text(' Currency :').appendTo(div12);
            var select2 = j('<select></select>').attr({ class: [""].join(' ') }).appendTo(spen4);
            var option4 = j('<option></option>').attr({ class: [""].join(' ') }).text("INR").appendTo(select2);
            var option5 = j('<option></option>').attr({ class: [""].join(' ') }).text("USD").appendTo(select2);
            var option6 =j('<option></option>').attr({ class: [""].join(' ') }).text("EUR").appendTo(select2);

            var div14 = j('<div></div>').attr({ class: ["info"].join(' ') }).appendTo(div11);
            var spen5 = j('<spen></spen>').attr({ class: ["data"].join(' ') }).text('Expense date :').appendTo(div14);
            j(spen5).append('<input type="text" placeholder="Date" id = "smsDate_'+i+'" value='+row.smsSentDate+'> Amount <input type="tel" placeholder="Amount" id="smsAmount_'+i+'" value ='+row.smsAmount+'>');
            var div15 = j('<div></div>').attr({ class: ["comment"].join(' ') }).appendTo(div11);
            j(div15).append('<textarea placeholder="Narration" id="smsNarration_'+i+'">'+row.smsText+'</textarea>');  
             var div16 = j('<div></div>').attr({ class: ["imagess"].join(' ') }).appendTo(div11);
             j(div16).append('<img class="imagess" style = "width: 22px;" src="images/done.png" onclick ="updateOCRExp('+i+','+row.smsId+');" ></img>&nbsp;&nbsp;&nbsp;<img class="imagess" style = "width: 22px;     padding-left :75px;" src="images/tosend.png" onclick ="smartSmsSendForApprover('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img style = "width: 22px;" src="images/towishlist.png" class="imagess" onclick ="saveBusinessDetailsInWishListkkk('+i+','+row.smsId+');"></img> &nbsp;&nbsp;<img class="imagess"  style = "width: 22px;" src="images/todelete.png" onclick ="discardMessages123('+row.smsId+');"></img>');
             var div17 = j('<div></div>').attr({ class: ["swipeout-actions-right"].join(' ')}).appendTo(mytable);     
             var a1 = j('<a></a>').attr({ class: ["action-green js-up"].join(' ') ,onclick : ["smartSmsSendForApprover("+i+","+row.smsId+");"].join(' ')}).text('Send').appendTo(div17);  
             var a2 = j('<a></a>').text('To wishlist').attr({ class: ["action-blue js-up"].join(' ') ,onclick : ["saveBusinessDetailsInWishListkkk("+i+","+row.smsId+");"].join(' ')}).appendTo(div17);  
             var a3 = j('<a></a>').text('Delete').attr({ class: ["action-red js-down"].join(' '),onclick : ["discardMessages123("+row.smsId+");"].join(' ')}).appendTo(div17);  
                
            mytable.appendTo("#box15");  
           //createExpenseName("expenseName_"+i);
           // showPic(i,row.smsAttachment);
            }  
                    
/*            j("#source tr").click(function(){ 
                headerOprationBtn = defaultedPagePath+'headerPageForSMSOperation.html';
                if(j(this).hasClass("selected")){ 
                var headerBackBtn=defaultPagePath+'headerPageForSMSOperation.html';
                    j(this).removeClass('selected');
                    j('#mainHeader').load(headerBackBtn);
                }else{
                if(j(this).text()=='DateExpense expid From/To LocAmt'){
                    
                }else{
                    j('#mainHeader').load(headerOprationBtn);
                    j(this).addClass('selected');
                }                   
                }                               
            });*/
            }
         });
     });     
          
 } 

function updateOCRExp(i,smsId){
    var aa =  document.getElementById('smsAmount_'+i).value;
    if (mydb) {
        var smsDate = document.getElementById('smsDate_'+i).value;
        var smsAmount =  document.getElementById('smsAmount_'+i).value;
        var smsNarration =  document.getElementById('smsNarration_'+i).value;
        
        if (smsDate != "" && smsAmount != "" && smsNarration != "" && smsId != "") {
	            mydb.transaction(function (t) {
	                t.executeSql("UPDATE addOcrExpense set smsText ='"+smsNarration+"', smsSentDate ='"+smsDate+"',smsAmount = '"+smsAmount+"' where smsId = "+smsId+";");
				});
                 
            
            } else {
        alert("db not found, your browser does not support web sql!");
    }
        
}
    
}




function discardMessages123(smsID){
 
    j.confirm({
    title: 'Confirm!',
    content: 'Do you really want to delete?',
    buttons: {
        confirm: function () {
            	mydb.transaction(function (t) {
				t.executeSql("DELETE FROM addOcrExpense WHERE smsId=?", [smsID]);
			});
                  fetchOCRExpense();
		   },
           cancel: function () {
            location.reload();
        
    }
        }
});
    
}


function saveOcrDetailsInWishList(){
	exceptionMessage='';
	if (mydb) {
		//get the values of the text inputs
          
        var exp_date ="12/05/2017";
		var exp_from_loc = "";
		var exp_to_loc = "";
		var exp_narration = document.getElementById('narration').value;
		var exp_unit = "1";
		var way_points ="1";
		var exp_amt =  document.getElementById('amount').value;
		var entitlement_exceeded="N";
		var acc_head_id;
		var acc_head_val;
		var exp_name_id;
		var exp_name_val;
		var currency_id;
		var currency_val;
		var file;
        acc_head_id = 1;
        exp_name_id= 6;
        currency_id = 1;
        
		/*if(j("#accountHead").select2('data') != null){
			acc_head_id = j("#accountHead").select2('data').id;
			acc_head_val = j("#accountHead").select2('data').name;
		}else{
			acc_head_id = '-1';
		}
		
		if(j("#expenseName").select2('data') != null){
			exp_name_id = j("#expenseName").select2('data').id;
			exp_name_val = j("#expenseName").select2('data').name;
		}else{
			exp_name_id = '-1';
		}	
		
		if(j("#currency").select2('data') != null){
			currency_id = j("#currency").select2('data').id;
			currency_val = j("#currency").select2('data').name;
		}else{
			currency_id = '-1';
		}
		
		if(fileTempGalleryBE ==undefined || fileTempGalleryBE ==""){
		
		}else{
			file = fileTempGalleryBE;
		}
		
		if(fileTempCameraBE ==undefined || fileTempCameraBE ==""){
		
		}else{
			file = fileTempCameraBE; 
		}*/
		
		/*if(validateExpenseDetails(exp_date,exp_from_loc,exp_to_loc,exp_narration,exp_unit,exp_amt,acc_head_id,exp_name_id,currency_id)){*/		  
/*		  
		  if(file ==undefined){
		  	file="";
			}*/
		  mydb.transaction(function (t) {
				t.executeSql("INSERT INTO wishListForBussExpense (expDate, accHeadId,expNameId,expFromLoc, expToLoc, expNarration, expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
											[exp_date,acc_head_id,exp_name_id,exp_from_loc, exp_to_loc,exp_narration,exp_unit,exp_amt,currency_id,entitlement_exceeded,file,way_points]);
								

			});

         mydb.transaction(function (t) {
             
             
				t.executeSql("DELETE FROM addOcrExpense WHERE smsId=?", [smsId]);
			});
          fetchOCRExpense();


		/*}else{
			return false;
		}*/
    } else {
        alert('Database not found, your browser does not support web sql!');
        
    }
}


function deleteImageFromWallet(path){
    //alert("deleteImageFromWallet");
    try{
    	if (mydb) {
            mydb.transaction(function (t) {
                t.executeSql("delete from walletMst where walletAttachment ="+path+";");
			});
           getReceiptsImage();
    } else {
         alert('Database not found, your browser does not support web sql!');
    }
	}catch(e){
alert("Error in deleteImageFromWallet :" +e);
}
}

function syncAllMaster(){
	
	var trRole = window.localStorage.getItem("TrRole");
	var eaInMobile = window.localStorage.getItem("EaInMobile");
	if(trRole != null || trRole != ""){
                  if(trRole){
				  synchronizeTRMasterData();
				  synchronizeTRForTS();
                   }
               }
    /*         if(eaInMobile != null || eaInMobile != ""){
			  if(eaInMobile){
				synchronizeEAMasterData(); 
			   }
             }*/
               synchronizeBEMasterData();
                
          /* if(data.hasOwnProperty('smartClaimsViaSMSOnMobile') && 
                 data.smartClaimsViaSMSOnMobile != null){
                  if(data.smartClaimsViaSMSOnMobile){
                 synchronizeWhiteListMasterData();
                 alert("2 startWatch called");
	               startWatch();
                  }
                 }*/
	
	setTimeout(function(){ 
		 mydb.transaction(function(t) {
      t.executeSql('SELECT * FROM expNameMst ;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
			   for (var i = 0; i < result.rows.length; i++) {
				    var row = result.rows.item(i);``
                    console.log("DefaultAccCode   "+row.accHeadId)
				   window.localStorage.setItem("DefaultAccCode",row.accHeadId);
				   window.localStorage.setItem("DefaultExpName",row.expNameMstId);
				   break;
			  }
		  }
	  
	      });
	});
		
	}, 3000);
	
	
}

function zoomImg(id){
	//var images = j('#'+id).attr(src);
	j('#img01').attr('src', 'images/dummy-image.png').css('display','block');
//	j('#img01').attr('src', path);
	
}

function showImg(id){
	j(id).css('display','block');
	
}

function hideImg(id){
	j(id).css('display','none');
}

//Dinesh Start 

function checkforData(){
    //alert("checkforData app.js Dinesh")
// try{
//      mydb.transaction(function (t) {
//                     t.executeSql("INSERT INTO BusinessExpDetailsForSMS (busExpId,accHeadId,expNameId,expDate,expFromLoc, expToLoc, expNarration, expUnit, expAmt, currencyId, isEntitlementExceeded, busExpAttachment, wayPointunitValue) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", 
//                  [1,1,1,'','','','Hi your order #14247962455 of Rs. 100 for 2 items is successfull.',1,100.00,1,'N','images/dummy-image.png','']);
//                 });
//  }catch(e){
//     console.log(e);
//  }

                        
        mydb.transaction(function(t) {
      t.executeSql('SELECT * FROM BusinessExpDetailsForSMS;', [],
         function(transaction, result) {
          if (result != null && result.rows != null) {
        j('#smsClaimsbox').empty();
        for (var i = 0; i < result.rows.length; i++) {          
                        
        var row = result.rows.item(i);  
       try{

  var data ="<li class='swipeout'> <div class='swipeout-content'> "
+ " <div class='item-content claimlisting' onclick='expandCollapseHide(this,"+i+");'> "
+ " <div class='item-inner comments-list'> "
+ " <div class='image'> "
+ " <span class='ava'> "
+ " <img src='images/freecharge-200x200_2163.jpg' alt=''> "
+ " </span> "
+ " </div> "
+ " <div class='text'> "
+ " <div class='info'> "
+ " <span class='data'>SMS date : "+row.expDate+" | Amount : "+row.expAmt+"</span> "
+ " </div> "
+ " <div class='comment'> "
+ row.expNarration
+ " </div> "
+ " </div> "
+ " <div class='closeexpbox'><i class='fa fa-angle-double-down'></i></div> "
+ " </div> "
+ " </div> "
+ " <div class='opentogglelist'> "
+ " <div class='item-inner comments-list'> "
+ " <table> "
+ " <tr> "
+ " <td valign='top'> "
+ " <div class='image'> "
+ " <span class='ava'> "
+ " <img src='images/dummy-image.png' alt=''> "
+ " </span> "
+ " </div> "
+ " <div class='verticalicons'> "
+ " <ul> "
+ " <li> "
+ " <a href='' class='vericonssml'><i class='fa fa-camera' aria-hidden='true'></i></a> "
+ " </li> "
+ " <li> "
+ " <a href='' class='vericonssml'><i class='fa fa-picture-o' aria-hidden='true'></i></a> "
+ " </li> "
+ " <li> "
+ " <a href='' class='vericonssml'><i class='fa fa-map-marker' aria-hidden='true'></i></a> "
+ " </li> "
+ " </ul> "
+ " </div> "
+ " </td> "
+ " <td valign='top'> "
+ " <table class='tablefixed'> "
+ " <tr> "
+ " <td width='20%'>Account head: </td> "
+ " <td colspan='3' width='80%'> "
+ " <input  id = 'accountHeadSMS_"+i +"' placeholder='Account Head'  value = "+row.accHeadId+" style='width: 100%;'> "
+ " </td> "
+ " </tr> "
+ " <tr> "
+ " <td>Expense name: </td> "
+ " <td> "
+ " <input id = 'expenseNameSMS_"+i +"' value = "+row.expNameId+" placeholder='Expense Name' style=''><input id='ratePerUnit_"+i+"'  value="+row.expRatePerUnit+" style='display:none;'><input id='expNameMstIdSMS_"+i+"'   style='display:none;'> "
+ " </input> "
+ " </td> "
+ " <td>Expense date: </td> "
+ " <td> "
+ " <input type='text' placeholder = 'Expense Date' class='datepicker_recurring_start' style='width: 50%;'  id = expDate_"+i +" value = "+row.expDate+" > "
+ "</input>"
+ " </td> "

+ " </tr> "
+ " <tr> "
+ " <td>From location: </td> "
+ " <td> "
+ " <input placeholder = 'From Location' id = fromLoc_"+i +" value = "+row.expFromLoc+"> "
+ " </td> "
+ " <td>To location: </td> "
+ " <td> "
+ " <input placeholder = 'To Location' id = toLoc_"+i +" value = "+row.expToLoc+"> "
+ " </td> "
+ " </tr> "
+ " <tr> "
+ " <td colspan='4'>(Unit is no. of persons/Kms/meals etc.)</td> "
+ " </tr> "
+ " <tr> "

+ " <td> "
+ " <span class='text-left' style='display: block;'>Units</span> "
+ " <input type='tel' placeholder = 'Units' id = unit_"+i +"   onkeyup='calculatePerUnitForSmart("+i+");' value = 1> "
+ " </td> "
+ " <td colspan='2'> "
+ " <span class='text-left' style='display: block;'>Amount</span> "
+ " <input type='tel' placeholder = 'Amount' id = amount_"+i +"  onkeyup='checkAmountForSmart("+i+"); validateForAmount("+i+"); checkPerUnitExceptionStatusForBEAtLineLevelForSmart("+i+");' value = "+row.expAmt+"> "
+ "  </td>"

+ " <td> "
+ " <span class='' style='display: block;'>Currency</span> "
+ " <input id = 'currencySMS_"+i +"' value = "+row.currencyId+"> "
+ " </td> "
+ " </tr> "
+ "  <tr>"
+ " <td colspan='4'> "
+ "  <p id=errorMsgArea_"+i+"><span id=errorSpan_"+i+"></span></p>"
+ "  </td>"
+ " </tr>"



+ " <tr> "
+ " <td colspan='4'> "
+ " <textarea rows='2' placeholder='Narration' id = narration_"+i +">"+row.expNarration+" </textarea> "
+ " </td> "
+ " </tr> "
+ " </table> "
+ " </td> "
+ " </tr> "
+ " <tr> "
+ " <td colspan='2'> "
+ " <div class='fourlinkbtm'> "
+ " <table> "
+ " <tr> "
+ " <td><a href='' onclick='updateSmsRecord("+i+","+row.busExpId+");'><i class='fa fa-check' aria-hidden='true' ></i> Save</a></td>"
+ " <td><a href='' onclick='sendForApprovalForSMS("+i+","+row.busExpId+");'><i class='fa fa-send' aria-hidden='true' ></i> Send Approval</a></td> "
+ " <td><a href=''><i class='fa fa-heart' aria-hidden='true'></i> Add Wishlist</a></td> "
+ " <td><a href='' onclick='deleteSmsRecord("+row.busExpId+");'><i class='fa fa-remove' aria-hidden='true' ></i> Remove</a></td>"
+ " <td><a href='' class='closeexpmodal'><i class='fa fa-angle-double-up' aria-hidden='true' onclick='closeAllHide();'></i> Close</a></td> "
+ " </tr> "
+ " </table> "
+ " </div> "
+ " </td> "
+ " </tr> "
+ " </table> "
+ " </div> "
+ " </div> "
+ " </div> "
+ " <div class='swipeout-actions-right-rmv' style='display:none;'> "
+ " <a href='#' class='action-green js-up'>Send for Approval</a> "
+ " <a href='#' class='action-red js-down'>Add to wishlist</a> "
+ " <a href='#' class='action-blue js-down'>Delete</a> "
+ " </div> "
+ " </li> ";                    
    

}
catch(e){
    alert("exception in dynamic page : " +e);
}

     j('#smsClaimsbox').append(data);
     
        }
          }
      });
                   });
                                
    
          
 }  



function closeAllHide(){
        jj('.closeexpmodal').on('click', function (e) { 
        jj('.opentogglelist, .addclaim, .addclaimfromocr').hide();
        jj('.claimlisting').show();
    });
}




function expandCollapseHide(obj,row) {
    try {
         jjheader = jj(obj);
        jjcontent = jjheader.next();
        jjheader.hide(obj);
        jjcontent.show();
        if(jjcontent.show()){
            jjcontent.parents('.swipeout').siblings().find('.opentogglelist').hide();
            jjcontent.parents('.swipeout').siblings().find('.claimlisting').show();
            
        smsSelect2(row);
         setDateForSms(row);

        }

    } catch(e) {
        console.log("Exception : " + e);
    }
}


function setDateForSms(rowId){

  var ocrExpDate = "expDate_"+rowId ;
      var currentMonth;
            var currentDate;
            var currentYear;
            jj(function() { 
               var date = new Date();
               currentMonth = date.getMonth();
               currentDate = date.getDate();
               currentYear = date.getFullYear();
                  jj('.datepicker_recurring_start').datepicker({
                     maxDate: new Date(currentYear, currentMonth, currentDate)
                  });
               document.getElementById("expDate_"+rowId).value=currentMonth+"/"+currentDate+"/"+currentYear;
            });
}




 function loadJsonExpense() {
    if (mydb) {
        mydb.transaction(function (t) {
                t.executeSql("SELECT * FROM accountHeadMst", [], getCommonAccHeadList);
                t.executeSql("SELECT * FROM currencyMst", [], getCommonCurrencyList);
                t.executeSql("SELECT * FROM expNameMst", [], getCommonExpNameList);
            });
    } else {
         alert('Database not found, your browser does not support web sql!');
    }
 }

var jsonAccHeadArr = [];
 function getCommonAccHeadList(transaction, results) {
    var i;
    for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
        var jsonFindAccHead = new Object();
        jsonFindAccHead["Label"] = row.accountHeadId;
        jsonFindAccHead["Value"] = row.accHeadName;
        jsonAccHeadArr.push(jsonFindAccHead);
    }
}


var jsonCurrencyArr = [];
function getCommonCurrencyList(transaction, results) {
    var i;
    for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
        var jsonFindCurrHead = new Object();
        jsonFindCurrHead["Label"] = row.currencyId;
        jsonFindCurrHead["Value"] = row.currencyName;
        jsonCurrencyArr.push(jsonFindCurrHead);
    }
}

var jsonExpNameArr = [];
function getCommonExpNameList(transaction, results) {
    console.log("in getCommonExpNameList");
    var i;
    for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
        var jsonFindExpNameHead = new Object();
        jsonFindExpNameHead["Label"] = row.id;
        jsonFindExpNameHead["Value"] = row.expName;
        console.log("row.expName   "+row.expName);
        jsonExpNameArr.push(jsonFindExpNameHead);
    }
}



function getSelect2Data(rowsId){

    
    var jsonArra = [];
    if(jsonExpNameArr != null && jsonExpNameArr.length > 0){
        for(var i=0; i<jsonExpNameArr.length; i++ ){
            var expArr = new Array();
            expArr = jsonExpNameArr[i];
            
            jsonArra.push({id: expArr.Label,name: expArr.Value});
        }
    }

    var expName = "expenseNameSMS_"+rowsId ;
    console.log(expName)

    j("#"+expName).select2({
        data:{ results: jsonArra, text: 'name' },
        placeholder: "Expense Name",
        allowClear: true,
        minimumResultsForSearch: -1,
       /* initSelection: function (element, callback) {
                    callback(jsonArra[0]);
        },*/
        formatResult: function(result) {
            if ( ! isJsonString(result.id))
                result.id = JSON.stringify(result.id);
                return result.name;
        }
    });
    
    
    
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
           
            var accHead = "accountHeadSMS_"+rowsId ;
            console.log(jsonArr)
            j("#"+accHead).select2({

                data:{ results: jsonArr, text: 'name' },
                minimumResultsForSearch: -1,
                allowClear: true,
               /* initSelection: function (element, callback) {
                    callback(jsonArr[0]);
        },*/
                formatResult: function(result) {
                    if ( ! isJsonString(result.id))
                        result.id = JSON.stringify(result.id);
                    return result.name;
                }
            });

    
    var jsonArr = [];
    if(jsonCurrencyArr != null && jsonCurrencyArr.length > 0){
        for(var i=0; i<jsonCurrencyArr.length; i++ ){
            var stateArr = new Array();
            stateArr = jsonCurrencyArr[i];
            
            jsonArr.push({id: stateArr.Label,name: stateArr.Value});
        }
    }

      var Currency = "currencySMS_"+rowsId ;
         console.log(Currency)

    j("#"+Currency).select2({
        data:{ results: jsonArr, text: 'name' },
        placeholder: "Currency name",
        minimumResultsForSearch: -1,
       /* initSelection: function (element, callback) {
                    callback(jsonArr[0]);
        },*/
        formatResult: function(result) {
            if ( ! isJsonString(result.id))
                result.id = JSON.stringify(result.id);
                return result.name;
        }
    });


}


function updateSmsRecord(rowId , businessId){
    var acc_head_id;
    var acc_head_val;
    var exp_name_id;
    var exp_name_val;
    var currency_id;
    var currency_val;
    if(j("#accountHeadSMS_"+rowId).select2('data') != null){
            acc_head_id = j("#accountHeadSMS_"+rowId).select2('data').id;
            acc_head_val = j("#accountHeadSMS_"+rowId).select2('data').name;
        }else{
            acc_head_id = '-1';
        }
        if(j("#expenseNameSMS_"+rowId).select2('data') != null){
            exp_name_id = j("#expenseNameSMS_"+rowId).select2('data').id;
            exp_name_val = j("#expenseNameSMS_"+rowId).select2('data').name;
        }else{
            exp_name_id = '-1';
        }   
        if(j("#currencySMS_"+rowId).select2('data') != null){
            currency_id = j("#currencySMS_"+rowId).select2('data').id;
            currency_val = j("#currencySMS_"+rowId).select2('data').name;
        }else{
            currency_id = '-1';
        }
    
        var expDate = document.getElementById('expDate_'+rowId).value;
        var fromLoc = document.getElementById('fromLoc_'+rowId).value;
        var toLoc = document.getElementById('toLoc_'+rowId).value;
        var unit = document.getElementById('unit_'+rowId).value;
        var amount = document.getElementById('amount_'+rowId).value;
        var narration = document.getElementById('narration_'+rowId).value;

    
    if(validateExpenseDetailsForSMS(acc_head_id,exp_name_id,currency_id,expDate,fromLoc,toLoc,unit,amount,narration)){
      
       console.log("acc_head_id  "+acc_head_id+" exp_name_id "+exp_name_id+" currency_id "+currency_id+
                " expDate "+expDate+"fromLoc "+fromLoc+" toLoc "+toLoc+"unit "+unit+"amount"+amount+"narration"+narration);
         if (mydb) {
                mydb.transaction(function (t) {
                  t.executeSql("UPDATE BusinessExpDetailsForSMS set accHeadId ='"+acc_head_id+"', expNameId ='"+exp_name_id+"',expDate = '"+expDate+"'  ,expFromLoc = '"+fromLoc+"' ,expToLoc = '"+toLoc+"'    ,expNarration = '"+narration+"'   , expUnit = '"+unit+"'   ,    expAmt = '"+amount+"' ,currencyId = '"+currency_id+"' where busExpId = "+businessId+";");
                });


            
               alert("Record update successfully");
              location.reload();
            } else {
        alert("db not found, your browser does not support web sql!");
    }
        
}
    
} 


function validateExpenseDetailsForSMS(acc_head_id,exp_name_id,currency_id,expDate,fromLoc,toLoc,unit,amount,narration){
    
     if(expDate == ""){
        alert('Expense Date cannot be blank');
        return false;
    }
    if(acc_head_id == "-1" || acc_head_id == ""){
        alert('Account Head is invalid');
        return false;
    }

    if(exp_name_id == "-1" || exp_name_id == ""){
        alert('Expense Name is invalid');
        return false;
    }
    if(currency_id == "-1" || currency_id == ""){
        alert('Currency Name is invalid');
        return false;
    }
    if(amount == ""){
         alert('Amount cannot be blank');
        return false;
    }
    if(isZero(amount,"Amount")==false){
        document.getElementById("expAmt").value = "";
        return false;
    }
    if(narration == ""){
        alert('Narration cannot be blank');
        return false;
    }
    return true;
}


function deleteSmsRecord(businessId){
    //alert("delete SMS ")
  if (mydb) {
    mydb.transaction(function (t) {
                t.executeSql("delete from BusinessExpDetailsForSMS WHERE busExpId=?", [businessId]);
            });
          location.reload();
        }
    }
    
function sendForApprovalForSMS(rowId,businessId){
    
     var jsonExpenseDetailsArr = []; 
    var busExpDetailsArr = [];
    var jsonFindBE = new Object();
    var expenseClaimDates=new Object; 
    var expDate =document.getElementById('expDate_'+rowId).value;
    var expenseDate  = expDate;
    var currentDate = new Date(expenseDate);
    //alert("currentDate"             +currentDate)

    var accountHeadIdToBeSent = j("#accountHeadSMS_"+rowId).select2('data').id;
    
    var acc_head_id =j("#accountHeadSMS_"+rowId).select2('data').id;

    //alert("acc_head_id"+acc_head_id)
    //jsonFindBE["accountCodeId"]=acc_head_id;
   
   // alert("acc_Code_id    "+window.localStorage.getItem("DefaultAccCode"));
    jsonFindBE["accountCodeId"]=window.localStorage.getItem("acc_Code_id_for_ocr");




         //var exp_name_id =  j("#expenseNameSMS_"+rowId).select2('data').id;
    //var exp_name_id =getExpNameMstId(x);


    var exp_name_id =  document.getElementById('expNameMstIdSMS_'+rowId).value;
    //alert("exp_name_id"+exp_name_id)
    jsonFindBE["ExpenseId"] =exp_name_id;

    var expenseName=j("#expenseNameSMS_"+rowId).select2('data').name;
    jsonFindBE["ExpenseName"] =expenseName;
    
   var fromLoc =document.getElementById('fromLoc_'+rowId).value;
   jsonFindBE["fromLocation"] =fromLoc;
    
   var toLoc= document.getElementById('toLoc_'+rowId).value;
   jsonFindBE["toLocation"] = toLoc;
     
   var narration=document.getElementById('narration_'+rowId).value;
   jsonFindBE["narration"] =narration;
    
    var expDate=document.getElementById('expDate_'+rowId).value;;
    jsonFindBE["expenseDate"] = expDate;

    jsonFindBE["isErReqd"] = 'N';
    jsonFindBE["ERLimitAmt"] = 99999999.00;
    jsonFindBE["perUnitException"] ='N';
    
    var unit=document.getElementById('unit_'+rowId).value;
    jsonFindBE["units"] = unit;

    jsonFindBE["wayPoint"] = '1';
    jsonFindBE["imageAttach"] = 'imageAttach';
    
    var amount=document.getElementById('amount_'+rowId).value;
    jsonFindBE["amount"] = amount;
    
    var currency_id=j("#currencySMS_"+rowId).select2('data').id;
    jsonFindBE["currencyId"] =currency_id; 



    if(validateExpenseDetailsForSMS(acc_head_id,exp_name_id,currency_id,expDate,fromLoc,toLoc,unit,amount,narration))
    {

    jsonExpenseDetailsArr.push(jsonFindBE);
     busExpDetailsArr.push(businessId);
    if(accountHeadIdToBeSent!="" && busExpDetailsArr.length>0){
        sendForApprovalBusinessDetailsAlternate(expenseDate,jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
        }else{
     alert('Tap and select Expenses to send for Approval with server.');
    }
    
   }
    
}

function sendForApprovalBusinessDetailsAlternate(expense_Date,jsonBEArr,busExpDetailsArr,accountHeadID){
    
     var jsonToSaveBE = new Object();
     jsonToSaveBE["employeeId"] = window.localStorage.getItem("EmployeeId");
     jsonToSaveBE["expenseDetails"] = jsonBEArr;
     jsonToSaveBE["startDate"]=expense_Date;
     jsonToSaveBE["endDate"]=expense_Date;
     jsonToSaveBE["DelayAllowCheck"]=false;
     jsonToSaveBE["BudgetingStatus"]=window.localStorage.getItem("BudgetingStatus");
     jsonToSaveBE["accountHeadId"]=accountHeadID;
     jsonToSaveBE["ProcessStatus"] = "1";
     jsonToSaveBE["title"]= window.localStorage.getItem("FirstName")+"/"+jsonToSaveBE["startDate"]+" to "+jsonToSaveBE["endDate"];

    var jsonEmplAdvanceArr = [];
    var jsonFindEA = new Object();
    // jsonFindEA["empAdvID"] = "";
    // jsonFindEA["emplAdvVoucherNo"] = "";
    // jsonFindEA["empAdvTitle"] ="";
    // jsonFindEA["Amount"] = "";
    //jsonEmplAdvanceArr.push(jsonFindEA);
     jsonToSaveBE["employeeAdvDeatils"] =jsonEmplAdvanceArr;
     jsonToSaveBE["imageAttach"] = "";

    
     var pageRefSuccess=defaultPagePath+'success.html';
     var pageRefFailure=defaultPagePath+'failure.html';
     callSendForApprovalServiceForBE(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure);
     
}

function callSendForApprovalServiceForBE(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure){

j('#loading_Cat').show();
var headerBackBtn=defaultPagePath+'backbtnPage.html';
j.ajax({
                  url: window.localStorage.getItem("urlPath")+"SynchSubmitBusinessExpense",
                  type: 'POST',
                  dataType: 'json',
                  crossDomain: true,
                  data: JSON.stringify(jsonToSaveBE),
                  success: function(data) {
                    //alert(data.Status)
                    if(data.Status=="Success"){
                       alert(data.Message);
                        location.reload();
                        if(data.hasOwnProperty('DelayStatus')){
                            setDelayMessage(data,jsonToSaveBE,busExpDetailsArr);
                             j('#loading_Cat').hide();
                        }else{
                         successMessage = data.Message;
                         for(var i=0; i<busExpDetailsArr.length; i++ ){
                            var businessExpDetailId = busExpDetailsArr[i];
                            deleteSmsRecord(businessExpDetailId);
                         }
                          location.reload();
                         requestRunning = false;
                         j('#loading_Cat').hide();
                         j('#mainHeader').load(headerBackBtn);
                         j('#mainContainer').load(pageRefSuccess);
                        // appPageHistory.push(pageRef);
                        }
                    }else if(data.Status=="Failure"){
                        alert(data.Message);
                        location.reload();
                        successMessage = data.Message;
                        requestRunning = false;
                        j('#loading_Cat').hide();
                        j('#mainHeader').load(headerBackBtn);
                        j('#mainContainer').load(pageRefFailure);
                     }else{
                         j('#loading_Cat').hide();
                        successMessage = "Oops!! Something went wrong. Please contact system administrator.";
                        j('#mainHeader').load(headerBackBtn);
                        j('#mainContainer').load(pageRefFailure);
                     }
                    },
                  error:function(data) {
                    j('#loading_Cat').hide();
                    requestRunning = false;
                    console.log(window.lang.translate('Error: Oops something is wrong, Please Contact System Administer'));
                  }
            });
}



function checkAmountForSmart(i){
         
         var amount=document.getElementById("amount_"+i).value;
        if(isOnlyNumericForSmart(amount,"Amount")==false)
        {   
            document.getElementById("amount_"+i).value="";
            return false;
        }
}

function isOnlyNumericForSmart(object,messageContent) {
    if(object.search(/^[0-9]*$/) == -1) {
        alert(messageContent+" should be numeric.");
        return false;
    }else {
        return true;
    }
}

function validateForAmount(i){

        var field = document.getElementById("amount_"+i);

        if (field.value.length > 8 ) {
            field.value = field.value.substring(0, 8);
            alert('Amount cannot be greater than 99999999.99');
            field.value='';
            return false;
        }
}




function calculatePerUnitForSmart(i){
      
         var unit=document.getElementById("unit_"+i).value;
        

        if(isOnlyNumericForSmart(unit,"Unit")==false)
        {   
            document.getElementById("unit_"+i).value="";
            return false;
        }
         var perUnitStatus = perUnitDetailsJSON.expIsUnitReq;
         //alert("per unit>>>>>>"+perUnitStatus)
         var fixedOrVariable = perUnitDetailsJSON.expFixedOrVariable;
         var ratePerUnit = perUnitDetailsJSON.expRatePerUnit;
         var limitAmt = perUnitDetailsJSON.expFixedLimitAmt;
         var expName = perUnitDetailsJSON.expenseName;
         var result='';
         var unitValue=document.getElementById("unit_"+i).value;
         if(unitValue!=null && unitValue!='' && ratePerUnit!='' && ratePerUnit!=null){
         result=parseFloat(unitValue)*parseFloat(ratePerUnit);
         }
         document.getElementById("amount_"+i).value=result;

}


function checkPerUnitExceptionStatusForBEAtLineLevelForSmart(i){
exceptionStatus="N";
        exceptionMessage='';
        //String acExpNameReqStatus = findByIdAccountCodeExpenseNameRequiredStatus(accountCodeId);

             //CASE 1 : IF THE EXP NAME REQUIRED STATUS IS 'Y' FURTHER COMPUTE TO GET THE EXCEPTION STATUS
             //CASE 2 : IF 'N' THEN SET THE EXCEPTION STATUS AS 'N' AS THIS AC CODE IS NA FOR BE ENTITLEMENTS
             //alert("json>>>>>>>"+perUnitDetailsJSON)
             var perUnitStatus = perUnitDetailsJSON.isUnitReqd;
            // alert("per unit>>>>>>>"+perUnitStatus)
             var fixedOrVariable = perUnitDetailsJSON.expFixedOrVariable;
             var ratePerUnit = perUnitDetailsJSON.expRatePerUnit;
             var limitAmt = perUnitDetailsJSON.expFixedLimitAmt;
            // alert("per amount>>>>>>>"+limitAmt)
             var expName = perUnitDetailsJSON.expenseName;
             var expActiveInactive = perUnitDetailsJSON.expPerUnitActiveInative;
             var amount=document.getElementById("amount_"+i).value;
             //alert("amount>>>"+amount)
             var unitValue=document.getElementById("unit_"+i).value;
            
                if (expActiveInactive == '1'){
                        exceptionStatus = "N";
                            j("#errorMsgArea_"+i).children('span').text("");
                    }if (perUnitStatus != "" && limitAmt != "" &&  amount != ""
                             && perUnitStatus =='N' && expActiveInactive !='1'){
                        if (parseFloat(limitAmt) < parseFloat(amount)){
                             exceptionStatus = "Y";
                             exceptionMessage = "(Exceeding per unit amount defined: "
                                 + limitAmt + " for expense name " + expName+")";
                                 j("#errorMsgArea_"+i).children('span').text(exceptionMessage);
                         }else{
                             exceptionStatus = "N";
                             j("#errorMsgArea_"+i).children('span').text("");
                         }
                    }else if (perUnitStatus != "" && ratePerUnit != "" && amount != ""
                             && fixedOrVariable != "" && unitValue != "" && perUnitStatus =='Y'
                             && fixedOrVariable =='V' && expActiveInactive !='1'){

                         if (parseFloat(ratePerUnit) < amount/unitValue){
                             exceptionStatus = "Y";
                             exceptionMessage = "(Exceeding per unit amount defined: "
                                 + ratePerUnit + " for expense name " + expName+")";
                                 j("#errorMsgArea_"+i).children('span').text(exceptionMessage);
                         }else{
                             exceptionStatus = "N";
                              j("#errorMsgArea_"+i).children('span').text("");
                         }
                    }
                
                
    }



//Dinesh End

// SMART APP OCR Dynamic Page    /// Neha

var record
function checkforDataOCR(status){



    mydb.transaction(function(t) {
        t.executeSql('SELECT * FROM ocrExpenseDetails;', [],
                function(transaction, result) {
            if (result != null && result.rows != null) {
                j('#ocrClaimsbox').empty();
                for ( record = 0; record< result.rows.length; record++) {   
                    var row = result.rows.item(record); 

                    var data ="<li class='swipeout'> <div class='swipeout-content'> "
                        + " <div class='item-content claimlisting' onclick='expandCollapseForOcr(this,"+record+");'> "
                        + " <div class='item-inner comments-list'> "
                        + " <div class='image'> "
                        + " <span class='ava'> "
                        + " <img src='images/freecharge-200x200_2163.jpg' alt=''> "
                        + " </span> "
                        + " </div> "
                        + " <div class='text'> "
                        + " <div class='info'> "
                        + " <span class='data'>Expense date : "+row.ocrExpDate+"| Amount "+row.ocrAmount+"</span> "
                        + " </div> "
                        + " <div class='comment'> "
                        +    row.ocrNarration
                        + " </div> "
                        + " </div> "
                        + " <div class='closeexpbox'><i class='fa fa-angle-double-down'></i></div> "
                        + " </div> "
                        + " </div> "
                        + " <div class='opentogglelist'> "
                        + " <div class='item-inner comments-list'> "
                        + " <table> "
                        + " <tr> "
                        + " <td valign='top'> "
                        + " <div class='image'> "
                        + " <span class='ava'> "
                        + " <img src='images/dummy-image.png' alt=''> "
                        + " </span> "
                        + " </div> "
                        + " <div class='verticalicons'> "
                        + " <ul> "
                        + " <li> "
                        + " <a href='' class='vericonssml'><i class='fa fa-camera' aria-hidden='true'></i></a> "
                        + " </li> "
                        + " <li> "
                        + " <a href='' class='vericonssml'><i class='fa fa-picture-o' aria-hidden='true'></i></a> "
                        + " </li> "
                        + " <li> "
                        + " <a href='' class='vericonssml'><i class='fa fa-map-marker' aria-hidden='true'></i></a> "
                        + " </li> "
                        + " </ul> "
                        + " </div> "
                        + " </td> "
                        + " <td valign='top'> "
                        + " <table class='tablefixed'> "
                        + " <tr> "
                        + " <td width='20%'>Account head: </td> "
                        + " <td colspan='3' width='80%'> "
                        + " <input placeholder='Account Head' id = 'accountHeadOcr_"+record +"' value = "+row.accHeadId+" style='width: 100%;'> "
                        + " </input> "
                        + " </td> "
                        + " </tr> "
                        + " <tr> "
                        + " <td>Expense name: </td> "
                        + " <td> "
                        + " <input id = 'expenseNameOcr_"+record +"' value = "+row.expNameId+" style=''> "
                        + " </input> "
                        + " </td> "
                        + " <td>Expense date: </td> "
                        + " <td> "
                        + " <input type='text'  placeholder = 'Expense Date' class='datepicker_recurring_start'  id = ocrExpDate_"+record +" value = "+row.ocrExpDate+" style='width: 50%;'> "
                        + " </input> "
                        + "<input  id='ratePerUnit_"+record+"'  value="+row.expRatePerUnit+" style='display:none;'>"
                        + "<input  id='expNameMstIdOCR_"+record+"'   style='display:none;'>"
                        + " </td> "
                        + " </tr> "
                        + " <tr> "
                        + " <td>From location: </td> "
                        + " <td> "
                        + " <input placeholder = 'From Location' id = ocrFromLoc_"+record +" value = "+row.ocrFromLoc+"> "
                        + " </input> "
                        + " </td> "
                        + " <td>To location: </td> "
                        + " <td> "
                        + " <input placeholder = 'To Location' id = ocrToLoc_"+record +" value = "+row.ocrToLoc+"> "
                        + " </input> "
                        + " </td> "
                        + " </tr> "
                        + " <tr> "
                        + " <td> "
                        + " <span class='text-left' style='display: block;'>Units</span> "
                        + " <input type='tel' placeholder = 'Units' id = ocrUnit_"+record +" onkeyup='calculatePerUnitForOCR("+record+");' value = "+row.ocrUnit+"> "
                        + " </input> "
                        + " </td> "
                        + " <td colspan='2'> "
                        + " <span class='text-left' style='display: block;'>Amount : </span> "
                        + " <input type='tel' placeholder = 'Amount' id = ocrAmount_"+record +" onkeyup='checkAmountForOCRDynamic("+record+");  validateForAmountOCR("+record+");  checkPerUnitExceptionStatusForBEAtLineLevelForOCR("+record+");' value = "+row.ocrAmount+"> "
                        + " </input> "
                        + " </td> "
                        + " <td> "
                        + " <span class='' style='display: block;'>Currency</span> "
                        + " <input id = 'ocrCurrency_"+record +"' value = "+row.currencyId+"> "
                        + " </input> "
                        + " </td> "
                        + " </tr> "
                        + "  <tr>"
                        + " <td colspan='4'> "
                        + "  <p id=errorMsgArea_"+record+"><span id=errorSpan_"+record+"></span></p>"
                        + "  </td>"
                        + " </tr>"
                        + " <tr> "
                        + " <td colspan='4'> "
                        + " <textarea rows='2' placeholder='Narration' id = ocrNarration_"+record +">"+row.ocrNarration
                        + " </textarea> "
                        + " </td> "
                        + " </tr> "
                        + " </table> "
                        + " </td> "
                        + " </tr> "
                        + " <tr> "
                        + " <td colspan='2'> "
                        + " <div class='fourlinkbtm'> "
                        + " <table> "
                        + " <tr> "
                        + " <td><a href='' onclick = updateOcrExpenseDetails("+record+","+row.ocrExpId+");><i class='fa fa-check' aria-hidden='true'></i> Save</a></td> "
                        + " <td><a href='' onclick= smartOcrSendForApprover("+record+","+row.ocrExpId+",'D');><i class='fa fa-send' aria-hidden='true'></i> Send Approval</a></td> "
                        + " <td><a href=''><i class='fa fa-heart' aria-hidden='true'></i> Add Wishlist</a></td> "
                        + " <td><a href='' onclick = deleteOcrRecord("+row.ocrExpId+");><i class='fa fa-remove' aria-hidden='true'></i> Remove</a></td> "
                        + " <td><a href='' class='closeexpmodal'><i class='fa fa-angle-double-up' aria-hidden='true' onclick='closeToggleList();'></i> Close</a></td> "
                        + " </tr> "
                        + " </table> "
                        + " </div> "
                        + " </td> "
                        + " </tr> "
                        + " </table> "
                        + " </div> "
                        + " </div> "
                        + " </div> "
                        + " <div class='swipeout-actions-right'> "
                        + " <a href='#' class='action-green js-up'>Send for Approval</a> "
                        + " <a href='#' class='action-red js-down'>Add to wishlist</a> "
                        + " <a href='#' class='action-blue js-down'>Delete</a> "
                        + " </div> "
                        + " </li> ";


                if(status == "1"){
                        //alert("record : "+record+" , row.ocrExpId : "+row.ocrExpId);
                         smartOcrSendForApprover(record,row.ocrExpId,'S');
                }else{
                     j('#ocrClaimsbox').append(data);
                }

                }
            }
            // ocrSelect2();

        });
       
    });

}


// SMART APP OCR Update 
function updateOcrExpenseDetails(i,ocrExpId){
       
       //alert("updateOcrExpenseDetails : " +ocrExpId);
       
        var acc_head_id_ocr;
        var acc_head_val_ocr;

        var exp_name_id_ocr;
        var exp_name_val_ocr;

        var currency_id_ocr;
        var currency_val_ocr;

       
        if(j("#accountHeadOcr_"+i).select2('data') != null){
            acc_head_id_ocr = j("#accountHeadOcr_"+i).select2('data').id;
            acc_head_val_ocr = j("#accountHeadOcr_"+i).select2('data').name;
        }else{
            acc_head_id_ocr = '-1';
        }
     
        if(j("#expenseNameOcr_"+i).select2('data') != null){
            exp_name_id_ocr = j("#expenseNameOcr_"+i).select2('data').id;
            exp_name_val_ocr = j("#expenseNameOcr_"+i).select2('data').name;
        }else{
            exp_name_id_ocr = '-1';
        }
       
           if(j("#ocrCurrency_"+i).select2('data') != null){
            currency_id_ocr = j("#ocrCurrency_"+i).select2('data').id;
            currency_val_ocr = j("#ocrCurrency_"+i).select2('data').name;
        }else{
            currency_id_ocr = '-1';
        }
    
        var ocrExpDate = document.getElementById('ocrExpDate_'+i).value;


        var ocrFromLoc = document.getElementById('ocrFromLoc_'+i).value;
       
        var ocrToLoc = document.getElementById('ocrToLoc_'+i).value;
    
        var ocrNarration =  document.getElementById('ocrNarration_'+i).value;    

       
        
        var ocrUnit = document.getElementById('ocrUnit_'+i).value;
      
        var ocrAmount =  document.getElementById('ocrAmount_'+i).value;
       

        //var isEntitlementExceeded = "";
  
        //var wayPointunitValue = "";

        if(validateExpenseDetailsForOCR(acc_head_id_ocr,exp_name_id_ocr,currency_id_ocr,ocrExpDate,ocrFromLoc,ocrToLoc,ocrUnit,ocrAmount,ocrNarration))
        {  
     
     if (mydb) {
                mydb.transaction(function (t) {
                    console.log("accHeadId ="+acc_head_id_ocr)
                    console.log("expNameId ="+exp_name_id_ocr)
                    console.log("ocrExpDate ="+ocrExpDate)
                    console.log("ocrFromLoc ="+ocrFromLoc)
                    console.log("ocrToLoc ="+ocrToLoc)
                    console.log("ocrNarration ="+ocrNarration)
                    console.log("ocrUnit ="+ocrUnit)
                    console.log("ocrAmount ="+ocrAmount)
                    console.log("currencyId ="+currency_id_ocr)
                    console.log("ocrExpId ="+ocrExpId)

                  
         t.executeSql("UPDATE ocrExpenseDetails set accHeadId ='"+acc_head_id_ocr+"', expNameId ='"+exp_name_id_ocr+"',ocrExpDate = '"+ocrExpDate+"'   ,ocrFromLoc = '"+ocrFromLoc+"'   ,ocrToLoc = '"+ocrToLoc+"'    ,ocrUnit = '"+ocrUnit+"'   , ocrAmount = '"+ocrAmount+"'   ,    ocrNarration = '"+ocrNarration+"' ,currencyId = '"+currency_id_ocr+"' where ocrExpId = "+ocrExpId+";");
                });
            
                    location.reload();

               alert("Record update successfully");
              
              
            } else {
        alert("db not found, your browser does not support web sql!");
        }
    }
}


// SMART APP OCR Delete 

function deleteOcrRecord(ocrExpId){
    //alert("in delete ocr")
  if (mydb) {
    mydb.transaction(function (t) {
                t.executeSql("delete from ocrExpenseDetails WHERE ocrExpId=?", [ocrExpId]);
            });
          location.reload();
        }
    }



// Smart App Save OCR Image Data

function addToOCRExpense(status){
    
    if (mydb) {
        var accHeadId = document.getElementById('accountHead').value;      
        var expNameId = document.getElementById('expenseName').value;             
        var ocrExpDate = document.getElementById('ocrExpDate').value;     
        var ocrFromLoc = document.getElementById('ocrFromLoc').value;     
        var ocrToLoc = document.getElementById('ocrToLoc').value;   
        var ocrnarration =  document.getElementById('ocrnarration').value;    
        
        
        var ocrUnit = document.getElementById('ocrUnit').value;
        
        var ocrAmount =  document.getElementById('ocrAmount').value;
        
        var currencyId = document.getElementById('currency').value; 

    //globalExpName = document.getElementById('expNameMstId').value; 
    //alert("!!!!!!!!!!"+globalExpName)
        var isEntitlementExceeded = "";
        var busExpAttachment = "";
        var wayPointunitValue = "";
      
            if(validateExpenseDetailsForOCR(accHeadId,expNameId,currencyId,ocrExpDate,ocrFromLoc,ocrToLoc,ocrUnit,ocrAmount,ocrnarration))
                {
            try{
                 mydb.transaction(function (t) {
                    t.executeSql("INSERT INTO ocrExpenseDetails (accHeadId,expNameId,ocrExpDate,ocrFromLoc,ocrToLoc,ocrnarration,ocrUnit,ocrAmount,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", 
                        [accHeadId,expNameId,ocrExpDate,ocrFromLoc,ocrToLoc,ocrnarration,ocrUnit,ocrAmount,currencyId,isEntitlementExceeded,'null','null']);
                });
        }catch(e){
            alert("exception : "+e);
        }
        

                  j("#ocrClaims").hide("slow");
        
                 if(status == "0"){
                    alert("Expense added Successfully.");
                    checkforDataOCR(0);
                 }else if(status == "1"){
                    checkforDataOCR(1);
                    alert("Expense has Send For Approval Successfully.");
                    

                 }

    else {
        alert("db not found, your browser does not support web sql!");
    }
    }
}
}

 function closeToggleList(){
        jj('.closeexpmodal').on('click', function (e) { 
        jj('.opentogglelist').hide();
        jj('.claimlisting').show();
    });
}

function ocrSelect2ExpenseList(accountHeadId,rowNo){
    //alert("ocrSelect2ExpenseList  ")
     mydb.transaction(function (t) {
        t.executeSql("SELECT * FROM expNameMst where accHeadId="+accountHeadId,[], function getExpenseNameListOcr (transaction, results) {
           

     var i;
    var jsonExpArr = [];

    for (i = 0; i < results.rows.length; i++) {
        var row = results.rows.item(i);
        var jsonFindCurrHead = new Object();
        jsonFindCurrHead["Value"] =  row.id;

        jsonFindCurrHead["Label"] = row.expName;

        
        jsonExpArr.push(jsonFindCurrHead);
    }
   var jsonArr = [];
    if(jsonExpArr != null && jsonExpArr.length > 0){
        for(var i=0; i<jsonExpArr.length; i++ ){
            var expArr = new Array();
            expArr = jsonExpArr[i];
            
            jsonArr.push({id: expArr.Value,name: expArr.Label});
        }
    }

      var expNameOcr = "expenseNameOcr_"+ocrRow1    ;
      //   console.log(expNameOcr)

    j("#"+expNameOcr).select2({
        data:{ results: jsonArr, text: 'name' },
        placeholder: "Expense Name",
        minimumResultsForSearch: -1,
        
        formatResult: function(result) {
            if ( ! isJsonString(result.id))
                result.id = JSON.stringify(result.id);
                return result.name;
        }
    });

           
        });

});
}

function ocrSelect2(ocrRow1){
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
             accHeadOcr = "accountHeadOcr_"+ocrRow1    ;
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
      getExpenseNamesBasedOnAccountHeadForOCR(ocrRow1);
  });
getExpenseNamesBasedOnAccountHeadForOCR(ocrRow1);

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

      var ocrCurrency = "ocrCurrency_"+ocrRow1    ;
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



 function closeAll(){
        jj('.closeexpmodal').on('click', function (e) { 
        jj('.opentogglelist, .addclaim, .addclaimfromocr').hide();
        jj('.claimlisting').show();
    });
}


function expandCollapseForOcr(obj,ocrRow) {
    try {
         jjheader = jj(obj);
        jjcontent = jjheader.next();
        jjheader.hide(obj);
        jjcontent.show();
        if(jjcontent.show()){
            jjcontent.parents('.swipeout').siblings().find('.opentogglelist').hide();
            jjcontent.parents('.swipeout').siblings().find('.claimlisting').show();
            ocrSelect2(ocrRow);
             datePickerForOcr(ocrRow);

        }

    } catch(e) {
        console.log("Exception : " + e);
    }
} 

function datePickerForOcr(ocrRow1){
  var ocrExpDate = "ocrExpDate_"+ocrRow1 ;
      var currentMonth;
            var currentDate;
            var currentYear;
            jj(function() { 
               var date = new Date();
               currentMonth = date.getMonth();
               currentDate = date.getDate();
               currentYear = date.getFullYear();
                  jj('.datepicker_recurring_start').datepicker({
                     maxDate: new Date(currentYear, currentMonth, currentDate)
                  });
               document.getElementById("ocrExpDate_"+ocrRow1).value=currentMonth+"/"+currentDate+"/"+currentYear;
            });
}


// Send For Approval For OCR  

function smartOcrSendForApprover(rowId,businessId,type){

   
    //alert("rowId : "+rowId);
    //alert("businessId : "+businessId);
    
    var jsonExpenseDetailsArr = []; 
    var busExpDetailsArr = [];
    var jsonFindBE = new Object();
    var expenseClaimDates=new Object; 
    var expDate = "";
    var currentDate = "";
    var accountHeadIdToBeSent = ""
    var acc_head_id = "";
    var exp_name_id = "";
    var expenseName = "";
    var fromLoc = "";
    var toLoc = "";
    var narration = "";
    var unit = "";
    var amount = "";
    var currency_id = "";
    


setTimeout(function(){ 
   if(type == "S"){
        expDate =document.getElementById('ocrExpDate').value;
        accountHeadIdToBeSent = j("#accountHead").select2('data').id;
        acc_head_id =j("#accountHead").select2('data').id; 
        exp_name_id =document.getElementById('expNameMstId').value;
        expenseName=j("#expenseName").select2('data').name;
        fromLoc =document.getElementById('ocrFromLoc').value;
        toLoc= document.getElementById('ocrToLoc').value;
        narration=document.getElementById('ocrnarration').value;
        unit=document.getElementById('ocrUnit').value;
        amount=document.getElementById('ocrAmount').value;
        currency_id=j("#currency").select2('data').id;

    }else{
       
        expDate =document.getElementById('ocrExpDate_'+rowId).value;
        accountHeadIdToBeSent = j("#accountHeadOcr_"+rowId).select2('data').id;
        acc_head_id =j("#accountHeadOcr_"+rowId).select2('data').id; 
        exp_name_id =  document.getElementById('expNameMstIdOCR_'+rowId).value;
        //alert("!!!!!!!!"+exp_name_id)
        //exp_name_id =j("#expenseNameOcr_"+rowId).select2('data').id;
        expenseName=j("#expenseNameOcr_"+rowId).select2('data').name;
        //alert("!!!!!!!!"+expenseName)
        fromLoc =document.getElementById('ocrFromLoc_'+rowId).value;
        toLoc= document.getElementById('ocrToLoc_'+rowId).value;
        narration=document.getElementById('ocrNarration_'+rowId).value;
        unit=document.getElementById('ocrUnit_'+rowId).value;
        amount=document.getElementById('ocrAmount_'+rowId).value;
        currency_id=j("#ocrCurrency_"+rowId).select2('data').id;
    
    }
     currentDate = new Date(expenseDate);
     var expenseDate  = expDate;

    jsonFindBE["ExpenseId"] =exp_name_id;
    jsonFindBE["ExpenseName"] =expenseName;
    jsonFindBE["fromLocation"] =fromLoc;
    jsonFindBE["toLocation"] = toLoc;
    jsonFindBE["narration"] =narration;
    jsonFindBE["expenseDate"] = expDate;
    jsonFindBE["accountCodeId"]=acc_head_id;
    jsonFindBE["currencyId"] =currency_id; 
    jsonFindBE["amount"] = amount;
    jsonFindBE["units"] = unit;

    jsonFindBE["wayPoint"] = '1';
    jsonFindBE["isErReqd"] = 'N';
    jsonFindBE["ERLimitAmt"] = 99999999.00;
    jsonFindBE["perUnitException"] ='N';
     var jsonEmplAdvanceArr = null;
     var jsonFindEA = new Object();
    // jsonFindEA["empAdvID"] = "";
    // jsonFindEA["emplAdvVoucherNo"] = "";
    // jsonFindEA["empAdvTitle"] ="";
    // jsonFindEA["Amount"] = "";
    // jsonFindEA["recoverFromEmp"] = "";
    
    //jsonEmplAdvanceArr.push(jsonFindEA);
     jsonFindBE["employeeAdvDeatils"] =jsonEmplAdvanceArr;
     jsonFindBE["imageAttach"] = "";

    //alert("acc_Code_id    "+window.localStorage.getItem("DefaultAccCode"));
    jsonFindBE["accountCodeId"]= window.localStorage.getItem("acc_Code_id_for_ocr");




    if(validateExpenseDetailsForOCR(acc_head_id,exp_name_id,currency_id,expDate,fromLoc,toLoc,unit,amount,narration))
    {

    jsonExpenseDetailsArr.push(jsonFindBE);
     busExpDetailsArr.push(businessId);
    if(accountHeadIdToBeSent!="" && busExpDetailsArr.length>0){
        sendForApprovalBusinessDetailsOcr(expenseDate,jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
        }else{
     alert('Tap and select Expenses to send for Approval with server.');
    }
    
   }
    }, 1000);

}

function validateExpenseDetailsForOCR(acc_head_id,exp_name_id,currency_id,expDate,fromLoc,toLoc,unit,amount,narration){
      
  

    if(acc_head_id == "-1" || acc_head_id == ""){
        alert('Account Head is invalid');
        return false;
    }

    if(exp_name_id == "-1" || exp_name_id == ""){
        alert('Expense Name is invalid');
        return false;
    }
    if(currency_id == "-1" || currency_id == ""){
        alert('Currency Name is invalid');
        return false;
    }
      if(expDate == ""){
        alert('Expense Date cannot be blank');
        return false;
    }

    if(amount == ""){
         alert('Amount cannot be blank');
        return false;
    }
    if(isZero(amount,"Amount")==false){
        document.getElementById("ocrAmount").value = "";
        return false;
    }
    // if(narration == ""){
    //     alert('Narration cannot be blank');
    //     return false;
    // }
    return true;
}


function sendForApprovalBusinessDetailsOcr(expense_Date,jsonBEArr,busExpDetailsArr,accountHeadID){
    
     var jsonToSaveBE = new Object();
     jsonToSaveBE["employeeId"] = window.localStorage.getItem("EmployeeId");
     jsonToSaveBE["expenseDetails"] = jsonBEArr;
     jsonToSaveBE["startDate"]=expense_Date;
     jsonToSaveBE["endDate"]=expense_Date;
     jsonToSaveBE["DelayAllowCheck"]=false;
     jsonToSaveBE["BudgetingStatus"]=window.localStorage.getItem("BudgetingStatus");
     jsonToSaveBE["accountHeadId"]=accountHeadID;
     jsonToSaveBE["ProcessStatus"] = "1";
     jsonToSaveBE["title"]= window.localStorage.getItem("FirstName")+"/"+jsonToSaveBE["startDate"]+" to "+jsonToSaveBE["endDate"];

    var jsonEmplAdvanceArr = [];
    var jsonFindEA = new Object();

    // jsonFindEA["empAdvID"] = "";
    // jsonFindEA["emplAdvVoucherNo"] = "";
    // jsonFindEA["empAdvTitle"] ="";
    // jsonFindEA["Amount"] = "";
    jsonEmplAdvanceArr.push(jsonFindEA);
     jsonToSaveBE["employeeAdvDeatils"] =jsonEmplAdvanceArr;
   
     jsonToSaveBE["imageAttach"] = "";
     console.log("jsonToSaveBE  "+JSON.stringify(jsonToSaveBE))
     var pageRefSuccess=defaultPagePath+'success.html';
     var pageRefFailure=defaultPagePath+'failure.html';
     callSendForApprovalServiceForOcrBE(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure);
     
}

function callSendForApprovalServiceForOcrBE(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure){

console.log("callSendForApprovalServiceForOcrBE   :"+JSON.stringify(jsonToSaveBE))
console.log("callSendForApprovalServiceForOcrBE   :"+JSON.stringify(busExpDetailsArr))
j('#loading_Cat').show();
var headerBackBtn=defaultPagePath+'backbtnPage.html';
j.ajax({
                  url: window.localStorage.getItem("urlPath")+"SynchSubmitBusinessExpense",
                  type: 'POST',
                  dataType: 'json',
                  crossDomain: true,
                  data: JSON.stringify(jsonToSaveBE),
                  success: function(data) {
                    //alert(data.Status)
                    if(data.Status=="Success"){
                       alert(data.Message);
                       
                        if(data.hasOwnProperty('DelayStatus')){
                            setDelayMessage(data,jsonToSaveBE,busExpDetailsArr);
                             j('#loading_Cat').hide();
                        }else{
                         successMessage = data.Message;
                         for(var i=0; i<busExpDetailsArr.length; i++ ){
                            var businessExpDetailId = busExpDetailsArr[i];
                            //alert("businessExpDetailId  : "+businessExpDetailId);
                            deleteOcrRecord(businessExpDetailId);
                         }
                         requestRunning = false;
                         location.reload();
                         j('#loading_Cat').hide();
                         j('#mainHeader').load(headerBackBtn);
                         j('#mainContainer').load(pageRefSuccess);
                        // appPageHistory.push(pageRef);
                        }
                    }else if(data.Status=="Failure"){
                        alert(data.Message);
                         location.reload();
                        successMessage = data.Message;
                        requestRunning = false;
                        j('#loading_Cat').hide();
                        j('#mainHeader').load(headerBackBtn);
                        j('#mainContainer').load(pageRefFailure);
                     }else{
                         j('#loading_Cat').hide();
                        successMessage = "Oops!! Something went wrong. Please contact system administrator.";
                        j('#mainHeader').load(headerBackBtn);
                        j('#mainContainer').load(pageRefFailure);
                     }
                    },
                  error:function(data) {
                    j('#loading_Cat').hide();
                    requestRunning = false;
                    console.log(window.lang.translate('Error: Oops something is wrong, Please Contact System Administer'));
                  }
            });
}



function calculatePerUnitForOCR(i){
      
       var unit=document.getElementById("ocrUnit_"+i).value;
        

        if(isOnlyNumericForSmart(unit,"Unit")==false)
        {   
            document.getElementById("ocrUnit_"+i).value="";
            return false;
        }
         var perUnitStatus = perUnitDetailsJSON.expIsUnitReq;
         //alert("per unit>>>>>>"+perUnitStatus)
         var fixedOrVariable = perUnitDetailsJSON.expFixedOrVariable;
         var ratePerUnit = perUnitDetailsJSON.expRatePerUnit;
         var limitAmt = perUnitDetailsJSON.expFixedLimitAmt;
         var expName = perUnitDetailsJSON.expenseName;
         var result='';
         var unitValue=document.getElementById("ocrUnit_"+i).value;
         if(unitValue!=null && unitValue!='' && ratePerUnit!='' && ratePerUnit!=null){
         result=parseFloat(unitValue)*parseFloat(ratePerUnit);
         }
         document.getElementById("ocrAmount_"+i).value=result;

}


function checkPerUnitExceptionStatusForBEAtLineLevelForOCR(i){
exceptionStatus="N";
        exceptionMessage='';
        //String acExpNameReqStatus = findByIdAccountCodeExpenseNameRequiredStatus(accountCodeId);

             //CASE 1 : IF THE EXP NAME REQUIRED STATUS IS 'Y' FURTHER COMPUTE TO GET THE EXCEPTION STATUS
             //CASE 2 : IF 'N' THEN SET THE EXCEPTION STATUS AS 'N' AS THIS AC CODE IS NA FOR BE ENTITLEMENTS
             //alert("json>>>>>>>"+perUnitDetailsJSON)
             var perUnitStatus = perUnitDetailsJSON.isUnitReqd;
             //alert("per unit>>>>>>>"+perUnitStatus)
             var fixedOrVariable = perUnitDetailsJSON.expFixedOrVariable;
             var ratePerUnit = perUnitDetailsJSON.expRatePerUnit;
             var limitAmt = perUnitDetailsJSON.expFixedLimitAmt;
             //alert("per amount>>>>>>>"+limitAmt)
             var expName = perUnitDetailsJSON.expenseName;
             var expActiveInactive = perUnitDetailsJSON.expPerUnitActiveInative;
             var amount=document.getElementById("ocrAmount_"+i).value;
             //alert("amount>>>"+amount)
             var unitValue=document.getElementById("ocrUnit_"+i).value;
            
                if (expActiveInactive == '1'){
                        exceptionStatus = "N";
                            j("#errorMsgArea_"+i).children('span').text("");
                    }if (perUnitStatus != "" && limitAmt != "" &&  amount != ""
                             && perUnitStatus =='N' && expActiveInactive !='1'){
                        if (parseFloat(limitAmt) < parseFloat(amount)){
                             exceptionStatus = "Y";
                             exceptionMessage = "(Exceeding per unit amount defined: "
                                 + limitAmt + " for expense name " + expName+")";
                                 j("#errorMsgArea_"+i).children('span').text(exceptionMessage);
                         }else{
                             exceptionStatus = "N";
                             j("#errorMsgArea_"+i).children('span').text("");
                         }
                    }else if (perUnitStatus != "" && ratePerUnit != "" && amount != ""
                             && fixedOrVariable != "" && unitValue != "" && perUnitStatus =='Y'
                             && fixedOrVariable =='V' && expActiveInactive !='1'){

                         if (parseFloat(ratePerUnit) < amount/unitValue){
                             exceptionStatus = "Y";
                             exceptionMessage = "(Exceeding per unit amount defined: "
                                 + ratePerUnit + " for expense name " + expName+")";
                                 j("#errorMsgArea_"+i).children('span').text(exceptionMessage);
                         }else{
                             exceptionStatus = "N";
                              j("#errorMsgArea_"+i).children('span').text("");
                         }
                    }
                
                
    }

function validateForAmountOCR(i){

        var field = document.getElementById("ocrAmount_"+i);

        if (field.value.length > 8 ) {
            field.value = field.value.substring(0, 8);
            alert('Amount cannot be greater than 99999999.99');
            field.value='';
            return false;
        }
}




 function getExpenseNamesBasedOnAccountHeadForOCR(i){

   var accountHeadID = "";
    try{
    accountHeadIDOCR = j("#accountHeadOcr_"+i).select2('data').id;
     }catch(e){
        console.log(e);
     }
      console.log("getExpenseNamesfromDBForOCR");
      getExpenseNamesfromDBForOCR(accountHeadIDOCR,i);
 }

 function getExpenseNamesfromDBForOCR(accountHeadId,rowNo){
    var jsonArra = [];
    j('#errorMsgArea').children('span').text("");
if(accountHeadId == ""){
                var expName = "expenseNameOcr_"+rowNo ;


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
      getPerUnitBasedOnExpenseForOCR(rowNo);
  });

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

            var expName = "expenseNameOcr_"+rowNo ;


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
      getPerUnitBasedOnExpenseForOCR(rowNo);
  });


    var expName ="";
    try{
    expNameID = j("#"+expName).select2('data').id;
    //alert("!!!!!!!!"+expNameID.value)
   }catch(e){
        console.log(e);
   }
   console.log("getExpenseNamesfromDBForOCR");
      getPerUnitBasedOnExpenseForOCR(rowNo);
            });
        });
    } else {
         alert(window.lang.translate('Database not found, your browser does not support web sql!'));
    }   
}



 function getPerUnitBasedOnExpenseForOCR(i){
    //alert(" in second method");

    var expenseNameID = j("#expenseNameOcr_"+i ).select2('data').id;
    //alert("expenseNameID>>>>>>>>>>>>>>>>>"+expenseNameID)
       getPerUnitFromDBForOCR(expenseNameID,i);
 }


function getPerUnitFromDBForOCR(expenseNameID,i){

    //alert("in third method")
    j('#errorMsgArea').children('span').text("");
    if(mydb) {
        //Get all the employeeDetails from the database with a select statement, set outputEmployeeDetails as the callback function for the executeSql command
        mydb.transaction(function (t) {
            t.executeSql("SELECT * FROM expNameMst where id="+expenseNameID, [], function setPerUnitDetailsForOCR(transaction, results)
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
            document.getElementById("expNameMstIdOCR_"+i).value= row.expNameMstId;
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
                 document.getElementById("ocrFromLoc_"+i).value="";
                 document.getElementById("ocrToLoc_"+i).value="";
                document.getElementById("ocrFromLoc_"+i).disabled =true;
                document.getElementById("ocrToLoc_"+i).disabled =true;
                document.getElementById("ocrFromLoc_"+i).style.backgroundColor='#d1d1d1'; 
                document.getElementById("ocrToLoc_"+i).style.backgroundColor='#d1d1d1';
                document.getElementById("ocrNarration_"+i).disabled =false;
                document.getElementById("ocrNarration_"+i).style.backgroundColor='#FFFFFF';
                //document.getElementById("mapImage").style.display= "none";
            }else{
                //alert("in else")
                document.getElementById("ocrFromLoc_"+i).disabled =false;
                document.getElementById("ocrToLoc_"+i).disabled =false;
                // document.getElementById("ocrFromLoc_"+i).value="";
                // document.getElementById("ocrToLoc_"+i).value="";
                //document.getElementById("narration_"+i).value="";
                document.getElementById("ocrFromLoc_"+i).style.backgroundColor='#FFFFFF'; 
                document.getElementById("ocrToLoc_"+i).style.backgroundColor='#FFFFFF'; 
                //alert(window.localStorage.getItem("MobileMapRole"))
                if(window.localStorage.getItem("MobileMapRole") == 'true') 
                {
                    attachGoogleSearchBox(document.getElementById("ocrFromLoc_"+i));
                    attachGoogleSearchBox(document.getElementById("ocrToLoc_"+i));
                    //document.getElementById("mapImage").style.display="";
                     document.getElementById("ocrNarration_"+i).value =" ";
                    document.getElementById("ocrNarration_"+i).disabled =true;
                    document.getElementById("ocrNarration_"+i).style.backgroundColor='#d1d1d1';
                } 
            }
            if(perUnitDetailsJSON.isUnitReqd=='Y'){
                //document.getElementById("ocrAmount_"+i).value="1";
                if(perUnitDetailsJSON.expFixedOrVariable=='V'){
                    flagForUnitEnable = true;
                    if(perUnitDetailsJSON.expenseIsfromAndToReqd=='Y' && window.localStorage.getItem("MobileMapRole") == 'true'){
                        document.getElementById("ocrUnit_"+i).value = 1;
                        document.getElementById("ocrUnit_"+i).disabled =true;
                        document.getElementById("ocrUnit_"+i).style.backgroundColor='#d1d1d1';
                    }
                    else{
                        document.getElementById("ocrUnit_"+i).disabled =false;
                        document.getElementById("ocrUnit_"+i).style.backgroundColor='#FFFFFF';
                    }
                    // document.getElementById("ocrAmount_"+i).disabled =false;
                    // document.getElementById("ocrAmount_"+i).style.backgroundColor='#FFFFFF';
                }else{
                    flagForUnitEnable = true;
                    if(perUnitDetailsJSON.expenseIsfromAndToReqd=='Y' && window.localStorage.getItem("MobileMapRole") == 'true'){
                        document.getElementById("ocrUnit_"+i).value = 1;
                        document.getElementById("ocrUnit_"+i).disabled =true;
                        document.getElementById("ocrUnit_"+i).style.backgroundColor='#d1d1d1';
                    }
                    else{
                        document.getElementById("ocrUnit_"+i).disabled =false;
                        document.getElementById("ocrUnit_"+i).style.backgroundColor='#FFFFFF';
                    }
                    // document.getElementById("ocrAmount_"+i).disabled =true;
                    // document.getElementById("ocrAmount_"+i).style.backgroundColor='#d1d1d1'; 
                }
            }else{
                flagForUnitEnable = false;
                document.getElementById("ocrUnit_"+i).value = 1;
                document.getElementById("ocrUnit_"+i).disabled =true;
                document.getElementById("ocrUnit_"+i).style.backgroundColor='#d1d1d1'; 
                document.getElementById("ocrAmount_"+i).disabled =false;
                document.getElementById("ocrAmount_"+i).style.backgroundColor='#FFFFFF'; 
            }
            if(perUnitDetailsJSON.expPerUnitActiveInative=='1'){
                flagForUnitEnable=false;
                document.getElementById("ocrUnit_"+i).value = 1;
                document.getElementById("ocrUnit_"+i).disabled =true;
                document.getElementById("ocrAmount_"+i).disabled =false;
                document.getElementById("ocrAmount_"+i).style.backgroundColor='#FFFFFF'; 
                document.getElementById("ocrUnit_"+i).style.backgroundColor='#d1d1d1';
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

function checkAmountForOCRDynamic(i){
         
         var ocrAmount=document.getElementById("ocrAmount_"+i).value;
        if(isOnlyNumeric(ocrAmount,"Amount")==false)
        {   
            document.getElementById("ocrAmount_"+i).value="";
            return false;
        }
}


function checkPerUnitExceptionStatusForBEAtLineLevelForOCRStatic(){
        exceptionStatus="N";
        exceptionMessage='';
        //String acExpNameReqStatus = findByIdAccountCodeExpenseNameRequiredStatus(accountCodeId);

             //CASE 1 : IF THE EXP NAME REQUIRED STATUS IS 'Y' FURTHER COMPUTE TO GET THE EXCEPTION STATUS
             //CASE 2 : IF 'N' THEN SET THE EXCEPTION STATUS AS 'N' AS THIS AC CODE IS NA FOR BE ENTITLEMENTS
             
             var perUnitStatus = perUnitDetailsJSON.isUnitReqd;
             //alert(" perUnitStatus>>>>>>>>"+perUnitStatus)
             var fixedOrVariable = perUnitDetailsJSON.expFixedOrVariable;
             var ratePerUnit = perUnitDetailsJSON.expRatePerUnit;
             var limitAmt = perUnitDetailsJSON.expFixedLimitAmt;
             var expName = perUnitDetailsJSON.expenseName;
             var expActiveInactive = perUnitDetailsJSON.expPerUnitActiveInative;
             var amount=document.getElementById("ocrAmount").value;
             var unitValue=document.getElementById("ocrUnit").value;
            
                if (expActiveInactive == '1'){
                        exceptionStatus = "N";
                            j('#errorMsgArea').children('span').text("");
                    }if (perUnitStatus != "" && limitAmt != "" &&  amount != ""
                             && perUnitStatus =='N' && expActiveInactive !='1'){
                        if (parseFloat(limitAmt) < parseFloat(amount)){
                             exceptionStatus = "Y";
                             exceptionMessage = "(Exceeding per unit amount defined: "
                                 + limitAmt + " for expense name " + expName+")";
                                 j('#errorMsgArea').children('span').text(exceptionMessage);
                         }else{
                             exceptionStatus = "N";
                             j('#errorMsgArea').children('span').text("");
                         }
                    }else if (perUnitStatus != "" && ratePerUnit != "" && amount != ""
                             && fixedOrVariable != "" && unitValue != "" && perUnitStatus =='Y'
                             && fixedOrVariable =='V' && expActiveInactive !='1'){

                         if (parseFloat(ratePerUnit) < amount/unitValue){
                             exceptionStatus = "Y";
                             exceptionMessage = "(Exceeding per unit amount defined: "
                                 + ratePerUnit + " for expense name " + expName+")";
                                 j('#errorMsgArea').children('span').text(exceptionMessage);
                         }else{
                             exceptionStatus = "N";
                              j('#errorMsgArea').children('span').text("");
                         }
                    }
                
                
    }

       function validate()
   {
      var field = document.getElementById("ocrAmount");
      if (field.value.length > 8 ) {
         field.value = field.value.substring(0, 8);
         alert('Amount cannot be greater than 99999999.99');
         field.value='';
         return false;
      }
   }

function calculatePerUnitOCRStatic(){
       
       var unit=document.getElementById("ocrUnit").value;
      if(isOnlyNumeric(unit,"Unit")==false)
      {  
         document.getElementById("ocrUnit").value="";
         return false;
      }
       var perUnitStatus = perUnitDetailsJSON.expIsUnitReq;
       var fixedOrVariable = perUnitDetailsJSON.expFixedOrVariable;
       var ratePerUnit = perUnitDetailsJSON.expRatePerUnit;
       var limitAmt = perUnitDetailsJSON.expFixedLimitAmt;
       var expName = perUnitDetailsJSON.expenseName;
       var result='';
       var unitValue=document.getElementById("ocrUnit").value;
       if(unitValue!=null && unitValue!='' && ratePerUnit!='' && ratePerUnit!=null){
       result=parseFloat(unitValue)*parseFloat(ratePerUnit);
       }
       document.getElementById("ocrAmount").value=result;

}

function checkAmountForOCR(){
    
       var amount=document.getElementById("ocrAmount").value;
        if(isNumber_optionalDot(amount,"Amount")==false)
        {   
            document.getElementById("ocrAmount").value='';
            return false;
        }
}

function getPerUnitBasedOnExpenseOCR(){

   var expenseNameID = j("#expenseName").select2('data').id;
       getPerUnitFromDB(expenseNameID);
 }



// Changes Regarding BE Claim :
 
 function addToExpense(status){
    
    if (mydb) {
        var accHeadId = document.getElementById('accountHead').value;      
        var expNameId = document.getElementById('expenseName').value;             
        var expDate = document.getElementById('ocrExpDate').value;     
        var fromLoc = document.getElementById('ocrFromLoc').value;     
        var toLoc = document.getElementById('ocrToLoc').value;   
        var narration =  document.getElementById('ocrnarration').value;    
        
        
        var unit = document.getElementById('ocrUnit').value;
        
        var amount =  document.getElementById('ocrAmount').value;
        
        var currencyId = document.getElementById('currency').value; 

    //globalExpName = document.getElementById('expNameMstId').value; 
    //alert("!!!!!!!!!!"+globalExpName)
        var isEntitlementExceeded = "";
        var busExpAttachment = "";
        var wayPointunitValue = "";
      
            if(validateExpenseDetailsForOCR(accHeadId,expNameId,currencyId,expDate,fromLoc,toLoc,unit,amount,narration))
                {
            try{
                 mydb.transaction(function (t) {
                    t.executeSql("INSERT INTO businessExpDetails (accHeadId,expNameId,expDate,expFromLoc,expToLoc,expNarration,expUnit,expAmt,currencyId,isEntitlementExceeded,busExpAttachment,wayPointunitValue) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", 
                        [accHeadId,expNameId,expDate,fromLoc,toLoc,narration,unit,amount,currencyId,isEntitlementExceeded,'null','null']);
                });
        }catch(e){
            alert("exception : "+e);
        }
        

                  j("#bEClaims").hide("slow");
        
                 if(status == "0"){
                    alert("Expense added Successfully.");
                    checkforDataBE(0);
                 }else if(status == "1"){
                    checkforDataBE(1);
                    alert("Expense has Send For Approval Successfully.");
                    

                 }

    else {
        alert("db not found, your browser does not support web sql!");
    }
    }
}
}


var record
function checkforDataBE(status){

    mydb.transaction(function(t) {
        t.executeSql('SELECT * FROM businessExpDetails;', [],
                function(transaction, result) {
            if (result != null && result.rows != null) {
                j('#bEClaimsBox').empty();
                for ( record = 0; record< result.rows.length; record++) {   
                    var row = result.rows.item(record); 

                    var data ="<li class='swipeout'> <div class='swipeout-content'> "
                        + " <div class='item-content claimlisting' onclick='expandCollapseForOcr(this,"+record+");'> "
                        + " <div class='item-inner comments-list'> "
                        + " <div class='image'> "
                        + " <span class='ava'> "
                        + " <img src='images/freecharge-200x200_2163.jpg' alt=''> "
                        + " </span> "
                        + " </div> "
                        + " <div class='text'> "
                        + " <div class='info'> "
                        + " <span class='data'>Expense date : "+row.expDate+"| Amount "+row.expAmt+"</span> "
                        + " </div> "
                        + " <div class='comment'> "
                        +    row.expNarration
                        + " </div> "
                        + " </div> "
                        + " <div class='closeexpbox'><i class='fa fa-angle-double-down'></i></div> "
                        + " </div> "
                        + " </div> "
                        + " <div class='opentogglelist'> "
                        + " <div class='item-inner comments-list'> "
                        + " <table> "
                        + " <tr> "
                        + " <td valign='top'> "
                        + " <div class='image'> "
                        + " <span class='ava'> "
                        + " <img src='images/dummy-image.png' alt=''> "
                        + " </span> "
                        + " </div> "
                        + " <div class='verticalicons'> "
                        + " <ul> "
                        + " <li> "
                        + " <a href='' class='vericonssml'><i class='fa fa-camera' aria-hidden='true'></i></a> "
                        + " </li> "
                        + " <li> "
                        + " <a href='' class='vericonssml'><i class='fa fa-picture-o' aria-hidden='true'></i></a> "
                        + " </li> "
                        + " <li> "
                        + " <a href='' class='vericonssml'><i class='fa fa-map-marker' aria-hidden='true'></i></a> "
                        + " </li> "
                        + " </ul> "
                        + " </div> "
                        + " </td> "
                        + " <td valign='top'> "
                        + " <table class='tablefixed'> "
                        + " <tr> "
                        + " <td width='20%'>Account head: </td> "
                        + " <td colspan='3' width='80%'> "
                        + " <input placeholder='Account Head' id = 'accountHeadOcr_"+record +"' value = "+row.accHeadId+" style='width: 100%;'> "
                        + " </input> "
                        + " </td> "
                        + " </tr> "
                        + " <tr> "
                        + " <td>Expense name: </td> "
                        + " <td> "
                        + " <input id = 'expenseNameOcr_"+record +"' value = "+row.expNameId+" style=''> "
                        + " </input> "
                        + " </td> "
                        + " <td>Expense date: </td> "
                        + " <td> "
                        + " <input placeholder = 'Expense Date' class='datepicker_recurring_start' id = ocrExpDate_"+record +" value = "+row.expDate+" style='width: 50%;'> "
                        + " </input> "
                        + "<input  id='ratePerUnit_"+record+"'  value="+row.expRatePerUnit+" style='display:none;'>"
                        + "<input  id='expNameMstIdOCR_"+record+"'   style='display:none;'>"
                        + " </td> "
                        + " </tr> "
                        + " <tr> "
                        + " <td>From location: </td> "
                        + " <td> "
                        + " <input placeholder = 'From Location' id = ocrFromLoc_"+record +" value = "+row.expFromLoc+"> "
                        + " </input> "
                        + " </td> "
                        + " <td>To location: </td> "
                        + " <td> "
                        + " <input placeholder = 'To Location' id = ocrToLoc_"+record +" value = "+row.expToLoc+"> "
                        + " </input> "
                        + " </td> "
                        + " </tr> "
                        + " <tr> "
                        + " <td> "
                        + " <span class='text-left' style='display: block;'>Units</span> "
                        + " <input placeholder = 'Units' id = ocrUnit_"+record +" onkeyup='calculatePerUnitForOCR("+record+");' value = "+row.expUnit+"> "
                        + " </input> "
                        + " </td> "
                        + " <td colspan='2'> "
                        + " <span class='text-left' style='display: block;'>Amount : </span> "
                        + " <input placeholder = 'Amount' id = ocrAmount_"+record +" onkeyup='checkAmountForOCRDynamic("+record+");  validateForAmountOCR("+record+");  checkPerUnitExceptionStatusForBEAtLineLevelForOCR("+record+");' value = "+row.expAmt+"> "
                        + " </input> "
                        + " </td> "
                        + " <td> "
                        + " <span class='' style='display: block;'>Currency</span> "
                        + " <input id = 'ocrCurrency_"+record +"' value = "+row.currencyId+"> "
                        + " </input> "
                        + " </td> "
                        + " </tr> "
                        + "  <tr>"
                        + " <td colspan='4'> "
                        + "  <p id=errorMsgArea_"+record+"><span id=errorSpan_"+record+"></span></p>"
                        + "  </td>"
                        + " </tr>"
                        + " <tr> "
                        + " <td colspan='4'> "
                        + " <textarea rows='2' placeholder='Narration' id = ocrNarration_"+record +">"+row.expNarration
                        + " </textarea> "
                        + " </td> "
                        + " </tr> "
                        + " </table> "
                        + " </td> "
                        + " </tr> "
                        + " <tr> "
                        + " <td colspan='2'> "
                        + " <div class='fourlinkbtm'> "
                        + " <table> "
                        + " <tr> "
                        + " <td><a href='' onclick = updateExpenseDetails("+record+","+row.busExpId+");><i class='fa fa-check' aria-hidden='true'></i> Save</a></td> "
                        + " <td><a href='' onclick= smartBESendForApprover("+record+","+row.busExpId+",'D');><i class='fa fa-send' aria-hidden='true'></i> Send Approval</a></td> "
                        + " <td><a href=''><i class='fa fa-heart' aria-hidden='true'></i> Add Wishlist</a></td> "
                        + " <td><a href='' onclick = deleteBERecord("+row.busExpId+");><i class='fa fa-remove' aria-hidden='true'></i> Remove</a></td> "
                        + " <td><a href='' class='closeexpmodal'><i class='fa fa-angle-double-up' aria-hidden='true' onclick='closeToggleList();'></i> Close</a></td> "
                        + " </tr> "
                        + " </table> "
                        + " </div> "
                        + " </td> "
                        + " </tr> "
                        + " </table> "
                        + " </div> "
                        + " </div> "
                        + " </div> "
                        + " <div class='swipeout-actions-right'> "
                        + " <a href='#' class='action-green js-up'>Send for Approval</a> "
                        + " <a href='#' class='action-red js-down'>Add to wishlist</a> "
                        + " <a href='#' class='action-blue js-down'>Delete</a> "
                        + " </div> "
                        + " </li> ";


                if(status == "1"){
                        //alert("record : "+record+" , row.ocrExpId : "+row.ocrExpId);
                         smartBESendForApprover(record,row.busExpId,'S');
                }else{
                     j('#bEClaimsBox').append(data);
                }

                }
            }
            // ocrSelect2();

        });
       
    });

}

// Changes For BE Same variables as OCR

function updateExpenseDetails(i,expId){
       
      // alert("updateOcrExpenseDetails : " +expId);
       
        var acc_head_id;
        var acc_head_val;

        var exp_name_id;
        var exp_name_val;

        var currency_id;
        var currency_val;

       
        if(j("#accountHeadOcr_"+i).select2('data') != null){
            acc_head_id = j("#accountHeadOcr_"+i).select2('data').id;
            acc_head_val = j("#accountHeadOcr_"+i).select2('data').name;
        }else{
            acc_head_id = '-1';
        }
     
        if(j("#expenseNameOcr_"+i).select2('data') != null){
            exp_name_id = j("#expenseNameOcr_"+i).select2('data').id;
            exp_name_val = j("#expenseNameOcr_"+i).select2('data').name;
        }else{
            exp_name_id = '-1';
        }
       
           if(j("#ocrCurrency_"+i).select2('data') != null){
            currency_id = j("#ocrCurrency_"+i).select2('data').id;
            currency_val = j("#ocrCurrency_"+i).select2('data').name;
        }else{
            currency_id = '-1';
        }
    
        var ocrExpDate = document.getElementById('ocrExpDate_'+i).value;


        var ocrFromLoc = document.getElementById('ocrFromLoc_'+i).value;
       
        var ocrToLoc = document.getElementById('ocrToLoc_'+i).value;
    
        var ocrNarration =  document.getElementById('ocrNarration_'+i).value;    

       
        
        var ocrUnit = document.getElementById('ocrUnit_'+i).value;
      
        var ocrAmount =  document.getElementById('ocrAmount_'+i).value;
       

        //var isEntitlementExceeded = "";
  
        //var wayPointunitValue = "";

        if(validateExpenseDetailsForOCR(acc_head_id,exp_name_id,currency_id,ocrExpDate,ocrFromLoc,ocrToLoc,ocrUnit,ocrAmount,ocrNarration))
        {  
     
     if (mydb) {
                mydb.transaction(function (t) {
                    console.log("accHeadId ="+acc_head_id)
                    console.log("expNameId ="+exp_name_id)
                    console.log("ocrExpDate ="+ocrExpDate)
                    console.log("ocrFromLoc ="+ocrFromLoc)
                    console.log("ocrToLoc ="+ocrToLoc)
                    console.log("ocrNarration ="+ocrNarration)
                    console.log("ocrUnit ="+ocrUnit)
                    console.log("ocrAmount ="+ocrAmount)
                    console.log("currencyId ="+currency_id)
                    console.log("expId ="+expId)

                  
         t.executeSql("UPDATE businessExpDetails set accHeadId ='"+acc_head_id+"', expNameId ='"+exp_name_id+"',expDate = '"+ocrExpDate+"'   ,expFromLoc = '"+ocrFromLoc+"'   ,expToLoc = '"+ocrToLoc+"'    ,expUnit = '"+ocrUnit+"'   , expAmt = '"+ocrAmount+"'   ,    expNarration = '"+ocrNarration+"' ,currencyId = '"+currency_id+"' where busExpId = "+expId+";");
                });
            
                    location.reload();

               alert("Record update successfully");
              
              
            } else {
        alert("db not found, your browser does not support web sql!");
        }
    }
}

function deleteBERecord(expId){
  if (mydb) {
    mydb.transaction(function (t) {
                t.executeSql("delete from businessExpDetails WHERE busExpId=?", [expId]);
            });
          location.reload();
        }
    }




function smartBESendForApprover(rowId,busExpId,type){

   
    //alert("rowId : "+rowId);
    //alert("businessId : "+busExpId);
    
    var jsonExpenseDetailsArr = []; 
    var busExpDetailsArr = [];
    var jsonFindBE = new Object();
    var expenseClaimDates=new Object; 
    var expDate = "";
    var currentDate = "";
    var accountHeadIdToBeSent = ""
    var acc_head_id = "";
    var exp_name_id = "";
    var expenseName = "";
    var fromLoc = "";
    var toLoc = "";
    var narration = "";
    var unit = "";
    var amount = "";
    var currency_id = "";
    


setTimeout(function(){ 
   if(type == "S"){
        expDate =document.getElementById('ocrExpDate').value;
        accountHeadIdToBeSent = j("#accountHead").select2('data').id;
        acc_head_id =j("#accountHead").select2('data').id; 
        exp_name_id =document.getElementById('expNameMstId').value;
        expenseName=j("#expenseName").select2('data').name;
        fromLoc =document.getElementById('ocrFromLoc').value;
        toLoc= document.getElementById('ocrToLoc').value;
        narration=document.getElementById('ocrnarration').value;
        unit=document.getElementById('ocrUnit').value;
        amount=document.getElementById('ocrAmount').value;
        currency_id=j("#currency").select2('data').id;

       // alert("exp_name_id  : "+exp_name_id);


    }else{
       
        expDate =document.getElementById('ocrExpDate_'+rowId).value;
        accountHeadIdToBeSent = j("#accountHeadOcr_"+rowId).select2('data').id;
        acc_head_id =j("#accountHeadOcr_"+rowId).select2('data').id; 
        exp_name_id =  document.getElementById('expNameMstIdOCR_'+rowId).value;
        //alert("!!!!!!!!"+exp_name_id)
        //exp_name_id =j("#expenseNameOcr_"+rowId).select2('data').id;
        expenseName=j("#expenseNameOcr_"+rowId).select2('data').name;
        //alert("!!!!!!!!"+expenseName)
        fromLoc =document.getElementById('ocrFromLoc_'+rowId).value;
        toLoc= document.getElementById('ocrToLoc_'+rowId).value;
        narration=document.getElementById('ocrNarration_'+rowId).value;
        unit=document.getElementById('ocrUnit_'+rowId).value;
        amount=document.getElementById('ocrAmount_'+rowId).value;
        currency_id=j("#ocrCurrency_"+rowId).select2('data').id;
    
    }
     currentDate = new Date(expenseDate);
     var expenseDate  = expDate;

     //alert("exp_name_id  : "+exp_name_id);

    jsonFindBE["ExpenseId"] =exp_name_id;
    jsonFindBE["ExpenseName"] =expenseName;
    jsonFindBE["fromLocation"] =fromLoc;
    jsonFindBE["toLocation"] = toLoc;
    jsonFindBE["narration"] =narration;
    jsonFindBE["expenseDate"] = expDate;
    jsonFindBE["accountCodeId"]=acc_head_id;
    jsonFindBE["currencyId"] =currency_id; 
    jsonFindBE["amount"] = amount;
    jsonFindBE["units"] = unit;

    jsonFindBE["wayPoint"] = '1';
    jsonFindBE["isErReqd"] = 'N';
    jsonFindBE["ERLimitAmt"] = 99999999.00;
    jsonFindBE["perUnitException"] ='N';
     var jsonEmplAdvanceArr = null;
     var jsonFindEA = new Object();
    // jsonFindEA["empAdvID"] = "";
    // jsonFindEA["emplAdvVoucherNo"] = "";
    // jsonFindEA["empAdvTitle"] ="";
    // jsonFindEA["Amount"] = "";
    // jsonFindEA["recoverFromEmp"] = "";
    
    //jsonEmplAdvanceArr.push(jsonFindEA);
     jsonFindBE["employeeAdvDeatils"] =jsonEmplAdvanceArr;
     jsonFindBE["imageAttach"] = "";

    //alert("acc_Code_id    "+window.localStorage.getItem("DefaultAccCode"));
    jsonFindBE["accountCodeId"]= window.localStorage.getItem("acc_Code_id_for_ocr");

    if(validateExpenseDetailsForOCR(acc_head_id,exp_name_id,currency_id,expDate,fromLoc,toLoc,unit,amount,narration))
    {

    jsonExpenseDetailsArr.push(jsonFindBE);
     busExpDetailsArr.push(busExpId);
    if(accountHeadIdToBeSent!="" && busExpDetailsArr.length>0){
        sendForApprovalBusinessDetailsBE(expenseDate,jsonExpenseDetailsArr,busExpDetailsArr,accountHeadIdToBeSent);
        }else{
     alert('Tap and select Expenses to send for Approval with server.');
    }
    
   }
    }, 1000);

}

function sendForApprovalBusinessDetailsBE(expense_Date,jsonBEArr,busExpDetailsArr,accountHeadID){
    
     var jsonToSaveBE = new Object();
     jsonToSaveBE["employeeId"] = window.localStorage.getItem("EmployeeId");
     jsonToSaveBE["expenseDetails"] = jsonBEArr;
     jsonToSaveBE["startDate"]=expense_Date;
     jsonToSaveBE["endDate"]=expense_Date;
     jsonToSaveBE["DelayAllowCheck"]=false;
     jsonToSaveBE["BudgetingStatus"]=window.localStorage.getItem("BudgetingStatus");
     jsonToSaveBE["accountHeadId"]=accountHeadID;
     jsonToSaveBE["ProcessStatus"] = "1";
     jsonToSaveBE["title"]= window.localStorage.getItem("FirstName")+"/"+jsonToSaveBE["startDate"]+" to "+jsonToSaveBE["endDate"];

    var jsonEmplAdvanceArr = [];
    var jsonFindEA = new Object();

    // jsonFindEA["empAdvID"] = "";
    // jsonFindEA["emplAdvVoucherNo"] = "";
    // jsonFindEA["empAdvTitle"] ="";
    // jsonFindEA["Amount"] = "";
    jsonEmplAdvanceArr.push(jsonFindEA);
     jsonToSaveBE["employeeAdvDeatils"] =jsonEmplAdvanceArr;
   
     jsonToSaveBE["imageAttach"] = "";
     console.log("jsonToSaveBE  "+JSON.stringify(jsonToSaveBE))
     var pageRefSuccess=defaultPagePath+'success.html';
     var pageRefFailure=defaultPagePath+'failure.html';
     callSendForApprovalServiceForBusExp(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure);
     
}

function callSendForApprovalServiceForBusExp(jsonToSaveBE,busExpDetailsArr,pageRefSuccess,pageRefFailure){
 
console.log("callSendForApprovalServiceForBusExp   :"+JSON.stringify(jsonToSaveBE))
console.log("callSendForApprovalServiceForBusExp   :"+JSON.stringify(busExpDetailsArr))
j('#loading_Cat').show();
var headerBackBtn=defaultPagePath+'backbtnPage.html';
j.ajax({
                  url: window.localStorage.getItem("urlPath")+"SynchSubmitBusinessExpense",
                  type: 'POST',
                  dataType: 'json',
                  crossDomain: true,
                  data: JSON.stringify(jsonToSaveBE),
                  success: function(data) {
                    //alert(data.Status)
                    if(data.Status=="Success"){
                       alert(data.Message);
                       
                        if(data.hasOwnProperty('DelayStatus')){
                            setDelayMessage(data,jsonToSaveBE,busExpDetailsArr);
                             j('#loading_Cat').hide();
                        }else{
                         successMessage = data.Message;
                         for(var i=0; i<busExpDetailsArr.length; i++ ){
                            var businessExpDetailId = busExpDetailsArr[i];
                             //alert("businessExpDetailId values : " +businessExpDetailId);
                            deleteBERecord(businessExpDetailId);
                         }
                         requestRunning = false;
                         j('#loading_Cat').hide();
                          location.reload();
                         j('#mainHeader').load(headerBackBtn);
                         j('#mainContainer').load(pageRefSuccess);
                        // appPageHistory.push(pageRef);
                        }
                    }else if(data.Status=="Failure"){
                        alert(data.Message);
                        location.reload();
                        successMessage = data.Message;
                        requestRunning = false;
                        j('#loading_Cat').hide();
                        j('#mainHeader').load(headerBackBtn);
                        j('#mainContainer').load(pageRefFailure);
                     }else{
                         j('#loading_Cat').hide();
                        successMessage = "Oops!! Something went wrong. Please contact system administrator.";
                        j('#mainHeader').load(headerBackBtn);
                        j('#mainContainer').load(pageRefFailure);
                     }
                    },
                  error:function(data) {
                    j('#loading_Cat').hide();
                    requestRunning = false;
                    console.log(window.lang.translate('Error: Oops something is wrong, Please Contact System Administer'));
                  }
            });
}


function saveWallet(imageData){
    var rowsWallet;
            var mytable = j('<div></div>').attr({ id: "",class: ["display:flex"].join(' ') });
            mydb.transaction(function(t) {
                 j('#ocrBox').empty();
              t.executeSql('SELECT * FROM walletMst;', [],
                 function(transaction, result) {
                    
                if (result != null && result.rows != null) {
                    
                    for (var i = 0; i < result.rows.length; i++) {
                
                      var row = result.rows.item(i);    
                        
                       
                       j(mytable).append('<img id="recieptid_'+i+'" src="'+row.walletAttachment+'" style="width:50px; height:50px; padding:5px;" title="Select this reciept for processing" onclick="chooseOption(this,'+i+');" ></img>');

                     mytable.appendTo("#ocrBox");        
                    }
                    j(mytable).append('<br><span id="imgProcessingId" style="vertical-align: top; padding-left: 40px;"></span>');
                     mytable.appendTo("#ocrBox");
                
                  }     
                });
            });
}