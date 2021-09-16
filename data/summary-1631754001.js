$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,437,073",


			"death": "25,748",


			"dailycount": "1,930",


			"dailydeath": "37",

			"date": "09/15",
			"info": "through 6:00pm 09/14/2021",

			"testingaverage": "105,189",

			"peopletested": "8,396,612",

			"positivity": "2.01%",
			"hospitalizations": "1,214"




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



