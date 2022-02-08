$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,731,409",


			"death": "29,457",


			"dailycount": "4,360",

			"dailydeath": "29",

			"date": "02/07",
			"info": "through 6:00pm 02/06/2022",

			"testingaverage": "179,591",

			"peopletested": "11,196,574",

			"positivity": "8.39%",

			"hospitalizations": "2,773",
			"datehospitalizations": "02/06"

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



