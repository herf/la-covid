$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,228,114",


								"death": "23,601",

								"dailycount": "643",


								"dailydeath": "36", 


								"date":"04/16" ,
								"info":"through 6:00pm 04/15/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/16" ,
								"infom":"through 6:00pm 04/15/2021" ,

								
								"testingaverage":"50,163", 
								"peopletested":"6,271,567",
								"positivity":"1.20%" ,	
								"hospitalizations":"512"
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



