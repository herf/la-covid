$( document ).ready(function() {
    var data = {
				    "content": {          
				               								
								
								
								"count": "361,869", 
								"death": "7,329" ,
								"dailycount": "4,522",
								"dailydeath": "34" ,
								"date":"11/21" ,
								"info":"through 8:00pm 11/20/2020" ,
								
								"testingaverage":"56,031" ,
								"peopletested":"3,528,447" , 
								"positivity":"5.9%" , 
								"hospitalizations":"1,391"	

								
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



