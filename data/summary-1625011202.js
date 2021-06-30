$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,249,835",

								"death": "24,482",


								"dailycount": "321",
								"dailydeath": "3",
								"date":"06/29" ,
								"info":"through 6:00pm 06/28/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/29" ,
								"infom":"through 6:00pm 06/28/2021" ,

								"testingaverage":"34,114",

								"peopletested":"7,013,715",

								"positivity":"0.78%", 
								"hospitalizations":"229" 

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
				
				$('#dte_m').html(content.datem);
				$('#cse_m').html(content.infom);
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



