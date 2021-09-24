$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,449,923",


			"death": "25,942",


			"dailycount": "1,900",


			"dailydeath": "32",

			"date": "09/23",
			"info": "through 6:00pm 09/22/2021",

			"testingaverage": "136,874",

			"peopletested": "8,526,365",

			"positivity": "1.44%",

			"hospitalizations": "991",
			"datehospitalizations": "09/21"




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



