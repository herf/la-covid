$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,230,362",


								"death": "23,736",

								"dailycount": "439",


								"dailydeath": "36", 


								"date":"04/22" ,
								"info":"through 6:00pm 04/21/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/22" ,
								"infom":"through 6:00pm 04/21/2021" ,

								
								"testingaverage":"60,010", 
								"peopletested":"6,378,876",
								"positivity":"1%" ,	
								"hospitalizations":"468"
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



