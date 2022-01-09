$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,967,443",




			"death": "27,785",




			"dailycount": "45,584",




			"dailydeath": "13",

			"date": "01/09",
			"info": "through 6:00pm 01/08/2022",


			"testingaverage": "114,928",


			"peopletested": "10,317,631",

			"positivity": "23.07%",

			"hospitalizations": "3,364",
			"datehospitalizations": "01/07"

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



