$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,463,889",

			"death": "26,160",


			"dailycount": "853",


			"dailydeath": "7",


			"date": "10/04",
			"info": "through 6:00pm 10/03/2021",

			"testingaverage": "126,881",

			"peopletested": "8,694,321",

			"positivity": "1.22%",

			"hospitalizations": "790",
			"datehospitalizations": "10/2"



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



