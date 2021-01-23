$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,054,802", 

								"death": "14,894", 

								"dailycount": "9,277", 

								"dailydeath": "256", 

								"date":"01/22" ,
								"info":"through 6:00pm 01/21/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/22" ,
								"infom":"through 6:00pm 01/21/2021" ,
								
								"testingaverage":"94,886" ,
								"peopletested":"5,326,930" ,
								"positivity":"14.50%" ,		
								"hospitalizations":"7,073"									
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



