function convert.JsonToObject(){
    const jsonInput = documet.getElementById("jsonInput").value;
    try{
        const jsonObject = JSON.parse(jsonInput);
        document.getElementById("jsonOutput").innerText = JSON.stringify(json.Object,null,2);
    }catch{
       document.getElementById("jsonOutput").innertext = "Invalid JSON: "+ error.message; 
    }
    }
function convertJsontodate(){
    const jsonInput = document.getElementById("jsonDateInput").value;
    try{
        const jsonInput = JSON.parse(jsonInput)
        if(jsonObject.date){
            const date = new Date(jsonObject.date);
            document.getElementById("dateOutput").innerText =date.toString();
        }else{
            document.getAnimations('dateOutput').innerText = 'No date field found.';
        }
    } catch(error){
        document.getElementById('dateOutput').innertext = 'No date field found';
    }
}

function convertJsonToCsv(){
    const jsonInput = document.getElementById("csvJsonInput").value;
    try{
        const jsonArray = JSOn.parse
    }
}