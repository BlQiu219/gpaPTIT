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