var calculatorForm = document.getElementById("calculator");
var dataEditorForm = document.getElementById("dataEditor");
var infoForm = document.getElementById("info")
var openCalculatorButton = document.getElementById("calculatorButton");
var openDataEditorButton = document.getElementById("dataEditorButton");
var openInfoButton = document.getElementById("infoButton")

openCalculatorButton.addEventListener('click', function() {
    dataEditorForm.style.display = "none";
    infoForm.style.display = "none";
    calculatorForm.style.display = "block";
    document.querySelector('.footer').style.display = "none";
});

openDataEditorButton.addEventListener('click', function(){
    calculatorForm.style.display = "none";
    infoForm.style.display = "none";
    document.querySelector('.footer').style.display = "block";
    dataEditorForm.style.display = "block";
});

openInfoButton.addEventListener('click', function(){
    // document.getElementById('info').style.display = "block";
    document.querySelector('.footer').style.display = "none";
    // document.querySelector('.containerHome').style.display = "none";
    calculatorForm.style.display = "none";
    dataEditorForm.style.display = "none";
    infoForm.style.display = "block";
});


function calculateCal1() {
    var hs1 = parseFloat(document.getElementById("heSo1ForCal1").value);
    var hs2 = parseFloat(document.getElementById("heSo2ForCal1").value);
    var hs3 = parseFloat(document.getElementById("heSo3ForCal1").value);
    var hs4 = parseFloat(document.getElementById("heSo4ForCal1").value);
    var sum = hs1*0.1 + hs2*0.1 + hs3*0.1 + hs4*0.7;
    document.getElementById("resultCal1").innerText = sum;
}
function calculateCal2() {
    var hs1 = parseFloat(document.getElementById("heSo1ForCal2").value);
    var hs2 = parseFloat(document.getElementById("heSo2ForCal2").value);
    var hs3 = parseFloat(document.getElementById("heSo3ForCal2").value);
    var sum = hs1*0.1 + hs2*0.2 + hs3*0.7;
    document.getElementById("resultCal2").innerText = sum;
}

function showTable() {
    var selectedValue = document.getElementById("Cal-index").value;
    var calTable1 = document.getElementById("cal10-10-10-70");
    var calTable2 = document.getElementById("cal10-20-70");

    if (selectedValue === "10-10-10-70") {
        calTable1.style.display = "block";
        calTable2.style.display = "none";
    } else if (selectedValue === "10-20-70") {
        calTable1.style.display = "none";
        calTable2.style.display = "block";
    } else {
        calTable1.style.display = "none";
        calTable2.style.display = "none";
    }
}

//nam 1 ki 1

function calculateGPA1() {
    var gpaList1 = document.querySelectorAll('.ki1-text select');
    var earnedCredits1 = 0;
    var totalCredits1 = 0;
    var totalGPA1 = 0;

    gpaList1.forEach(function(selectElement1) {
        var selectedValue1 = parseFloat(selectElement1.value);
        var credits1 = parseFloat(selectElement1.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue1) && selectedValue1 > 0) {
            earnedCredits1 += credits1;
            totalGPA1 += selectedValue1 * credits1;
        }

        if (selectedValue1 != 0) {
            totalCredits1 += credits1;
        }
    });

    var avgGPA1 = totalGPA1 / totalCredits1;
    var cumulativeGPA1 = totalGPA1 / earnedCredits1;

    document.getElementById('avgGPA1').textContent = avgGPA1.toFixed(3);
    document.getElementById('cumulativeGPA1').textContent = cumulativeGPA1.toFixed(3);
    document.getElementById('earnedCredits1').textContent = earnedCredits1;
    document.getElementById('totalCredits1').textContent = totalCredits1;
}

//nam1 ki 2

