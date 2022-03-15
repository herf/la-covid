$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,814,409",

			"death": "31,343",

			"dailycount": "698",

			"dailydeath": "28",


			"date": "03/15",
			"info": "through 6:00pm 03/14/2022",

			"testingaverage": "121,063",

			"peopletested": "11,556,247",

			"positivity": "0.85%",

			"hospitalizations": "503",
			"datehospitalizations": "03/14"

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



