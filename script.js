document.addEventListener('DOMContentLoaded', function() {
window.addEventListener('load', function(){
let submitButton = document.getElementById('newBtn');   //submitBTN
let textBox = document.getElementById('textBox');       //Paragraph
let title = document.getElementById('title');           //Title
let secondHeading = document.querySelector('.secondHeading')
let  optionsContainer = document.getElementById("optionsContainer"); //

let mainContainer = document.querySelector('.mainContainer');   //in which para, icon, dates. [A notes Div]
let emptyAlert = document.querySelector('.emptyAlert')
let leftRight = document.querySelector('.leftRight');     //Parrent who have backButton, More and Search button.
let newNotes = document.querySelector('.newNotes');     //Consists paraArea, TItle, 
let optionsContainerOptions = document.querySelectorAll("#optionsContainer .option"); //
let settingsParentDiv = document.querySelector('.settingsParentDiv');
let alertTop = document.querySelector('.alertTop');     //Top Alert 
let themesParen = document.querySelector('.themesParen');     
let messageContainer = document.querySelector('.messageContainer');     
let deleteAllNotes = document.querySelector('.deleteAllNotes')
let deleteConfirm = document.querySelector('.deleteConfirm')
let delBtn = document.querySelector('.delBtn')
let notes ='';

// GETTING DATE FUNCTION HERE 
function getCurrentDate(){
  var currentDate = new Date()
  var year= currentDate.getFullYear();
var month= ('0' + (currentDate.getMonth()+1)).slice(-2);
var day= (`0`+ currentDate.getDate()).slice(-2);

var formattedDate = year + '/' +month +'/' + day;
return formattedDate;    
}

// When Click on submitButton 
submitButton.addEventListener('click', ()=>{
  // If Notes are being shown then hide all previous notes and open to fill newNotes Section 
    if(window.getComputedStyle(newNotes).getPropertyValue('display')==='none'){
        newNotes.style.display="flex"
        mainContainer.style.opacity="0"
        mainContainer.style.pointerEvents="none" 
        submitButton.value="Save Note"
      }
else{   // And if Add New Notes Section is shown then append the written notes 
  if(title.value==''){   //If Title and Para submitted empty then show alert.
    alertTop.style.backgroundColor="#ff000024"
    alertTop.innerHTML="Title is Mendatory"
    setTimeout(showAlert, 150)
  }
  else{
    if(textBox.value==''){
      alertTop.innerHTML="Note added with title only"
      alertTop.style.backgroundColor="#00800024"
      setTimeout(showAlert, 150)
    }
mainContainer.style.opacity="0" //Hiding all Notes while Submitting
let NotesContainer = document.createElement('div')
let createdParaNotes = document.createElement('p')
let createdTitle= document.createElement('h1')
let createdParaDates = document.createElement('p')
let createdDeleteIcon = document.createElement('img')

// Seeeting Value of Notes, Title etc
createdParaNotes.innerHTML=textBox.value;
createdTitle.innerHTML=title.value;
createdParaDates.innerHTML=getCurrentDate();
createdDeleteIcon.src="images/cross.png";

NotesContainer.setAttribute('class', 'mainContainerChildren');  //setting class on para
createdParaDates.setAttribute('class', 'timeDates');  //setting class on date
createdDeleteIcon.setAttribute('class', 'deleteNotes');  //setting class on deleteIcon

NotesContainer.append(createdTitle) //Appending Title
NotesContainer.append(createdParaNotes) //Appending para
NotesContainer.append(createdParaDates) //Appending Date
NotesContainer.append(createdDeleteIcon) //Appending deleteIcon

mainContainer.append(NotesContainer)    //Appending Div, which contains notes, title, icon, date
mainContainer.style.opacity="0" //Hiding all Notes while Submitting

NotesContainer.addEventListener('click', (e)=>{
     mainContainerChildren = document.querySelectorAll(".mainContainerChildren")

       for(let i=0; i<mainContainerChildren.length; i++){
      if(e.target.tagName==="DIV"){
        mainContainerChildren[i].style.display="none" 
      }  
       } 
// If clicked item is div then 
if(e.target.tagName==="DIV"){
  e.target.style.display="block"
  e.target.style.height="100vh" 
} 
})

}
// Function to show and Hide alert 
function showAlert(){
  alertTop.style.opacity=1;
}
function hideAlert(){
  alertTop.style.opacity=0;
}
//if notes contains title and note then show this alert
if(textBox.value!="" && title.value!=""){
  alertTop.style.backgroundColor="#0080004a";
  alertTop.innerHTML="Note Added Succesfully !"   //
  setTimeout(showAlert, 150)
}
setTimeout(hideAlert, 2000)
}
textBox.value="";
title.value="";
checkEmptyNess();
// DELETE NOTES FUNCTION HERE
// ------------
function checkLengthForDelete(){
  if(mainContainer.children.length>1){
    let mainContainerChildren = document.querySelectorAll(".mainContainerChildren"); //

    mainContainerChildren.forEach(function(elem, ind){
      elem.addEventListener('click', function(e){
        if(e.target.tagName==="IMG"){
     e.target.parentElement.remove()
    }
    //Function called to check if there is any notes or not after deleting notes 
checkEmptyNess()
  })
    })
  }
}
// -----------------------------
checkLengthForDelete()
})

// When Click on Back Button then
leftRight.children[0].addEventListener('click', ()=>{
  secondHeading.innerHTML="Notes"
  mainContainer.classList.remove('displayNone');
  submitButton.classList.remove('displayNone');
  settingsParentDiv.classList.add('displayNone')

  mainContainer.style.opacity="1"
  mainContainer.style.pointerEvents="all"  //show all notes  
newNotes.style.display="none";          //hiding Submit Notes Scetion
submitButton.value="Add New" //
let mainContainerChildren = document.querySelectorAll(".mainContainerChildren")
mainContainerChildren.forEach(function(elem, index){
  elem.style.display="block"  //Making all added notes Shown
  elem.style.height="80px"    //Making all notes height 80px

  // remove displaynone after click on back from settings
})
})

// When click on RIght more option 
leftRight.children[2].addEventListener('click', ()=>{
optionsContainerOptions.forEach((elem)=>{
elem.classList.toggle('optionToggle') //show all side options
})
leftRight.children[2].classList.toggle('rotate45Deg') //rotating 45 deg after click on more option
mainContainer.classList.toggle('op17per') //rotating 45 deg after click on more option
})

// If there is no any notes then show empty 
function checkEmptyNess(){
  if(mainContainer.childElementCount<=1){
  emptyAlert.innerHTML="No Notes Right Now"
  }
  else{
    emptyAlert.innerHTML=""
  }
}
checkEmptyNess();


    // Right Side Options //    //RIGHT SIDE OPTION     //RIGHT SIDDE OPTIONS //RIGHT SIDE OPTION
// When clicked on Select as Gallary option 
optionsContainer.children[1].addEventListener('click', ()=>{
mainContainer.classList.toggle('toggleGrid')
})

// When Click on rIGHT TO lEFT
optionsContainer.children[2].addEventListener('click', ()=>{
mainContainer.classList.toggle('columnRevserse')
})

// WHEN CLICK ON SETTINGS 
optionsContainer.children[3].addEventListener('click', ()=>{
  submitButton.classList.add('displayNone');
  mainContainer.classList.add('displayNone');
  newNotes.style.display="none"
  settingsParentDiv.classList.remove('displayNone')
  secondHeading.innerHTML="Notes/Settings" 
})
// THEMES sECTION 
// themes 1
themesParen.children[0].children[1].addEventListener('click', ()=>{    //themes 1
 leftRight.children[0].src="images/back.png";
 leftRight.children[2].src="images/more (2).png";
 secondHeading.style.color="rgb(194, 139, 139)";
 submitButton.style.backgroundColor="#59595996";
 emptyAlert.style.color = "grey";
 emptyAlert.style.backgroundColor = "transparent";

 mainContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/writing-923882_1280.jpg")';
 mainContainer.style.backgroundSize="cover";
 mainContainer.style.backgroundPosition="center";
 document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("images/1.jpg")';

// show message after applying theme 
messageContainer.textContent="Theme Applied Successfully."
messageContainer.style.display = 'block';
// After 2 seconds, hide the message
setTimeout(function () {
    messageContainer.style.display = 'none';
}, 2000);
  // -------------------------------------
  // // Handelling Apply Button Text after click  
  themesParen.children[0].children[1].textContent="Applied";
  themesParen.children[1].children[1].textContent="Apply";
  themesParen.children[2].children[1].textContent="Apply";
  // ------------------------------------
})

// //themes 2 
themesParen.children[1].children[1].addEventListener('click', ()=>{    //themes 1
  leftRight.children[0].src="images/themes1_previous.png";
  leftRight.children[2].src="images/themes1_more (1).png";
  secondHeading.style.color="rgb(77 205 76)";
  submitButton.style.backgroundColor="#59595996";
  emptyAlert.style.color = "#d78484";
  emptyAlert.style.backgroundColor = "transparent";
 mainContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("images/2.jpg")';
 mainContainer.style.backgroundSize="cover";
 mainContainer.style.backgroundPosition="center";
 document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("images/vintage-2168174_1920.jpg")';
   // -------------------------------------
   // // Handelling Apply Button Text after click  
   themesParen.children[0].children[1].textContent="Default";
   themesParen.children[1].children[1].textContent="Applied";
   themesParen.children[2].children[1].textContent="Apply";
   // ------------------------------------
   // show message after applying theme 
   messageContainer.textContent="Theme Applied Successfully."
messageContainer.style.display = 'block';
// After 2 seconds, hide the message
setTimeout(function () {
    messageContainer.style.display = 'none';
}, 2000);
 })

// // themes 3
themesParen.children[2].children[1].addEventListener('click', ()=>{    //themes 1
  leftRight.children[0].src="images/back (1).png";
  leftRight.children[2].src="images/list.png";
  secondHeading.style.color="rgb(80 91 235)";
  submitButton.style.backgroundColor="#971a9996";
  emptyAlert.style.color = "#748d15";
  emptyAlert.style.backgroundColor = "transparent";
 mainContainer.style.background = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("images/1.jpg")';
 mainContainer.style.backgroundSize="cover";
 mainContainer.style.backgroundPosition="center";
 document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("images/book-419589_1920.jpg")';
   // -------------------------------------
   // // Handelling Apply Button Text after click  
   themesParen.children[0].children[1].textContent="Default";
   themesParen.children[1].children[1].textContent="Apply";
   themesParen.children[2].children[1].textContent="Applied";
   // ------------------------------------
      // show message after applying theme 
      messageContainer.textContent="Theme Applied Successfully."
messageContainer.style.display = 'block';
// After 2 seconds, hide the message
setTimeout(function () {
    messageContainer.style.display = 'none';
}, 2000);
 })

document.querySelector('.deleteAllNotes').addEventListener('click', ()=>{
  if(mainContainer.children.length>=2){
deleteConfirm.style.display="block";
deleteAllNotes.style.display="none";

}
else{
  deleteConfirm.style.display="block";
  deleteAllNotes.style.display="none";
}
})
// Delete all notes if clicked on yes 
delBtn.children[0].addEventListener('click', ()=>{
  notes = document.querySelectorAll('.mainContainerChildren')
  deleteConfirm.style.display="none";
  deleteAllNotes.style.display="flex";
if(notes.length>=1){
notes.forEach((elem)=>{
  elem.remove()
})  
messageContainer.textContent="All Notes Deleted"
messageContainer.style.display = 'block';
// After 2 seconds, hide the message
setTimeout(function () {
messageContainer.style.display = 'none';
}, 2000);
checkEmptyNess();
}
    else{
      messageContainer.textContent="Nothing to Delete"
      messageContainer.style.display = 'block';
// After 2 seconds, hide the message
setTimeout(function () {
  messageContainer.style.display = 'none';
}, 2000);
    }
        
})
// if clicked on no then show delete all notes option and hide confirmation
delBtn.children[1].addEventListener('click', ()=>{
  deleteConfirm.style.display="none";
  deleteAllNotes.style.display="flex";
})






// When click on body of page anywhere then hide opened options
document.addEventListener('click', (event)=>{
  if(event.target !==leftRight.children[2]){  //if not clicked on more button 
    leftRight.children[2].classList.remove('rotate45Deg')  //remove 45 deg 
    optionsContainerOptions.forEach((elem)=>{
      elem.classList.remove('optionToggle') //hide all side options
    })
    mainContainer.classList.remove('op17per') 
  }
})
})
});
