$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,549,296",



			"death": "27,352",



			"dailycount": "1,138",



			"dailydeath": "15",

			"date": "12/14",
			"info": "through 6:00pm 12/13/2021",


			"testingaverage": "154,534",


			"peopletested": "9,615,238",

			"positivity": "1.16%",

			"hospitalizations": "718",
			"datehospitalizations": "12/12"

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



