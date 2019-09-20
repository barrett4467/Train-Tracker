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
  
  var table = $("#train-data");
  var train;


$("#submit").on("click", function (event){
    event.preventDefault();

    trainName = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    console.log(frequency)

    database.ref().push({
        trainName,
        destination,
        firstTrain,
        frequency
      });

      alert("Train has been added!");

      $("#train-input").val("");
      $("#destination-input").val("");
      $("#time-input").val("");
      $("#frequency-input").val("");
})

    database.ref().on("child_added", function(snapshot) {
        console.log(snapshot.val());


        var trainName = snapshot.val().trainName;
        var destination = snapshot.val().destination;
        var firstTrain = snapshot.val().firstTrain;
        var frequency = snapshot.val().frequency;

        console.log(trainName, destination, firstTrain, frequency);

        var firstTrainConverted = moment(firstTrain, "HH: mm").subtract(1, "years"); 
        var difference = moment().diff(moment(firstTrainConverted), "minutes"); 
        var remainder = difference % frequency;
        var minutesTillTrain = frequency - remainder;
        var nextTrainTime = moment().add(minutesTillTrain, "minutes");
        var timeRemaining = minutesTillTrain;
        var nextTrain = moment(nextTrainTime).format("h:mm");
      $("#train-data > tbody").append(`<tr><td>${trainName}</td><td>${destination}</td><td>${"Every " + frequency + " minutes"}</td><td>${nextTrain}</td><td>${timeRemaining}</td><tr>`);
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