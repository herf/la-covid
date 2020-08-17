$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "221,950",
				            "death": "5,254" ,
				            "dailycount": "1,192",
				            "dailydeath": "9" ,
				            "date":"08/16" ,
				            "info":"through 8:00pm 08/15/2020" ,
				            
							"testingaverage":"17,445" ,
							"peopletested":"2,077,966" ,
							"positivity":"5.9%" ,
							"hospitalizations":"1,357" ,                    
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



