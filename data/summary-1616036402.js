$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,211,733", 
								"death": "22,580", 
								"dailycount": "897", 
								"dailydeath": "75", 
								
								"date":"03/17" ,
								"info":"through 6:00pm 03/16/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/17" ,
								"infom":"through 6:00pm 03/16/2021" ,
								
								"testingaverage":"45,259" , 
								"peopletested":"5,972,249" ,
								"positivity":"1.90%" ,	
								"hospitalizations":"857" 									
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



