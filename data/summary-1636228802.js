$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,501,527",



			"death": "26,740",


			"dailycount": "1,647",



			"dailydeath": "25",



			"date": "11/06",
			"info": "through 6:00pm 11/05/2021",


			"testingaverage": "139,444",


			"peopletested": "9,140,812",

			"positivity": "0.99%",

			"hospitalizations": "664",
			"datehospitalizations": "11/04" 
 

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



