$( document ).ready(function() {
    var data = {
				    "content": { 

			"count": "1,442,808",


			"death": "25,828",


			"dailycount": "2,130",


			"dailydeath": "29",

			"date": "09/18",
			"info": "through 6:00pm 09/17/2021",

			"testingaverage": "122,044",

			"peopletested": "8,453,330",

			"positivity": "1.73%",
			"hospitalizations": "1,125"




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



