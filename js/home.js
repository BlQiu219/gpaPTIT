var calculatorForm = document.getElementById("calculator");
var dataEditorForm = document.getElementById("dataEditor");
var openCalculatorButton = document.getElementById("calculatorButton");
var openDataEditorButton = document.getElementById("dataEditorButton");

openCalculatorButton.addEventListener('click', function() {
    dataEditorForm.style.display = "none";
    calculatorForm.style.display = "block";
});

openDataEditorButton.addEventListener('click', function(){
    calculatorForm.style.display = "none";
        dataEditorForm.style.display = "block";
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