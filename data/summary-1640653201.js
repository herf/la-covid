$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,623,442",



			"death": "27,555",



			"dailycount": "7,425",



			"dailydeath": "9",

			"date": "12/27",
			"info": "through 6:00pm 12/26/2021",


			"testingaverage": "134,835",


			"peopletested": "9,953,471",

			"positivity": "3.44%",

			"hospitalizations": "904",
			"datehospitalizations": "12/25"

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



