$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,210,663", 
								"death": "22,475", 
								"dailycount": "422", 
								"dailydeath": "6", 
								
								"date":"03/15" ,
								"info":"through 6:00pm 03/14/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/15" ,
								"infom":"through 6:00pm 03/14/2021" ,
								
								"testingaverage":"46,253" , 
								"peopletested":"5,960,530" ,
								"positivity":"2%" ,	
								"hospitalizations":"893" 									
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



