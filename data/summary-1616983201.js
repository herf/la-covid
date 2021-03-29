$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								"count": "1,218,225", 

								"death": "23,077",

								"dailycount": "538", 
								"dailydeath": "1", 
								
								"date":"03/28" ,
								"info":"through 6:00pm 03/27/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/26" ,
								"infom":"through 6:00pm 03/25/2021" ,
								
								"testingaverage":"42,669" , 
								"peopletested":"6,069,274" ,
								"positivity":"1.50%" ,	
								"hospitalizations":"669" 									
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



