$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,239,093",





								"death": "24,184",





								"dailycount": "191",


								"dailydeath": "10",

								"date":"05/25" ,
								"info":"through 6:00pm 05/24/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/25" ,
								"infom":"through 6:00pm 05/24/2021" ,

								"testingaverage":"62,861",
								"peopletested":"6,711,792",

								"positivity":"0.40%" ,
								"hospitalizations":"325" 



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



