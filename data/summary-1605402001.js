$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "336,549", 
								"death": "7,266" ,
								"dailycount": "3,780",
								"dailydeath": "20" ,
								"date":"11/13" ,
								"info":"through 8:00pm 11/12/2020" ,
								
								"testingaverage":"48,662" , 
								"peopletested":"3,365,913" , 
								"positivity":"5.1%" , 
								"hospitalizations":"966"	

								
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
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



