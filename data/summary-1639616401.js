$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,551,117",



			"death": "27,369",



			"dailycount": "1,850",



			"dailydeath": "19",

			"date": "12/15",
			"info": "through 6:00pm 12/14/2021",


			"testingaverage": "154,211",


			"peopletested": "9,628,444",

			"positivity": "1.17%",

			"hospitalizations": "751",
			"datehospitalizations": "12/13"

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



