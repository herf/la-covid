$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,231,806",

								"death": "23,777",

								"dailycount": "288",

								"dailydeath": "4", 

								"date":"04/26" ,
								"info":"through 6:00pm 04/25/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/26" ,
								"infom":"through 6:00pm 04/25/2021" ,

								"testingaverage":"65,086",
								"peopletested":"6,443,228",

								"positivity":"0.90%" ,	
								"hospitalizations":"407"
								
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



