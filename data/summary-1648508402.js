$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,831,103",


			"death": "31,619",


			"dailycount": "751",


			"dailydeath": "26",



			"date": "03/28",
			"info": "through 6:00pm 03/27/2022",

			"testingaverage": "112,767",

			"peopletested": "11,671,471",

			"positivity": "0.63%",

			"hospitalizations": "329",
			"datehospitalizations": "03/27"

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



