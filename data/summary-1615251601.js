$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,204,018", 
								"death": "22,041", 
								"dailycount": "880", 
								"dailydeath": "13", 
								
								"date":"03/08" ,
								"info":"through 6:00pm 03/07/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/08" ,
								"infom":"through 6:00pm 03/07/2021" ,
								
								"testingaverage":"48,210" , 
								"peopletested":"5,900,760" ,
								"positivity":"2.40%" ,	
								"hospitalizations":"1,132" 									
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



