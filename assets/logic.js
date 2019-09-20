var firebaseConfig = {
    apiKey: "AIzaSyAatTV_0ToLA8vNFCSt0vMF4lwxNBEUN38",
    authDomain: "train-tracker-a1c13.firebaseapp.com",
    databaseURL: "https://train-tracker-a1c13.firebaseio.com",
    projectId: "train-tracker-a1c13",
    storageBucket: "",
    messagingSenderId: "770599817204",
    appId: "1:770599817204:web:f66b4e68e008b5239933a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  
  var trainName = $("#train-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#time-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var nextTrain = "Math";
  var timeRemaining = "We'll Get There";
  
  var table = $("#train-data");
  
  
  function renderTrains (train) {
      // for (i = 0; i < trainCount; i++){
          //     var row = $("<tr>").attr("id", "train"+ [i + 1]);
          
          //     row.append(nameData);
          //     table.append(row);
          //   }
        }
        
$("#submit").on("click", function (event){
    event.preventDefault();

    trainName = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    console.log(trainName, destination, firstTrain, frequency)

    $("#train-data").append(`<tr><td>${trainName}</td><td>${destination}</td><td>${frequency}</td><td>${nextTrain}</td><td>${timeRemaining}</td><tr>`);

    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
      });

})


    database.ref().on("child_added", function(snapshot) {
      var row = $("<tr>").attr("id", "train");

      $("#employee-data").append(`<tr><td>${trainName}</td><td>${destination}</td><td>${frequency}</td><td>${nextTrain}</td><td>${timeRemaining}</td><tr>`);
      //needs to update when database has been changed 
      renderTrains();
      $("#employee-data").append(snapshot.val());
    })














//   function renderTrains (trains){
//     for (i = 0; i < trainsCount; i++){
//       var row = $("<tr>").attr("id", "train"+ [i + 1]);
//       var nameData = $("<td>").text(name);
//       var roleData = $("<td>").text(role);
//       var startDateData = $("<td>").text(startDate);
//       var monthlyRateData = $("<td>").text(monthlyRate);
      
//       row.append(nameData);
//       table.append(row);
//     }
    
//   }