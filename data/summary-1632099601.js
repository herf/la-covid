$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,444,127",


			"death": "25,832",


			"dailycount": "1,322",


			"dailydeath": "5",

			"date": "09/19",
			"info": "through 6:00pm 09/18/2021",

			"testingaverage": "122,257",

			"peopletested": "8,468,728",

			"positivity": "1.73%",
			"hospitalizations": "1,070"




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



