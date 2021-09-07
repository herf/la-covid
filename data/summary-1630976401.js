$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,420,560",


			"death": "25,456",


			"dailycount": "1,540",



			"dailydeath": "11",

			"date": "09/06",
			"info": "through 6:00pm 09/05/2021",


			"testingaverage": "1,47,130",


			"peopletested": "8,248,729",

			"positivity": "1.98%",
			"hospitalizations": "1,480"




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



