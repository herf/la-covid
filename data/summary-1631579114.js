$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,433,465",


			"death": "25,688",


			"dailycount": "5,690",


			"dailydeath": "80",

			"date": "09/11-09/13",
			"info": "through 6:00pm 09/12/2021",

			"testingaverage": "109,894",

			"peopletested": "8,981,017",

			"positivity": "1.95%",
			"hospitalizations": "1,218"




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



