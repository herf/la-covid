$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "216,139" ,
				            "death": "5,171" ,
				            "dailycount": "1,999" ,
				            "dailydeath": "64" ,
				            "date":"08/13" ,
				            "info":"through 8:00pm 08/12/2020" ,
				            
							"testingaverage":"18,092" ,
							"peopletested":"2,012,378" ,
							"positivity":"6.4%" ,
							"hospitalizations":"1,481" ,                    
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



