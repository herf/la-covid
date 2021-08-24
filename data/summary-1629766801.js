$( document ).ready(function() {
    var data = {
				    "content": { 

							"count": "1,385,505",

							"death": "25,078",



							"dailycount": "2,331",


							"dailydeath": "7",
							"date": "08/23",
							"info": "through 6:00pm 08/22/2021",


							"testingaverage": "115,951",

							"peopletested": "7,938,926",

							"positivity": "3.41%",
							"hospitalizations": "1,722"


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



