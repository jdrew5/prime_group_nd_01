var frontEnd = 0;
var clientSide = 0;
var serverSide = 0;
var companyName = "";
var employeeArray = [];


$(document).ready( function(){
    console.log(randomNum(10,60));

    $('#generateButton').on('click', function(){
        generateProject();
        displayProject();
    });

    $('#assignStaffButton').on('click', function(){
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
        }
    });
}

function checkProject(){
    var frontEnd = false;
    var clientSide = false;
    var serverSide = false;

    for(var i = 0; i < employeeArray.length; i++){
        // FE, SS, CS
        switch (employeeArray[i].category) {
            case "FE":
                frontEnd = true;
                break;
            case "SS":
                serverSide = true;
                break;
            case "CS":
                clientSide = true;
                break;
        }
    }

    if (frontEnd && clientSide && serverSide) {
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
    frontEnd = randomNum(10,60);
    clientSide = randomNum(10,60);
    serverSide = randomNum(10,60);
}

function displayProject(){
    $('#companyName').text(companyName);
    $('#frontEnd').text(frontEnd);
    $('#clientSide').text(clientSide);
    $('#serverSide').text(serverSide);
}



//
//function companyName(){
//    return ( );
//}

function createFrontEnd(){
    return ran
}