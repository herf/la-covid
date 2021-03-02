$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,192,895", 


								"death": "21,467", 


								"dailycount": "987", 


								"dailydeath": "32", 

								"date":"03/01" ,
								"info":"through 6:00pm 02/28/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/01" ,
								"infom":"through 6:00pm 02/28/2021" ,
								
								"testingaverage":"53,943" , 
								"peopletested":"5,839,782" , 
								"positivity":"3.20%" ,	
								"hospitalizations":"1,578" 
									
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



