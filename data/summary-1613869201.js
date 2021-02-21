$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,179,063", 

								"death": "19,793", 

								"dailycount": "2,393", 

								"dailydeath": "136", 

								"date":"02/20" ,
								"info":"through 6:00pm 02/19/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/19" ,
								"infom":"through 6:00pm 02/18/2021" ,
								
								"testingaverage":"56,630" ,
								"peopletested":"5,750,574" ,
								"positivity":"5.20%" ,	
								"hospitalizations":"2,498" 
									
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



