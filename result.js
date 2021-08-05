
  var firebaseConfig = {
    apiKey: "AIzaSyAdX6m5LjQCDRoJexpkcdVJq-Ye-SkBTXI",
    authDomain: "sports-website-e81d7.firebaseapp.com",
    projectId: "sports-website-e81d7",
    storageBucket: "sports-website-e81d7.appspot.com",
    messagingSenderId: "641771449443",
    appId: "1:641771449443:web:fe537a526aa032f3c59c56"
  };

  firebase.initializeApp(firebaseConfig);

  var UserInputsRef= firebase.database().ref('UserInputs')
   document.getElementById('form').addEventListener("submit",submitform)
   function submitform(e){
     readResults(year);
     e.preventDefault();
     var year= getInputVal('year');
     saveMessages(year);
   }
   function readResults(year){
    var centers;
     var ref=firebase.database().ref(year);
     ref.on('value',(data)=> {
       centers = data.val();
       document.getElementById('centers').innerHTML="<br>1"+ ranks[1].toUpperCase();
       var ranks = data.val();
     }) }
    //  function getInputVal(id){
    //   return document.getElementById(id).value
    // }
    function saveMessages(year){
      var newuserInputsRef = UserInputsRef.push();
      newuserInputsRef.set({
        year:year
      })
      alert("Thank You.");
    }