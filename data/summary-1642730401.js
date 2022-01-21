$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,385,721",



			"death": "28,282",


			"dailycount": "42,115",


			"dailydeath": "102",

			"date": "01/20",
			"info": "through 6:00pm 01/19/2022",

			"testingaverage": "247,522",


			"peopletested": "10,762,718",

			"positivity": "18.51%",


			"hospitalizations": "4,814",
			"datehospitalizations": "01/19"


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



