$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,217,707", 
								"death": "23,078", 
								"dailycount": "700", 
								"dailydeath": "23", 
								
								"date":"03/27" ,
								"info":"through 6:00pm 03/26/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/26" ,
								"infom":"through 6:00pm 03/25/2021" ,
								
								"testingaverage":"42,302" , 
								"peopletested":"6,061,309" ,
								"positivity":"1.60%" ,	
								"hospitalizations":"676" 									
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



