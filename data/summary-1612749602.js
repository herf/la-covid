$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,146,450", 

								"death": "18,044", 

								"dailycount": "3,123", 

								"dailydeath": "89", 

								"date":"02/07" ,
								"info":"through 6:00pm 02/06/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/05" ,
								"infom":"through 6:00pm 02/04/2021" ,
								
								"testingaverage":"69,787" ,
								"peopletested":"5,602,118" ,
								"positivity":"9.60%" ,	
								"hospitalizations":"4,421" 
									
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



