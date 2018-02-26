$(document).ready(function(){



	$("#buttonReset").hide();
	
	
	
	
	var blueNum = 0;
	
	var greenNum = 0;
	
	var redNum = 0;
	
	var yellowNum = 0;
	
	var scoreNow = 0;
	
	var matchScore = 0;
	
	var wins = 0;	
	
	var losses = 0;
	
	
	
			 
	
	// On click function is requiring a double click on initial click. Not sure why
	
	
	$("#greenRupee").on('click', function(){
		
		if (greenNum){
			
			scoreNow = scoreNow + greenNum;
			
			document.getElementById("scoreNow").innerHTML = scoreNow;
			
			scoreKeeper();
			
		}else{
			
			greenNum = Math.floor((Math.random() * 11) + 1);
			
		}
		
	});
	
	
	$("#blueRupee").on('click', function(){

		if (blueNum){

			scoreNow = scoreNow + blueNum;


			document.getElementById("scoreNow").innerHTML = scoreNow;


			scoreKeeper();

		}else{

			blueNum = Math.floor((Math.random() * 11) + 1);

		}
		
	});
			$("#yellowRupee").on('click', function(){
		
				if (yellowNum){
		
					scoreNow = scoreNow + yellowNum;
		
					document.getElementById("scoreNow").innerHTML = scoreNow;
		
					scoreKeeper();
		
				}else{
		
					yellowNum = Math.floor((Math.random() * 11) + 1);
		
				}
		
			});
	
			$("#redRupee").on('click', function(){
	
				if (redNum){
	
					scoreNow = scoreNow + redNum;
	
					document.getElementById("scoreNow").innerHTML = scoreNow;
	
					scoreKeeper();
	
				}else{
	
					redNum = Math.floor((Math.random() * 11) + 1);
	
				}
	
			});
	
	
	
	
	
	
	
		function playAgain(){
	
	
			$("#buttonReset").click(function(){
	
				scoreToMeet = 0;
	
				scoreNow = 0;
	
				blueNum = 0;
	
				greenNum = 0;
	
				redNum = 0;
	
				yellowNum = 0;
	
				givenScore();
	
				$("#buttonReset").hide();
	
				$("#rupeeRow").show();
	
			});
	
		};
	
	
	
	
		function scoreKeeper(){
	
			if (scoreNow > matchScore){

				alert("You Lost!");
	
				losses++;
	
				$("#losses").html('Losses: ' + losses);
	
				$("#buttonReset").show();
	
				$("#rupeeRow").hide();
	
				playAgain();
	
			}
	
	
	
			if (scoreNow == matchScore){

				alert("You Won!");
	
				wins++;
	
				$("#wins").html('Wins: ' + wins);
	
				$("#buttonReset").show();
	
				$("#rupeeRow").hide();
	
				playAgain();
	
			};
	
		};
	
	
	
	
		function givenScore(){
	
			matchScore= Math.ceil((Math.random() * 100) + 1);
	
			document.getElementById("scoreToMeet").innerHTML = matchScore;
	
		};
	
	
	
	
	givenScore();
	
	
	
	});