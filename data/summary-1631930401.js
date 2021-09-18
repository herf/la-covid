$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,440,721",


			"death": "25,799",


			"dailycount": "1,823",


			"dailydeath": "25",

			"date": "09/17",
			"info": "through 6:00pm 09/16/2021",

			"testingaverage": "121,353",

			"peopletested": "8,433,612",

			"positivity": "1.74%",
			"hospitalizations": "1,156"




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



