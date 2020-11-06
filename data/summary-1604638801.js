$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "315,564", 
								"death": "7,140" ,
								"dailycount": "2,065",
								"dailydeath": "25" ,
								"date":"11/05" ,
								"info":"through 8:00pm 11/04/2020" ,
								
								"testingaverage":"16,161" , 
								"peopletested":"3,200,271" , 
								"positivity":"3.8%" , 
								"hospitalizations":"825"	
								
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



