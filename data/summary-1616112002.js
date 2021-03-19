$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,212,586", 
								"death": "22,664", 
								"dailycount": "933", 
								"dailydeath": "88", 
								
								"date":"03/18" ,
								"info":"through 6:00pm 03/17/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/18" ,
								"infom":"through 6:00pm 03/17/2021" ,
								
								"testingaverage":"44,744" , 
								"peopletested":"5,984,204" ,
								"positivity":"1.90%" ,	
								"hospitalizations":"861" 									
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



