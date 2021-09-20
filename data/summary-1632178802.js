$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,445,121",


			"death": "25,838",


			"dailycount": "996",


			"dailydeath": "6",

			"date": "09/20",
			"info": "through 6:00pm 09/19/2021",

			"testingaverage": "149,325",

			"peopletested": "8,479,027",

			"positivity": "1.53%",

			"hospitalizations": "1,053",
			"datehospitalizations": "09/18"




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



