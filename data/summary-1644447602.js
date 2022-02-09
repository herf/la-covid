$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,740,700",


			"death": "29,609",


			"dailycount": "5,100",

			"dailydeath": "103",

			"date": "02/09",
			"info": "through 6:00pm 02/08/2022",

			"testingaverage": "171,145",

			"peopletested": "11,218,135",

			"positivity": "6.99%",

			"hospitalizations": "2,597",
			"datehospitalizations": "02/08"

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



