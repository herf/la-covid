$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,215,129", 
								"death": "22,871", 
								"dailycount": "490", 
								"dailydeath": "66", 
								
								"date":"03/23" ,
								"info":"through 6:00pm 03/22/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/23" ,
								"infom":"through 6:00pm 03/22/2021" ,
								
								"testingaverage":"43,217" , 
								"peopletested":"6,022,438" ,
								"positivity":"1.70%" ,	
								"hospitalizations":"713" 									
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