function calculateGPA12() {
    var gpaList12 = document.querySelectorAll('.ki12-text select');
    var earnedCredits12 = 0;
    var totalCredits12 = 0;
    var totalGPA12 = 0;

    gpaList12.forEach(function(selectElement12) {
        var selectedValue12 = parseFloat(selectElement12.value);
        var credits12 = parseFloat(selectElement12.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue12) && selectedValue12 > 0) {
            earnedCredits12 += credits12;
            totalGPA12 += selectedValue12 * credits12;
        }

        if (selectedValue12 != 0) {
            totalCredits12 += credits12;
        }
    });

    var avgGPA12 = totalGPA12 / totalCredits12;
    var cumulativeGPA12 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + avgGPA12) / 2;

    document.getElementById('avgGPA12').textContent = avgGPA12.toFixed(3);
    document.getElementById('cumulativeGPA12').textContent = cumulativeGPA12.toFixed(3);
    document.getElementById('earnedCredits12').textContent = earnedCredits12;
    document.getElementById('totalCredits12').textContent = totalCredits12 + parseFloat(document.getElementById('totalCredits1').textContent);
}

//nam 2 ki 1

function calculateGPA2() {
    var gpaList2 = document.querySelectorAll('.ki2-text select');
    var earnedCredits2 = 0;
    var totalCredits2 = 0;
    var totalGPA2 = 0;

    gpaList2.forEach(function(selectElement2) {
        var selectedValue2 = parseFloat(selectElement2.value);
        var credits2 = parseFloat(selectElement2.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue2) && selectedValue2 > 0) {
            earnedCredits2 += credits2;
            totalGPA2 += selectedValue2 * credits2;
        }

        if (selectedValue2 != 0) {
            totalCredits2 += credits2;
        }
    });

    var avgGPA2 = totalGPA2 / totalCredits2;
    var cumulativeGPA2 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + parseFloat(document.getElementById('cumulativeGPA12').textContent) + avgGPA2) / 3;

    document.getElementById('avgGPA2').textContent = avgGPA2.toFixed(3);
    document.getElementById('cumulativeGPA2').textContent = cumulativeGPA2.toFixed(3);
    document.getElementById('earnedCredits2').textContent = earnedCredits2;
    document.getElementById('totalCredits2').textContent = totalCredits2 + parseFloat(document.getElementById('totalCredits12').textContent);
}

//nam 2 ki 2

function calculateGPA22() {
    var gpaList22 = document.querySelectorAll('.ki22-text select');
    var earnedCredits22 = 0;
    var totalCredits22 = 0;
    var totalGPA22 = 0;

    gpaList22.forEach(function(selectElement22) {
        var selectedValue22 = parseFloat(selectElement22.value);
        var credits22 = parseFloat(selectElement22.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue22) && selectedValue22 > 0) {
            earnedCredits22 += credits22;
            totalGPA22 += selectedValue22 * credits22;
        }

        if (selectedValue22 != 0) {
            totalCredits22 += credits22;
        }
    });

    var avgGPA22 = totalGPA22 / totalCredits22;
    var cumulativeGPA22 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + parseFloat(document.getElementById('cumulativeGPA12').textContent + parseFloat(document.getElementById('cumulativeGPA2').textContent)) + avgGPA22) / 4;

    document.getElementById('avgGPA22').textContent = avgGPA22.toFixed(3);
    document.getElementById('cumulativeGPA22').textContent = cumulativeGPA22.toFixed(3);
    document.getElementById('earnedCredits22').textContent = earnedCredits22;
    document.getElementById('totalCredits22').textContent = totalCredits22 + parseFloat(document.getElementById('totalCredits2').textContent);
}

// nam 3 ki 1

function calculateGPA3() {
    var gpaList3 = document.querySelectorAll('.ki3-text select');
    var earnedCredits3 = 0;
    var totalCredits3 = 0;
    var totalGPA3 = 0;

    gpaList3.forEach(function(selectElement3) {
        var selectedValue3 = parseFloat(selectElement3.value);
        var credits3 = parseFloat(selectElement3.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue3) && selectedValue3 > 0) {
            earnedCredits3 += credits3;
            totalGPA3 += selectedValue3 * credits3;
        }

        if (selectedValue3 != 0) {
            totalCredits3 += credits3;
        }
    });

    var avgGPA3 = totalGPA3 / totalCredits3;
    var cumulativeGPA3 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + parseFloat(document.getElementById('cumulativeGPA12').textContent + parseFloat(document.getElementById('cumulativeGPA2').textContent)) + parseFloat(document.getElementById('cumulativeGPA22')) + avgGPA3) / 5;

    document.getElementById('avgGPA3').textContent = avgGPA3.toFixed(3);
    document.getElementById('cumulativeGPA3').textContent = cumulativeGPA3.toFixed(3);
    document.getElementById('earnedCredits3').textContent = earnedCredits3;
    document.getElementById('totalCredits3').textContent = totalCredits3 + parseFloat(document.getElementById('totalCredits22').textContent);
}

