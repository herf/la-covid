$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								"count": "1,219,562", 

								"death": "23,143",

								"dailycount": "648", 
								"dailydeath": "40", 
								
								"date":"03/31" ,
								"info":"through 6:00pm 03/30/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/31" ,
								"infom":"through 6:00pm 03/30/2021" ,
								
								"testingaverage":"43,247" , 
								"peopletested":"6,092,281" ,
								"positivity":"1.40%" ,	
								"hospitalizations":"638" 									
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



