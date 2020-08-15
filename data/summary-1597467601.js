$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "218,693" ,
				            "death": "5,214" ,
				            "dailycount": "2,642" ,
				            "dailydeath": "45" ,
				            "date":"08/14" ,
				            "info":"through 8:00pm 08/13/2020" ,
				            
							"testingaverage":"18,243" ,
							"peopletested":"2,036,934" ,
							"positivity":"6.2%" ,
							"hospitalizations":"1,415" ,                    
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



