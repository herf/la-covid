$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,214,178", 
								"death": "22,797", 
								"dailycount": "423", 
								"dailydeath": "20", 
								
								"date":"03/21" ,
								"info":"through 6:00pm 03/20/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/19" ,
								"infom":"through 6:00pm 03/18/2021" ,
								
								"testingaverage":"44,458" , 
								"peopletested":"6,009,812" ,
								"positivity":"1.70%" ,	
								"hospitalizations":"792" 									
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


