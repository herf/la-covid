$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "278,665",
				            "death": "6,726" ,
				            "dailycount": "1,280",
				            "dailydeath": "21" ,
				            "date":"10/08" ,
				            "info":"through 8:00pm 10/07/2020" ,
				            
							"testingaverage":"11,566" ,
							"peopletested":"2,770,458" ,
							"positivity":"3.3%" ,
							"hospitalizations":"709" 							
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



