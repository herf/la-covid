$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "220,762" ,
				            "death": "5,245" ,
				            "dailycount": "2,103" ,
				            "dailydeath": "35" ,
				            "date":"08/15" ,
				            "info":"through 8:00pm 08/14/2020" ,
				            
							"testingaverage":"18,032" ,
							"peopletested":"2,062,697" ,
							"positivity":"6.1%" ,
							"hospitalizations":"1,393" ,                    
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



