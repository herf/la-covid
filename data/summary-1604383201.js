$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "310,595", 
								"death": "7,076" ,
								"dailycount": "1,406",
								"dailydeath": "2" ,
								"date":"11/02" ,
								"info":"through 8:00pm 11/01/2020" ,
								
								"testingaverage":"15,898" , 
								"peopletested":"3,155,549" , 
								"positivity":"3.3%" , 
								"hospitalizations":"777"	
								
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



