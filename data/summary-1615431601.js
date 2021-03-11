$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,206,713", 
								"death": "22,213", 
								"dailycount": "1,514", 
								"dailydeath": "119", 
								
								"date":"03/10" ,
								"info":"through 6:00pm 03/09/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/10" ,
								"infom":"through 6:00pm 03/09/2021" ,
								
								"testingaverage":"47,920" , 
								"peopletested":"5,914,814" ,
								"positivity":"2.20%" ,	
								"hospitalizations":"1,079" 									
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



