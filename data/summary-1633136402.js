$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,460,645",



			"death": "26,126",



			"dailycount": "1,485",



			"dailydeath": "20",


			"date": "10/01",
			"info": "through 6:00pm 09/30/2021",

			"testingaverage": "136,041",

			"peopletested": "8,655,532",

			"positivity": "1.19%",

			"hospitalizations": "872",
			"datehospitalizations": "09/29"



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



