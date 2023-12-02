// THIS WEB APP IS IN WORKING PROCESS AND SOME OF THE FEATURES MIGHT NOT BE
// WORKING AND YOU MAY GET EXPERIENCE UNEXPECTED 
// date of initiated : 1st Nov 2023
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
let goToRight = document.querySelectorAll('.goToRight');
let delBtn = document.querySelector('.delBtn');
let Default = document.querySelector('.Default');
let defaultConfirm = document.querySelector('.defaultConfirm');
let deflYes = document.querySelector('#deflYes');
let settingOptionsBellowThemes = document.querySelector('.settingOptionsBellowThemes');
let settingChildren = document.querySelectorAll('.settingChildren');
let deflNo = document.querySelector('#deflNo');
let binContainer = document.querySelector('.binContainer');
let changeFontColorChild = document.querySelector('.changeFontColorChild');
let changeFont = document.querySelector('.changeFont');
let lockNotesParentDiv = document.querySelector('.lockNotesParentDiv');
let notes ='';
let recoverIcon ='';


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
    if(newNotes.classList.contains('hrCenterTransform')){
        newNotes.style.display="flex"
        mainContainer.style.opacity="0"
        newNotes.classList.remove('hrCenterTransform');
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
let notePreview = document.createElement('p')
let createdParaNotes = document.createElement('p')
let createdTitle= document.createElement('h1')
let createdParaDates = document.createElement('p')
let createdDeleteIcon = document.createElement('img')

// Seeeting Value of Notes, Title etc
createdParaNotes.innerHTML=textBox.value;
createdTitle.innerHTML=title.value;
createdParaDates.innerHTML=getCurrentDate();
createdDeleteIcon.src="images/cross.png";
notePreview.textContent="Click to See Notes";


createdParaNotes.setAttribute('class', 'explainedPara');  //setting class on para
NotesContainer.setAttribute('class', 'mainContainerChildren');  //setting class on para
createdParaDates.setAttribute('class', 'timeDates');  //setting class on date
createdDeleteIcon.setAttribute('class', 'deleteNotes');  //setting class on deleteIcon
notePreview.setAttribute('class', 'notePreview');  //setting class on notePreview


NotesContainer.append(notePreview) //Appending notePreview
NotesContainer.append(createdTitle) //Appending Title
NotesContainer.append(createdParaNotes) //Appending para
NotesContainer.append(createdParaDates) //Appending Date
NotesContainer.append(createdDeleteIcon) //Appending deleteIcon

mainContainer.append(NotesContainer)    //Appending Div, which contains notes, title, icon, date
mainContainer.style.opacity="0" //Hiding all Notes while Submitting



NotesContainer.addEventListener('click', (e)=>{
     mainContainerChildren = document.querySelectorAll(".mainContainer .mainContainerChildren")

       for(let i=0; i<mainContainerChildren.length; i++){
      if(e.target.tagName==="DIV"){
        mainContainerChildren[i].style.display="none";
      }  
    } 
    deleteAllNotes.classList.add('inButton')      
    // If clicked item is div then 
    if(e.target.tagName === "DIV" && e.target.closest('.mainContainer')){
      // Show all paragrraph  
      let explainedPara= document.querySelectorAll('.explainedPara');
      explainedPara.forEach(function(elem){
        elem.style.opacity=1;
      })
      // HIde Note preview 
      let notePreview = document.querySelectorAll('.notePreview');
      notePreview.forEach(function(elem){
        elem.style.opacity="0";
        elem.style.pointerEvents="none";
      })
      mainContainer.style.gridTemplateColumns="1fr";
  e.target.style.display="block"
  e.target.style.height="100vh";
  // rempve delete icon on bottom after click on any specific note 
  let deleteNotes = document.querySelectorAll('.deleteNotes')
  deleteNotes.forEach((elem)=>{
        elem.style.display="none";
      })
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
    let mainContainerChildren = document.querySelectorAll(".mainContainer .mainContainerChildren"); //

    mainContainerChildren.forEach(function(elem, ind){
      elem.addEventListener('click', function(e){
        if(e.target.tagName==="IMG"){
        binContainer.append(e.target.parentElement)
        chckNtsInTrashAndChngIcn()
       }

    //Function called to check if there is any notes or not after deleting notes 
checkEmptyNess()
  })
    })
  }
}
checkLengthForDelete();
// -----------------------------
})
// When Click on Back Button then
leftRight.children[0].addEventListener('click', ()=>{
  if(window.getComputedStyle(mainContainer).getPropertyValue('display')==='grid'){
    mainContainer.style.gridTemplateColumns="1fr 1fr 1fr";
  }
// Hide all paragraph in front page 
  let explainedPara = document.querySelectorAll(".explainedPara");
explainedPara.forEach(function(elem){
  elem.style.opacity='0';
})

      // Show para Note preview 
      let notePreview = document.querySelectorAll('.notePreview');
      notePreview.forEach(function(elem){
        elem.style.opacity="1";
      })
newNotes.classList.add('hrCenterTransform');
  // If binContainer is shown then hide hide instanceof. if colorPanel is shown then hide it
  if(!binContainer.classList.contains('translateY-200') || !changeFontColorChild.parentElement.classList.contains('translateY-200') || !changeFont.classList.contains('translateY-244') || !lockNotesParentDiv.classList.contains('translateY-200')){
  //Hide bin container
  binContainer.classList.add('translateY-200');
  // HIde color panel
  changeFontColorChild.parentElement.classList.add('translateY-200');
// Hide change font container 
changeFont.classList.add('translateY-244');
// Hide "set lock password" interface 
lockNotesParentDiv.classList.add('translateY-200');

// Hide Password setting warning 
lockNotesParentDiv.children[3].classList.add('translateY-704')

//all options wiil be VISIBLE of settings 
  goToRight.forEach((elem)=>{
    elem.classList.remove('translateX')
  })
}
else{
  // Hide Settings options if no more back 
  settingsParentDiv.classList.add("translateY-244");
  settingsParentDiv.classList.remove("transform0");

  secondHeading.innerHTML="Notes";
  // Show Added Notes
  mainContainer.style.opacity="1"
  mainContainer.style.pointerEvents="all"  //show all notes  
  submitButton.value="Add New" //

// Making maincontainer shown 
mainContainer.classList.remove('displayNone');
// Show back button 
submitButton.classList.remove('displayNone');
  // Making all notes 80Px height
  let mainContainerChildren = document.querySelectorAll(".mainContainer .mainContainerChildren")
mainContainerChildren.forEach(function(elem, index){
  elem.style.display="block"  //Making all added notes Shown
  elem.style.height="80px"    //Making all notes height 80px
})
let deleteNotes = document.querySelectorAll('.deleteNotes')
  deleteNotes.forEach((elem)=>{
    elem.style.display="block";
  })
}
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
  // Setting options appear when click on settings 
  settingsParentDiv.classList.remove("translateY-244");
  settingsParentDiv.classList.add("transform0");

  submitButton.classList.add('displayNone');
  mainContainer.classList.add('displayNone');
  newNotes.style.display="none"

  secondHeading.innerHTML="Notes/Settings" 
})
// THEMES sECTION 
// themes 1
function theme1(){
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
}
themesParen.children[0].children[1].addEventListener('click', ()=>{    //themes 1
  theme1()
})
// ------------------------------------

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

