$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,224,503",


								"death": "23,431",

								"dailycount": "752",


								"dailydeath": "48", 


								"date":"04/09" ,
								"info":"through 6:00pm 04/08/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/09" ,
								"infom":"through 6:00pm 04/08/2021" ,

								
								"testingaverage":"40,414", 
								"peopletested":"6,175,302",
								"positivity":"1.50%" ,	
								"hospitalizations":"540"
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



