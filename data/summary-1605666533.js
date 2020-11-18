$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "342,343", 
								"death": "7,275" ,
								"dailycount": "2,795",
								"dailydeath": "6" ,
								"date":"11/16" ,
								"info":"through 8:00pm 11/15/2020" ,
								
								"testingaverage":"49,483" , 
								"peopletested":"3,406,261" , 
								"positivity":"5.2%" , 
								"hospitalizations":"1,049"	

								
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



