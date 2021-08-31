$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,405,387",

			"death": "25,251",

			"dailycount": "2,339",


			"dailydeath": "6",
		
			"date": "08/30" ,
			"info": "through 6:00pm 08/29/2021",


			"testingaverage": "139,781",


			"peopletested": "8,107,913",

			"positivity": "2.64%",
			"hospitalizations": "1,687" 



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



