$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,203,152", 
								"death": "22,029", 
								"dailycount": "1,313", 
								"dailydeath": "22", 
								"date":"03/07" ,
								"info":"through 6:00pm 03/06/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/05" ,
								"infom":"through 6:00pm 03/04/2021" ,
								
								"testingaverage":"48,759" , 
								"peopletested":"5,894,340" ,
								"positivity":"2.5%" ,	
								"hospitalizations":"1,176" 									
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



