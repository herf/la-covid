$( document ).ready(function() {
    var data = {
				    "content": { 

							"count": "1,394,488",

							"death": "25,181",



							"dailycount": "3,226",


							"dailydeath": "31",
							"date": "08/26",
							"info": "through 6:00pm 08/25/2021",


							"testingaverage": "131,495",

							"peopletested": "8,011,695",

							"positivity": "2.86%",
							"hospitalizations": "1,731"


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



