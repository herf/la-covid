$( document ).ready(function() {
    var data = {
				    "content": { 

							"count": "1,388,143",

							"death": "25,114",



							"dailycount": "2,600",


							"dailydeath": "39",
							"date": "08/24",
							"info": "through 6:00pm 08/23/2021",


							"testingaverage": "120,284",

							"peopletested": "7,960,226",

							"positivity": "3.30%",
							"hospitalizations": "1,724"


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



