$( document ).ready(function() {
    var data = {
				    "content": { 

								"count": "1,380,415",

								"death": "25,061",


								"dailycount": "3,891",

								"dailydeath": "32",
								"date": "08/21",
								"info": "through 6:00pm 08/20/2021",


								"testingaverage": "114,033",

								"peopletested": "7,897,486",

								"positivity": "3.52%",
								"hospitalizations": "1,775" 

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



