var siteNameInput= document.getElementById('siteName');
var siteUrlInput= document.getElementById('siteUrl');
var siteListContainer=[];


if(localStorage.getItem('site')!==null){
    siteListContainer= JSON.parse(localStorage.getItem('site'));
    display()
}
  


function addSite(){
    var site={
code: siteNameInput.value,
url: siteUrlInput.value
    }

  
        var nameRegex = /^\w{3,}(\s+\w+)*$/;
        var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
      
        if (!urlRegex.test(siteUrlInput.value) || !nameRegex.test(siteNameInput.value)) {
            alert(`
                Site Name or Url is not valid, Please follow the rules below :
                Site name must contain at least 3 characters
                Site URL must be a valid one ex:("https://example.com")
    `);
            
        }
        else{
            siteListContainer.push(site);
            localStorage.setItem('site', JSON.stringify(siteListContainer));
            display()
        }
      

    clearform()
   }
   

   function clearform(){
    siteNameInput.value=null;
    siteUrlInput.value=null;
}


function display(){
    var cartona='';
    for(var i=0; i<siteListContainer.length;i++){
cartona+=`

      <tr>
        <td class=" fs-5 pt-2">${[i+1]}</td>
        <td scope="row" class="fs-5 pt-2">${siteListContainer[i].code}</td>
           <td><button onclick="visitSite(${i})" class=" btn btn-success "> <i class="fa-solid fa-eye" style="color: #ffffff;"></i> Visit</button></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger"> <i class="fa-solid fa-trash" style="color: #ffffff;"></i> Delete</button></td>
      </tr>
`

 //  <td>${siteListContainer[i].url}</td>
    }

    document.getElementById('table-body').innerHTML=cartona;
}




function deleteSite(deletedIndex) {
   siteListContainer.splice(deletedIndex,1)
    display();
 localStorage.setItem('site', JSON.stringify(siteListContainer))
 }


 function visitSite(websiteIndex) {
    window.open(siteListContainer[websiteIndex].url);
  }


