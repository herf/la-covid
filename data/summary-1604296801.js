$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "309,190", 
								"death": "7,074" ,
								"dailycount": "1,590",
								"dailydeath": "4" ,
								"date":"11/01" ,
								"info":"through 8:00pm 10/31/2020" ,
								
								"testingaverage":"15,610" , 
								"peopletested":"3,141,284" , 
								"positivity":"3.4%" , 
								"hospitalizations":"799"	
								
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