// Deletes all notes
// Message seeting for DeleteAllNotes

document.querySelector('.deleteAllNotes').addEventListener('click', ()=>{
  defaultConfirm.style.display="none";
  Default.style.display="block";
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
  notes = document.querySelectorAll('.mainContainer .mainContainerChildren')
  deleteConfirm.style.display="none";
  deleteAllNotes.style.display="flex";
  Default.style.display="block";
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
  Default.style.display="block";
})
// ----------------------------------------------------

// When click on set default 
Default.addEventListener('click', ()=>{
  defaultConfirm.style.display="block";
  Default.style.display="none";
  deleteConfirm.style.display="none";
  deleteAllNotes.style.display="block";

  // When clicked on YEs in reset default 
  deflYes.addEventListener('click', ()=>{
    Default.style.display="block";
    defaultConfirm.style.display="none";
    // set default theme 
    theme1();
    // set default font 
  })
  // When clicked on no in reset default 
  deflNo.addEventListener('click', ()=>{
    Default.style.display="block";
    defaultConfirm.style.display="none";
  })

})
// --------------------------

// when click on Trash button
settingOptionsBellowThemes.children[6].children[1].addEventListener('click', ()=>{

  // As soon as clicked on "Trash" Button all options wiil be hidden in right side 
  goToRight.forEach((elem)=>{
    elem.classList.add('translateX')
  })
  settingOptionsBellowThemes.children[0].classList.toggle('transform120')
  binContainer.classList.remove('translateY-200');
  checkBinEmptiness();
})
// -------------------

