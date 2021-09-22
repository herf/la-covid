$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,446,348",


			"death": "25,870",


			"dailycount": "1,238",


			"dailydeath": "32",

			"date": "09/21",
			"info": "through 6:00pm 09/20/2021",

			"testingaverage": "156,684",

			"peopletested": "8,492,409",

			"positivity": "1.38%",

			"hospitalizations": "1,034",
			"datehospitalizations": "09/19"




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



