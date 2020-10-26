$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "299,760", 
								"death": "6,993" ,
								"dailycount": "830",
								"dailydeath": "4" ,
								"date":"10/25" ,
								"info":"through 8:00pm 10/24/2020" ,
								
								"testingaverage":"14,451" , 
								"peopletested":"3,029,108" , 
								"positivity":"3.4%" , 
								"hospitalizations":"785"	
								
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



