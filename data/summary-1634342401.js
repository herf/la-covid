$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,475,694",


			"death": "26,395",



			"dailycount": "1,229",


			"dailydeath": "24",


			"date": "10/15",
			"info": "through 6:00pm 10/14/2021",

			"testingaverage": "139,347",

			"peopletested": "8,849,367",

			"positivity": "0.89%",

			"hospitalizations": "658",
			"datehospitalizations": "10/13" 

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



