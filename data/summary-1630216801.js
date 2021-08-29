$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,400,837",

			"death": "25,240",

			"dailycount": "3,627",


			"dailydeath": "30",
		
			"date": "08/28" ,
			"info": "through 6:00pm 08/27/2021",


			"testingaverage": "135,865",


			"peopletested": "8,066,931",

			"positivity": "2.75%",
			"hospitalizations": "1,708" 



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



