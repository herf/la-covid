$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,234,372",

								"death": "23,948",

								"dailycount": "287",

								"dailydeath": "21", 

								"date":"05/05" ,
								"info":"through 6:00pm 05/04/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/05" ,
								"infom":"through 6:00pm 05/04/2021" ,

								"testingaverage":"62,730",
								"peopletested":"6,534,739",

								"positivity":"0.70%" ,	
								"hospitalizations":"400"
								
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



