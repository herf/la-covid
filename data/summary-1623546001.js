$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,246,123",
								"death": "24,415",
								"dailycount": "196",
								"dailydeath": "4",
								"date":"06/12" ,
								"info":"through 6:00pm 06/11/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/11" ,
								"infom":"through 6:00pm 06/10/2021" ,

								"testingaverage":"57,070",
								"peopletested":"6,879,557",

								"positivity":"0.40%" ,
								"hospitalizations":"236" 



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



