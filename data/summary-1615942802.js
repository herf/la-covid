$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,210,905", 
								"death": "22,519", 
								"dailycount": "318", 
								"dailydeath": "52", 
								
								"date":"03/16" ,
								"info":"through 6:00pm 03/15/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/16" ,
								"infom":"through 6:00pm 03/15/2021" ,
								
								"testingaverage":"45,409" , 
								"peopletested":"5,962,311" ,
								"positivity":"1.90%" ,	
								"hospitalizations":"865" 									
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



