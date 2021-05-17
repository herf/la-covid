$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,237,411",



								"death": "24,094",



								"dailycount": "240",

								"dailydeath": "7",

								"date":"05/16" ,
								"info":"through 6:00pm 05/15/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/14" ,
								"infom":"through 6:00pm 05/13/2021" ,

								"testingaverage":"59,351",
								"peopletested":"6,623,713",

								"positivity":"0.60%" ,	
								"hospitalizations":"325" 
								

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



