$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,397,236",

			"death": "25,211",

			"dailycount": "2,789",


			"dailydeath": "30",
		
			"date": "08/27" ,
			"info": "through 6:00pm 08/26/2021",


			"testingaverage": "138,036",


			"peopletested": "8,034,572",

			"positivity": "2.75%",
			"hospitalizations": "1,723" 



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



