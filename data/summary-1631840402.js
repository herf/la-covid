$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,439,011",


			"death": "25,775",


			"dailycount": "2,023",


			"dailydeath": "28",

			"date": "09/16",
			"info": "through 6:00pm 09/15/2021",

			"testingaverage": "107,548",

			"peopletested": "8,414,408",

			"positivity": "1.94%",
			"hospitalizations": "1,185"




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
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



