$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,233,060",

								"death": "23,890",

								"dailycount": "405",

								"dailydeath": "21", 

								"date":"04/30" ,
								"info":"through 6:00pm 04/29/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/30" ,
								"infom":"through 6:00pm 04/29/2021" ,

								"testingaverage":"65,238",
								"peopletested":"6,488,927",

								"positivity":"0.70%" ,	
								"hospitalizations":"420"
								
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



