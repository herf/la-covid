$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,189,232", 

								"death": "21,241", 

								"dailycount": "1,838", 

								"dailydeath": "144", 

								"date":"02/26" ,
								"info":"through 6:00pm 02/25/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/26" ,
								"infom":"through 6:00pm 02/25/2021" ,
								
								"testingaverage":"50,637" ,
								"peopletested":"5,811,376" ,
								"positivity":"3.80%" ,	
								"hospitalizations":"1,886" 
									
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



