$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								"count": "1,218,958", 

								"death": "23,110",

								"dailycount": "386", 
								"dailydeath": "26", 
								
								"date":"03/30" ,
								"info":"through 6:00pm 03/29/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/30" ,
								"infom":"through 6:00pm 03/29/2021" ,
								
								"testingaverage":"43,047" , 
								"peopletested":"6,080,900" ,
								"positivity":"1.50%" ,	
								"hospitalizations":"649" 									
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



