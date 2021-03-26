$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,216,250", 
								"death": "23,020", 
								"dailycount": "608", 
								"dailydeath": "66", 
								
								"date":"03/25" ,
								"info":"through 6:00pm 03/24/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/25" ,
								"infom":"through 6:00pm 03/24/2021" ,
								
								"testingaverage":"42,575" , 
								"peopletested":"6,041,144" ,
								"positivity":"1.60%" ,	
								"hospitalizations":"729" 									
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



