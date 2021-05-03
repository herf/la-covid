$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,233,772",

								"death": "23,915",

								"dailycount": "313",

								"dailydeath": "0", 

								"date":"05/02" ,
								"info":"through 6:00pm 05/01/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/30" ,
								"infom":"through 6:00pm 04/29/2021" ,

								"testingaverage":"64,574",
								"peopletested":"6,513,349",

								"positivity":"0.70%" ,	
								"hospitalizations":"410"
								
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



