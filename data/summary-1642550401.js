$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,311,568",



			"death": "28,122",


			"dailycount": "22,688",


			"dailydeath": "37",

			"date": "01/18",
			"info": "through 6:00pm 01/17/2022",

			"testingaverage": "245,124",


			"peopletested": "10,695,884",

			"positivity": "19.95%",


			"hospitalizations": "4,701",
			"datehospitalizations": "01/17"


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



