$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,903,779",


			"death": "32,016",


			"dailycount": "3,407",


			"dailydeath": "9",


			"date": "05/12",
			"info": "through 6:00pm 05/11/2022",

			"testingaverage": "128,579",

			"peopletested": "11,914,254",

			"positivity": "2.17%",

			"hospitalizations": "267",
			"datehospitalizations": "05/11"

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



