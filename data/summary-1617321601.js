$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								"count": "1,220,246", 

								"death": "23,189",

								"dailycount": "757", 
								"dailydeath": "53", 
								
								"date":"04/01" ,
								"info":"through 6:00pm 03/31/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/01" ,
								"infom":"through 6:00pm 03/31/2021" ,
								
								"testingaverage":"43,389" , 
								"peopletested":"6,101,752" ,
								"positivity":"1.40%" ,	
								"hospitalizations":"652" 									
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



