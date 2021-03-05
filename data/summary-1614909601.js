$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,198,098", 


								"death": "21,778", 


								"dailycount": "2,253", 


								"dailydeath": "119", 

								"date":"03/04" ,
								"info":"through 6:00pm 03/03/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/04" ,
								"infom":"through 6:00pm 03/03/2021" ,
								
								"testingaverage":"50,069" , 
								"peopletested":"5,866,359" , 
								"positivity":"2.70%" ,	
								"hospitalizations":"1,401" 
									
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



