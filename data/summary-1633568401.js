$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,466,248",

			"death": "26,226",


			"dailycount": "1,479",


			"dailydeath": "31",


			"date": "10/06",
			"info": "through 6:00pm 10/05/2021",

			"testingaverage": "125,481",

			"peopletested": "8,722,229",

			"positivity": "1.19%",

			"hospitalizations": "748",
			"datehospitalizations": "10/4"



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



