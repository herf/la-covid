$( document ).ready(function() {
    var data = {
				    "content": {          
				               								
								
								
								"count": "357,451", 
								"death": "7,396" ,
								"dailycount": "4,272",
								"dailydeath": "35" ,
								"date":"11/20" ,
								"info":"through 8:00pm 11/19/2020" ,
								
								"testingaverage":"54,094" ,
								"peopletested":"3,500,108" , 
								"positivity":"5.80%" , 
								"hospitalizations":"1,298"	

								
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



