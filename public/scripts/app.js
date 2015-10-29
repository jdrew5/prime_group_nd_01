var frontEndTarget = 0;
var clientSideTarget = 0;
var serverSideTarget = 0;
var companyName = "";
var employeeArray = [];


$(document).ready( function(){

    $('#generateButton').on('click', function(){
        generateProject();
        displayProject();
    });

    $('.assignStaffButton').on('click', function(){
        getEmployee();
    });

});

function getEmployee(){
    $.ajax({
       type: "GET",
        url: "/employee",
        success: function(data){
            console.log("success ajax", data);
            employeeArray.push(data);
            checkProject();
            calculateWeeks();
        }
    });
}

function checkProject(){
    var frontEndBool = false;
    var clientSideBool = false;
    var serverSideBool = false;

    for(var i = 0; i < employeeArray.length; i++){
        // FE, SS, CS
        switch (employeeArray[i].category) {
            case "FE":
                frontEndBool = true;
                break;
            case "SS":
                serverSideBool = true;
                break;
            case "CS":
                clientSideBool = true;
                break;
        }
    }

    if (frontEndBool && clientSideBool && serverSideBool) {
        console.log("great!", employeeArray);
    } else {
        getEmployee();
    }
}

function randomNum(min, max){
    return Math.round(Math.random()*(max-min) + min);
}

function generateProject(){
    companyName = "Company: " + randomNum(1,100);
    frontEndTarget = randomNum(10,60);
    clientSideTarget = randomNum(10,60);
    serverSideTarget = randomNum(10,60);
}

function displayProject(){

    $('#companyName').text(companyName);
    $('#frontEnd').text("Target FE: " + frontEndTarget).addClass('show');
    $('#clientSide').text("Target CS: " + clientSideTarget).addClass('show');
    $('#serverSide').text("Target SS: " + serverSideTarget).addClass('show');
    $('.assignStaffButton').text("Assign Staff").addClass('showbutton');
}

function calculateWeeks(){
    var totalFE = 0;
    var totalCS = 0;
    var totalSS = 0;
    for (var i = 0; i < employeeArray.length; i++){
        if (employeeArray[i].category == "FE") {
            totalFE += employeeArray[i].points;
        } else if (employeeArray[i].category == "CS") {
            totalCS += employeeArray[i].points;
        } else if (employeeArray[i].category == "SS") {
            totalSS += employeeArray[i].points;
        }
    }
    var weeksFE = frontEndTarget/totalFE;
    var weeksCS = clientSideTarget/totalCS;
    var weeksSS = serverSideTarget/totalSS;

    var totalWeeks = Math.ceil(Math.max(weeksFE, weeksCS, weeksSS));

    $("#totalFrontEnd").text("Total FE: " + totalFE).addClass('show');
    $("#totalClientSide").text("Total CS: " + totalCS).addClass('show');
    $("#totalServerSide").text("Total SS: " + totalSS).addClass('show');
    $("#totalWeeks").text("Total weeks Needed: " + totalWeeks);

}