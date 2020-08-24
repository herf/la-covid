$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "231,695",
				            "death": "5,545" ,
				            "dailycount": "1,098",
				            "dailydeath": "8" ,
				            "date":"08/23" ,
				            "info":"through 8:00pm 08/22/2020" ,
				            
							"testingaverage":"15,702" ,
							"peopletested":"2,182,882" ,
							"positivity":"5.4%" ,
							"hospitalizations":"1,247" ,                    
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



