$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,195,913", 


								"death": "21,669", 


								"dailycount": "1,759", 


								"dailydeath": "116", 

								"date":"03/03" ,
								"info":"through 6:00pm 03/02/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/03" ,
								"infom":"through 6:00pm 03/02/2021" ,
								
								"testingaverage":"50,782" , 
								"peopletested":"5,854,982" , 
								"positivity":"2.80%" ,	
								"hospitalizations":"1,476" 
									
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