// Recycle Bin 
// FUnction to check if in recycle bin there is any notes or not if there is notes 
// then show delete all button, if not then show message 
function checkBinEmptiness(){
  if ([...binContainer.children].some(child => child.classList.contains('mainContainerChildren'))){
    binContainer.children[0].style.display="block";
    binContainer.children[1].style.display="none";
  }
  else{
    binContainer.children[0].style.display="none";
    binContainer.children[1].style.display="block";
  }
}
// function check if there are any deleted notes in trash or not 
// if there then change the icon form delete to recover
function chckNtsInTrashAndChngIcn(){ 
  if(binContainer.children.length>=2){
    let deleteNotes = document.querySelectorAll(".binContainer .mainContainerChildren .deleteNotes");
    deleteNotes.forEach((deleteIcon)=>{
      deleteIcon.src="images/recover.webp";
    })
  }
}
// If clicked on recover icon in recycle bin then 
binContainer.addEventListener('click', function(event) {
  // check if only clicked on recover image icon 
  if(event.target.tagName==="IMG"){
  // changing icon recover to delete when it goes in notes again
  event.target.src="images/cross.png";
  mainContainer.append(event.target.parentElement);
  // show empty messge if no notes 
  checkBinEmptiness()
  checkEmptyNess();
}
});

// Delete all notes if clicked on "Delete all" In recycle Bin
binContainer.children[0].addEventListener("click", ()=>{
let notes = document.querySelectorAll(".binContainer .mainContainerChildren");
 notes.forEach((deletableElem)=>{
  deletableElem.remove();
 })
   // show empty messge if no notes in recycleBin
   checkBinEmptiness()
})
// -------------------------------------------------------------------
// }
  
// When click on "Chnge Color" then bring change color section 
settingOptionsBellowThemes.children[4].children[1].addEventListener('click', ()=>{
changeFontColorChild.parentElement.classList.remove('translateY-200');
})

// When click on any particular color input box then change the color  
changeFontColorChild.addEventListener('input', (element)=>{
if(element.target.tagName==='INPUT'){

if(element.target.id=="upperHeading"){
optionsContainer.parentNode.children[0].style.color=element.target.value;
}
else if(element.target.id=="noteHeading"){
  let mainContainerChildrenH4 = document.querySelectorAll('.mainContainerChildren h1');
 mainContainerChildrenH4.forEach((elem)=>{
  elem.style.color=element.target.value;
 })
}
else if(element.target.id=="paraGraph"){
  let explainedPara = document.querySelectorAll('.mainContainerChildren .explainedPara');
  explainedPara.forEach((elem)=>{
  elem.style.color=element.target.value;
 })
}
else if(element.target.id=="secHeading"){
    secondHeading.style.color=element.target.value;
}
else if(element.target.id=="newNoteAdd"){
  submitButton.style.color=element.target.value;
}
else if(element.target.id=="settingsOpt"){
  let settingsOpt = document.querySelectorAll('.settingChildren button');
  // submitButton.style.color=element.target.value;
settingsOpt.forEach((elem)=>{
  elem.style.color="element.target.value";
})
}
}
})


