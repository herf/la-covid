$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,467,450",

			"death": "26,254",


			"dailycount": "1,222",


			"dailydeath": "28",


			"date": "10/07",
			"info": "through 6:00pm 10/06/2021",

			"testingaverage": "125,517",

			"peopletested": "8,737,512",

			"positivity": "1.17%",

			"hospitalizations": "750",
			"datehospitalizations": "10/05"



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



