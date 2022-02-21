$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,782,953",

			"death": "30,356",

			"dailycount": "2,780",

			"dailydeath": "58",


			"date": "02/20",
			"info": "through 6:00pm 02/19/2022",

			"testingaverage": "138,144",

			"peopletested": "11,354,892",

			"positivity": "3.27%",

			"hospitalizations": "1,391",
			"datehospitalizations": "02/19"


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



