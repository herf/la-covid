$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,412,240",

			"death": "25,364",

			"dailycount": "2,741",


			"dailydeath": "43",
		
			"date": "09/02" ,
			"info": "through 6:00pm 09/01/2021",


			"testingaverage": "144,497",


			"peopletested": "8,163,913",

			"positivity": "2.31%",
			"hospitalizations": "1,673" 



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



