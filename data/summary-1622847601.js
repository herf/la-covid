$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,244,662",
								"death": "24,378",
								"dailycount": "234",
								"dailydeath": "14",
								"date":"06/04" ,
								"info":"through 6:00pm 06/03/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/04" ,
								"infom":"through 6:00pm 06/03/2021" ,

								"testingaverage":"59,473",
								"peopletested":"6,795,742",

								"positivity":"0.40%" ,
								"hospitalizations":"253" 



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



