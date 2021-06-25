$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,248,737",

								"death": "24,470",

								"dailycount": "336",
								"dailydeath": "5",
								"date":"06/25" ,
								"info":"through 6:00pm 06/24/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/25" ,
								"infom":"through 6:00pm 06/24/2021" ,

								"testingaverage":"33,858",

								"peopletested":"6,990,937",

								"positivity":"0.72%" , 
								"hospitalizations":"224" 

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



