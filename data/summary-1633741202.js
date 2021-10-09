$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,468,634",


			"death": "26,284",


			"dailycount": "1,204",


			"dailydeath": "30",


			"date": "10/08",
			"info": "through 6:00pm 10/07/2021",

			"testingaverage": "125,794",

			"peopletested": "8,751,974",

			"positivity": "1.14%",

			"hospitalizations": "721",
			"datehospitalizations": "10/06"



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



