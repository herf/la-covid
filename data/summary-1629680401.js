$( document ).ready(function() {
    var data = {
				    "content": { 

							"count": "1,383,186",

							"death": "25,071",



							"dailycount": "2,781",


							"dailydeath": "10",
							"date": "08/22",
							"info": "through 6:00pm 08/21/2021",


							"testingaverage": "114,715",

							"peopletested": "7,921,699",

							"positivity": "3.52%",
							"hospitalizations": "1,746"


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



