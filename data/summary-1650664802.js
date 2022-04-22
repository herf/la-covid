$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,859,799",


			"death": "31,924",


			"dailycount": "2,056",


			"dailydeath": "12",


			"date": "04/22",
			"info": "through 6:00pm 04/21/2022",

			"testingaverage": "50,074",

			"peopletested": "11,811,038",

			"positivity": "2.45%",

			"hospitalizations": "219",
			"datehospitalizations": "04/21"

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



