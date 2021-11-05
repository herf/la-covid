$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,499,911",



			"death": "26,719",


			"dailycount": "1,549",



			"dailydeath": "24",



			"date": "11/05",
			"info": "through 6:00pm 11/04/2021",


			"testingaverage": "139,305",


			"peopletested": "9,127,114",

			"positivity": "0.98%",

			"hospitalizations": "650",
			"datehospitalizations": "11/03" 
 

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



