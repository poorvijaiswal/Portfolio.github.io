const inputBOX= document.getElementById("inputBOX");
const listContainer = document.getElementById("listContainer");

function addTask(completed)
{
    let flag=0;
    if(inputBOX.value === '' ||  myDate.value==='')
    {
        flag=flag+1;
        alert("You must complete all the fields!!");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBOX.value +"<br> Due date: "+ myDate.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    if (flag == 0)
    {
        inputBOX.value ='';
        myDate.value='';
    }

    saveData()
}

listContainer.addEventListener("click", function(e){
    // console.log(e.target.tagName);
    if(e.target.tagName==="LI"){

        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData()
{
    localStorage.setItem("lastData", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("lastData");
}

showTask();