var counter = 0;
var fetch_data;

const rankingBody = document.querySelector("#todo-table > tbody");

function loadRankings (){
   
    const request = new XMLHttpRequest();
    request.open("get", "https://jsonplaceholder.typicode.com/todos");
    request.onload = () => {
        try{
           
            const json = JSON.parse(request.responseText);
            populateRankings(json);
        }
        catch(e){
            // console.warn("Could not load rankings :(");
            console.log(e);
        }
       
    };
    request.send();
}
function populateRankings(json){
    // console.log(json);
    //clearsout existing data
    while(rankingBody.firstChild){
        rankingBody.removeChild(rankingBody.firstChild);
    }
    //POPULATE TABLE
   
    json.forEach((row) => {
        // console.log(row);
        const tr = document.createElement("tr");
        var checkbox = document.createElement('input')
            checkbox.type = "checkbox";
            // checkbox.name = "chk";
            // checkbox.className ="chk";
            // checkbox.value = "value";
            checkbox.id = "id";
            
            
           
        tr.appendChild(checkbox);
      
        Object.keys(row).forEach(function (key) {
            if (key == "title" || key == "completed") {
                const td = document.createElement("td");
                td.textContent = row[key];
                console.log(td);
                tr.appendChild(td);
                
                // td.className = 'passive-row';
                //  console.log(td.className);
               

                if (row[key] == true) {
                    td.id ="peek";
                    checkbox.disabled = true;
                    checkbox.id = "chk";
                    // td.className = 'active-row';
                    // console.log(td.className);
                    
                }
                else if (row[key] == false){
                    td.id ="inact";

                }
                       
                              
                
                //console.log(row[key]);
                //    row.forEach((cell) => {
                //    console.log(cell);

                //     });
            }
           
        
        });
        rankingBody.appendChild(tr);

    });
    //PROMISE FUNCTION
    fetch_data = new Promise(function (resolve, reject) {
        $(":checkbox").change(function () {

            if (this.checked) {
                $(this).prop('checked', true);
                counter++;
                console.log("counter", counter);
                if (counter == 5) {
                    resolve();
                }

            }
            else {
                $(this).prop('checked', false);

                counter--;
                if (counter == 0){
                    loadRankings();
                    
                    reject("No completed task yet");
                }

                console.log("counter", counter);

            }


        });

    });
    jQuery(document).ready(function($){
        fetch_data
        .then(function () {  Swal.fire("Congrats!!!", "You have completed 5 tasks!", "success");
                            $(".swal2-modal").css('background-color', 'white');
                            $(".swal2-modal").css('width', '38%');
                            $(".swal2-modal").css('height', '30%');
                            $(".swal2-modal").css('font-style', 'italic');
                            
    
        
          })
        .catch(function (err) { console.log(err) })
    });
    



}



// document.addEventListener("DOMContentLoaded",() => {loadRankings();});
