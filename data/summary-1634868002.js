$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,481,814",



			"death": "26,499",


			"dailycount": "1,167",



			"dailydeath": "27",



			"date": "10/21",
			"info": "through 6:00pm 10/20/2021",


			"testingaverage": "143,804",

			"peopletested": "8,940,658",

			"positivity": "0.81%",

			"hospitalizations": "613",
			"datehospitalizations": "10/19" 
 

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



