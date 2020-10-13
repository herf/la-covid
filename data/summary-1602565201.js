$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "282,982", 
								"death": "6,773" ,
								"dailycount": "881",
								"dailydeath": "2" ,
								 "date":"10/12" ,
								"info":"through 8:00pm 10/11/2020" ,
								 "testingaverage":"12,257" , 
								"peopletested":"2,826,640" , 
								"positivity":"3.20%" , 
								"hospitalizations":"693"	
								
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



