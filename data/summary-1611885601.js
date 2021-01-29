$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,097,941", 

								"death": "16,107", 

								"dailycount": "6,592", 

								"dailydeath": "213", 

								"date":"01/28" ,
								"info":"through 6:00pm 01/27/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/28" ,
								"infom":"through 6:00pm 01/27/2021" ,
								
								"testingaverage":"82,509" ,
								"peopletested":"5,445,817" ,
								"positivity":"12.40%" ,		
								"hospitalizations":"6,026"									
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



