$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,495,014",



			"death": "26,661",


			"dailycount": "896",



			"dailydeath": "17",



			"date": "11/02",
			"info": "through 6:00pm 11/01/2021",


			"testingaverage": "136,734",


			"peopletested": "9,076,030",

			"positivity": "0.82%",

			"hospitalizations": "659",
			"datehospitalizations": "10/31" 
 

					}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.datehospitalizations);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



