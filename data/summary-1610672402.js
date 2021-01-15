$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "975,299", 
								"death": "13,234" ,
								"dailycount": "17,323", 
								"dailydeath": "287" ,
								"date":"01/14" ,
								"info":"through 6:00pm 01/13/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/14" ,
								"infom":"through 6:00pm 01/13/2021" ,
								
								"testingaverage":"93,150" , 
								"peopletested":"5,119,149" ,
								"positivity":"18.20%" ,		
								"hospitalizations":"7,906"		
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



