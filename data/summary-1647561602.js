$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,817,190",

			"death": "31,408",

			"dailycount": "1,331",

			"dailydeath": "36",


			"date": "03/17",
			"info": "through 6:00pm 03/16/2022",

			"testingaverage": "118,772",

			"peopletested": "11,575,461",

			"positivity": "0.79%",

			"hospitalizations": "495",
			"datehospitalizations": "03/16"

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



