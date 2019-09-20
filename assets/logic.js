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
  var initialName = "Thomas"
  var initialDestination = "The Island of Sodor"
  
  var trainName = initialName;
  var destination = initialDestination;
  var firstTrain = "03:30"
  var frequency = "15";
  var nextTrain = "Math";
  var timeRemaining = "We'll Get There";
  
  var table = $("#train-data");
  var train;
  
//   function renderTrains (train) {
//       for (i = 0; i < trainCount; i++){
//         $("#train-data").append(`<tr><td>${trainName}</td><td>${destination}</td><td>${frequency}</td><td>${nextTrain}</td><td>${timeRemaining}</td><tr>`);
//         }
//     }
        
$("#submit").on("click", function (event){
    event.preventDefault();

    trainName = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    console.log(trainName, destination, firstTrain, frequency)

    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
      });

      alert("Train has been added!");

      $("#train-input").val("");
      $("#destination-input").val("");
      $("#time-input").val("");
      $("#frequency-input").val("");
})

    database.ref().on("value", function(snapshot){
        var trainName = snapshot.val().trainName;
        var destination = snapshot.val().destination;
        var firstTrain = snapshot.val().firstTrain;
        var frequency = snapshot.val().firstTrain;
        
        
        $("#train-data > tbody").append(`<tr><td>${trainName}</td><td>${destination}</td><td>${frequency}</td><td>${nextTrain}</td><td>${timeRemaining}</td><tr>`);
    });
    database.ref().on("child_added", function(snapshot) {
        console.log(snapshot.val());


        var trainName = snapshot.val().trainName;
        var destination = snapshot.val().destination;
        var firstTrain = snapshot.val().firstTrain;
        var frequency = snapshot.val().firstTrain;

        console.log(trainName, destination, firstTrain, frequency);

        // var firstTrainFormatted = moment.unix(firstTrain).format("HH:mm");

        // var timeRemaining = moment().diff(moment(firstTrain), "X", "minutes");
        // console.log("Time Remaining: " + timeRemaining);

      $("#train-data > tbody").append(`<tr><td>${trainName}</td><td>${destination}</td><td>${frequency}</td><td>${nextTrain}</td><td>${timeRemaining}</td><tr>`);
      //needs to update when database has been changed 
      
     
    }, function(errorObject) {
        console.log("The read Failed: " + errorObject.code);

    });

    // renderTrains();












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