// nam 3 ki 2

function calculateGPA32() {
    var gpaList32 = document.querySelectorAll('.ki32-text select');
    var earnedCredits32 = 0;
    var totalCredits32 = 0;
    var totalGPA32 = 0;

    gpaList32.forEach(function(selectElement32) {
        var selectedValue32 = parseFloat(selectElement32.value);
        var credits32 = parseFloat(selectElement32.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue32) && selectedValue32 > 0) {
            earnedCredits32 += credits32;
            totalGPA32 += selectedValue32 * credits32;
        }

        if (selectedValue32 != 0) {
            totalCredits32 += credits32;
        }
    });

    var avgGPA32 = totalGPA32 / totalCredits32;
    var cumulativeGPA32 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + parseFloat(document.getElementById('cumulativeGPA12').textContent + parseFloat(document.getElementById('cumulativeGPA2').textContent)) + parseFloat(document.getElementById('cumulativeGPA22')) + parseFloat(document.getElementById('cumulativeGPA3')) + avgGPA32) / 6;

    document.getElementById('avgGPA32').textContent = avgGPA32.toFixed(3);
    document.getElementById('cumulativeGPA32').textContent = cumulativeGPA32.toFixed(3);
    document.getElementById('earnedCredits32').textContent = earnedCredits32;
    document.getElementById('totalCredits32').textContent = totalCredits32 + parseFloat(document.getElementById('totalCredits3').textContent);
}

//nam 4 ki 1 

function calculateGPA4() {
    var gpaList4 = document.querySelectorAll('.ki4-text select');
    var earnedCredits4 = 0;
    var totalCredits4 = 0;
    var totalGPA4 = 0;

    gpaList4.forEach(function(selectElement4) {
        var selectedValue4 = parseFloat(selectElement4.value);
        var credits4 = parseFloat(selectElement4.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue4) && selectedValue4 > 0) {
            earnedCredits4 += credits4;
            totalGPA4 += selectedValue4 * credits4;
        }

        if (selectedValue4 != 0) {
            totalCredits4 += credits4;
        }
    });

    var avgGPA4 = totalGPA4 / totalCredits4;
    var cumulativeGPA4 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + parseFloat(document.getElementById('cumulativeGPA12').textContent + parseFloat(document.getElementById('cumulativeGPA2').textContent)) + parseFloat(document.getElementById('cumulativeGPA22')) + parseFloat(document.getElementById('cumulativeGPA3')) + parseFloat(document.getElementById('cumulativeGPA33'))+ avgGPA4) / 7;

    document.getElementById('avgGPA4').textContent = avgGPA4.toFixed(3);
    document.getElementById('cumulativeGPA4').textContent = cumulativeGPA4.toFixed(3);
    document.getElementById('earnedCredits4').textContent = earnedCredits4;
    document.getElementById('totalCredits4').textContent = totalCredits4 + parseFloat(document.getElementById('totalCredits32').textContent);
}

//nam 4 ki 2

function calculateGPA42() {
    var gpaList42 = document.querySelectorAll('.ki42-text select');
    var earnedCredits42 = 0;
    var totalCredits42 = 0;
    var totalGPA42 = 0;

    gpaList42.forEach(function(selectElement42) {
        var selectedValue42 = parseFloat(selectElement42.value);
        var credits42 = parseFloat(selectElement42.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue42) && selectedValue42 > 0) {
            earnedCredits42 += credits42;
            totalGPA42 += selectedValue42 * credits42;
        }

        if (selectedValue42 != 0) {
            totalCredits42 += credits42;
        }
    });

    var avgGPA42 = totalGPA42 / totalCredits42;
    var cumulativeGPA42 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + parseFloat(document.getElementById('cumulativeGPA12').textContent + parseFloat(document.getElementById('cumulativeGPA2').textContent)) + parseFloat(document.getElementById('cumulativeGPA22')) + parseFloat(document.getElementById('cumulativeGPA3')) + parseFloat(document.getElementById('cumulativeGPA33')) + parseFloat(document.getElementById('cumulativeGPA4'))+ avgGPA42) / 8;

    document.getElementById('avgGPA42').textContent = avgGPA42.toFixed(3);
    document.getElementById('cumulativeGPA42').textContent = cumulativeGPA42.toFixed(3);
    document.getElementById('earnedCredits42').textContent = earnedCredits42;
    document.getElementById('totalCredits42').textContent = totalCredits42 + parseFloat(document.getElementById('totalCredits4').textContent);
}

