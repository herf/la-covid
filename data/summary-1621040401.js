$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,236,988",

								"death": "24,074",

								"dailycount": "583",

								"dailydeath": "17", 

								"date":"05/14" ,
								"info":"through 6:00pm 05/13/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/14" ,
								"infom":"through 6:00pm 05/13/2021" ,

								"testingaverage":"59,716",
								"peopletested":"6,623,713",

								"positivity":"0.60%" ,	
								"hospitalizations":"366"
								
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


