$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,228,564",


								"death": "23,626",

								"dailycount": "527",


								"dailydeath": "29", 


								"date":"04/17" ,
								"info":"through 6:00pm 04/16/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/16" ,
								"infom":"through 6:00pm 04/15/2021" ,

								
								"testingaverage":"51,149", 
								"peopletested":"6,291,857",
								"positivity":"1.20%" ,	
								"hospitalizations":"498"
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