// When click on change font then bring font changer option 
settingOptionsBellowThemes.children[2].children[1].addEventListener('click', ()=>{
  changeFont.classList.remove('translateY-244');
  // changeFont.classList.add('transform0');
  })
  
// When click on Note setting font change | first
// changeFont.children[0].children[0].addEventListener('click')
changeFont.addEventListener('click', (event)=>{
  // If clicked on Note setting font 
  if(event.target.id=="f0"){
    changeFont.children[0].children[1].classList.toggle('noHeight');

// Changing App setting font 
    changeFont.children[0].children[1].addEventListener('change',function(){
      var selectedFOnt = this.value;
  optionsContainer.parentNode.children[0].style.fontFamily=selectedFOnt;    //upper heading
  secondHeading.style.fontFamily=selectedFOnt;    //sewcond heading
  settingsParentDiv.style.fontFamily=selectedFOnt;  //inside settings' options
  emptyAlert.style.fontFamily=selectedFOnt;     //empty message alert
  submitButton.style.fontFamily=selectedFOnt;   //submit btn
  optionsContainer.style.fontFamily=selectedFOnt;   //main page rigth side option box
  textBox.style.fontFamily=selectedFOnt;   //new notes section Para Box
  title.style.fontFamily=selectedFOnt;   //new notes section title
    })
  }
  if(event.target.id=="f1"){
    changeFont.children[1].children[1].classList.toggle('noHeight');

// Changing Notes heading Font
    changeFont.children[1].children[1].addEventListener('change',function(){
      var selectedFOnt = this.value;
      // Heading 
      let mainContainerChildrenH4 = document.querySelectorAll('.mainContainerChildren h1');
      mainContainerChildrenH4.forEach((elem)=>{
       elem.style.fontFamily=selectedFOnt;
      })
    })
  }
  if(event.target.id=="f2"){
    changeFont.children[2].children[1].classList.toggle('noHeight');

// Changing Notes heading Font
    changeFont.children[2].children[1].addEventListener('change',function(){
      var selectedFOnt = this.value;
      // Paragraph 
      let explainedPara = document.querySelectorAll('.mainContainerChildren .explainedPara');
      explainedPara.forEach((elem)=>{
      elem.style.fontFamily=selectedFOnt;
      console.log('s;k');
      
     })
    })
  }
})

// Lock Notes 
// When click on any lock numbers and the remove number button 'X'
let clickedNum= ''; //to get clicked password number 
lockNotesParentDiv.children[1].addEventListener('click',function(elem){
// to make sure clicked on number only 
 if(elem.target.tagName==='H3'){
  clickedNum += elem.target.textContent;
  lockNotesParentDiv.children[0].textContent=clickedNum;
 }
 else if(elem.target.tagName==='H2'){
 let trimedClickedNum=  clickedNum.slice(0, -1);
 clickedNum = trimedClickedNum;
 lockNotesParentDiv.children[0].textContent=trimedClickedNum;
 
// Hide Password setting warning 
lockNotesParentDiv.children[3].classList.add('translateY-704')
 }
})

// When Click on 'proceed' to set lock 
lockNotesParentDiv.children[2].children[0].addEventListener('click', function(){
  lockNotesParentDiv.children[3].classList.remove('translateY-704')
//  If there is no password written and user clicked on "proceed"
if(clickedNum.length==0){
  console.log('write the password first');
}
if(clickedNum.length<=3){
  console.log('please write more than 3 digit');
}
console.log(lockNotesParentDiv.children[3]);
})

// When click on "set password" in settings 
settingOptionsBellowThemes.children[5].children[1].addEventListener('click', function(){
  lockNotesParentDiv.classList.remove('translateY-200');
})






// Hide homepage alert message after 5 secs 
setTimeout(function () {
  document.querySelector('.alert-dark').style.transform = 'translateY(-100%)';
}, 7000);

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