// ki thuc tap 

function calculateGPA5() {
    var gpaList5 = document.querySelectorAll('.ki5-text select');
    var earnedCredits5 = 0;
    var totalCredits5 = 0;
    var totalGPA5 = 0;

    gpaList5.forEach(function(selectElement5) {
        var selectedValue5 = parseFloat(selectElement5.value);
        var credits5 = parseFloat(selectElement5.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue5) && selectedValue5 > 0) {
            earnedCredits5 += credits5;
            totalGPA5 += selectedValue5 * credits5;
        }

        if (selectedValue5 != 0) {
            totalCredits5 += credits5;
        }
    });

    var avgGPA5 = totalGPA5 / totalCredits5;
    var cumulativeGPA5 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + parseFloat(document.getElementById('cumulativeGPA12').textContent + parseFloat(document.getElementById('cumulativeGPA2').textContent)) + parseFloat(document.getElementById('cumulativeGPA22')) + parseFloat(document.getElementById('cumulativeGPA3')) + parseFloat(document.getElementById('cumulativeGPA33')) + parseFloat(document.getElementById('cumulativeGPA4')) + parseFloat(document.getElementById('cumulative42'))+ avgGPA42) / 9;

    document.getElementById('avgGPA5').textContent = avgGPA5.toFixed(3);
    document.getElementById('cumulativeGPA5').textContent = cumulativeGPA5.toFixed(3);
    document.getElementById('earnedCredits5').textContent = earnedCredits5;
    document.getElementById('totalCredits5').textContent = totalCredits5 + parseFloat(document.getElementById('totalCredits42').textContent);
}

// khoa luan tot nghiep 

function calculateGPA52() {
    var gpaList52 = document.querySelectorAll('.ki52-text select');
    var earnedCredits52 = 0;
    var totalCredits52 = 0;
    var totalGPA52 = 0;

    gpaList52.forEach(function(selectElement52) {
        var selectedValue52 = parseFloat(selectElement52.value);
        var credits52 = parseFloat(selectElement52.parentElement.previousElementSibling.textContent);
        
        if (!isNaN(selectedValue52) && selectedValue52 > 0) {
            earnedCredits52 += credits52;
            totalGPA52 += selectedValue52 * credits52;
        }

        if (selectedValue52 != 0) {
            totalCredits52 += credits52;
        }
    });

    var avgGPA52 = totalGPA52 / totalCredits52;
    var cumulativeGPA52 = (parseFloat(document.getElementById('cumulativeGPA1').textContent) + parseFloat(document.getElementById('cumulativeGPA12').textContent + parseFloat(document.getElementById('cumulativeGPA2').textContent)) + parseFloat(document.getElementById('cumulativeGPA22')) + parseFloat(document.getElementById('cumulativeGPA3')) + parseFloat(document.getElementById('cumulativeGPA33')) + parseFloat(document.getElementById('cumulativeGPA4')) + parseFloat(document.getElementById('cumulativeGPA42')) + parseFloat(document.getElementById('cumulativeGPA5'))+ avgGPA42) / 10;

    document.getElementById('avgGPA52').textContent = avgGPA52.toFixed(3);
    document.getElementById('cumulativeGPA52').textContent = cumulativeGPA52.toFixed(3);
    document.getElementById('earnedCredits52').textContent = earnedCredits52;
    document.getElementById('totalCredits52').textContent = totalCredits52 + parseFloat(document.getElementById('totalCredits5').textContent);
}

