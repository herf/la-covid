$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "249,241",
				            "death": "6,036" ,
				            "dailycount": "439",
				            "dailydeath": "7" ,
				            "date":"09/08" ,
				            "info":"through 8:00pm 09/07/2020" ,
				            
							"testingaverage":"12,109" ,
							"peopletested":"2,385,860" ,
							"positivity":"4.1%" ,
							"hospitalizations":"942" , 
							                
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



