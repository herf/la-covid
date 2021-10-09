$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,469,790",


			"death": "26,308",


			"dailycount": "1,195",


			"dailydeath": "28",


			"date": "10/09",
			"info": "through 6:00pm 10/08/2021",

			"testingaverage": "126,948",

			"peopletested": "8,770,422",

			"positivity": "1.11%",

			"hospitalizations": "696",
			"datehospitalizations": "10/07"



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



